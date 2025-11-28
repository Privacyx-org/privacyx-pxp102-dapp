# PrivacyX — PXP-102 Identity Pass dApp & Status Playground

This repo contains a minimal developer-facing dApp for **PXP-102 Identity Pass**:

- A **marketing / explainer** page for the PXP-102 primitive  
- A **Developer integrations** section with ready-to-use code snippets  
- A **live Status Playground** wired to a PXP-102 Status API instance  
- Clear **production & security notes** for integrators

The goal: give integrators a **concrete, copy-pasteable path** from “what is PXP-102?” to “I can hit an API / on-chain and gate my app”.

---

## 1. Stack

- **Frontend**
  - React + Vite
  - Tailwind CSS (custom `privacyx` color theme)
- **Backend example**
  - `privacyx-sdk` Status API (separate repo)
  - Express example proxy for production usage (in the UI code examples)

This repo only ships the **frontend** playground. The Status API itself lives in `privacyx-sdk` and runs separately.

---

## 2. PXP-102 in one paragraph

**PXP-102** is a generic identity primitive based on:

- a **Groth16 circuit** (zkSNARK),
- an on-chain **Merkle tree** of issuer-verified identities,
- a **nullifier** that flips from `false` → `true` when a proof is successfully used.

Typical question any backend / dApp can ask:

isNullifierUsed(nullifierBytes32) ? → “Has this wallet already proven its identity (for this issuer / flow) at least once?”

---

## 3. Local dev setup

### 3.1. Clone & install

From the root of this Vite app:

cd privacyx-pxp102-dapp/vite-project  
npm install

### 3.2. Run the PXP-102 Status API (from privacyx-sdk)

In a separate terminal, from your privacyx-sdk repo:

cd ~/privacyx-sdk

export RPC_URL="https://mainnet.infura.io/v3/YOUR_KEY"  
export IDENTITY_PASS_ADDRESS="0x2b8899B3ACDe63Fd5ABefa0D75d5982622665498"  
export PXP102_API_KEY="test-secret-key"

PORT=4000 node examples/identity-pass-mainnet-status-api.example.mjs

You should see something like:

✅ PXP-102 status API listening on http://localhost:4000  
• GET /  
• GET /health  
• GET /pxp-102/status/default  
• GET /pxp-102/status?issuer=0x...&nullifier=0x...

### 3.3. Vite dev server (with proxy)

Back in the Vite project:

cd ~/privacyx-pxp102-dapp/vite-project  
npm run dev

Open:

- http://localhost:5173 → PXP-102 dApp UI  
- http://127.0.0.1:4000/health → raw Status API JSON  

In dev, the frontend uses the Vite proxy (vite.config.js) to forward:

- /health → http://127.0.0.1:4000/health  
- /pxp-102/... → http://127.0.0.1:4000/pxp-102/...  

so the React app can call relative URLs without CORS issues.

---

## 4. Frontend configuration

Config lives in `src/config.js`:

export const PXP102_STATUS_API_BASE_URL =  
  import.meta.env.VITE_PXP102_STATUS_API_BASE_URL || "";

export const PXP102_IDENTITY_PASS_ADDRESS =  
  "0x2b8899B3ACDe63Fd5ABefa0D75d5982622665498";

### Dev mode
- PXP102_STATUS_API_BASE_URL = ""  
- App calls `/health` and `/pxp-102/...` → intercepted by Vite proxy.

### Production mode

Set:

VITE_PXP102_STATUS_API_BASE_URL=https://api.your-domain.com

The frontend then calls:

- https://api.your-domain.com/health  
- https://api.your-domain.com/pxp-102/status/default  
- https://api.your-domain.com/pxp-102/status?issuer=...&nullifier=...

---

## 5. Live Status Playground

The `StatusPlayground` component shows:

- /health connectivity  
- /pxp-102/status/default (with optional x-api-key)  

Rendered JSON includes:

- currentRoot  
- expectedRoot  
- rootMatches  
- nullifierUsed  
- network  
- contractAddress  
- etc.

In dev, this goes through your local proxy instance automatically.

---

## 6. Developer integration modes

The Developer integrations section showcases **3 approaches**:

### A) Status API (HTTP)

Use the PXP-102 Status API directly:

- ideal for SaaS backends  
- simple request: issuer + nullifier  
- simple response: `{ currentRoot, nullifierUsed, ... }`

Examples in UI:

- curl with x-api-key  
- Node.js + Axios  

### B) Direct on-chain via privacyx-sdk

Use `privacyx-sdk` in Node / workers:

- read Merkle root  
- check nullifier  
- submit Groth16 proofs (extended examples)

Uses:

- JsonRpcProvider (ethers)  
- IdentityPass class  
- parsePubSignals to derive issuer/nullifier from public signals  

### C) Backend proxy (recommended for production)

Frontend → your backend → upstream Status API.  
Backend attaches API key & protects secrets.

Example Express proxy:

import express from "express";  
import axios from "axios";

const app = express();

const UPSTREAM_BASE_URL =  
  process.env.PXP102_STATUS_UPSTREAM_URL || "https://pxp102-status.your-domain.com";
const API_KEY = process.env.PXP102_API_KEY;

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "pxp-102-proxy" });
});

app.get("/pxp-102/status/default", async (_req, res) => {
  try {
    const upstreamRes = await axios.get(
      `${UPSTREAM_BASE_URL}/pxp-102/status/default`,
      { headers: API_KEY ? { "x-api-key": API_KEY } : {} }
    );
    res.json(upstreamRes.data);
  } catch (err) {
    res.status(500).json({ error: "Upstream error" });
  }
});

app.get("/pxp-102/status", async (req, res) => {
  try {
    const upstreamRes = await axios.get(
      `${UPSTREAM_BASE_URL}/pxp-102/status`,
      {
        headers: API_KEY ? { "x-api-key": API_KEY } : {},
        params: {
          issuer: req.query.issuer,
          nullifier: req.query.nullifier,
        },
      }
    );
    res.json(upstreamRes.data);
  } catch (err) {
    res.status(500).json({ error: "Upstream error" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`PXP-102 proxy listening on port ${port}`);
});

Your frontend then just sets:

VITE_PXP102_STATUS_API_BASE_URL=https://api.your-domain.com

---

## 7. Production & security notes (TL;DR)

- Treat PXP-102 as a **backend primitive**.  
- Never expose:  
  - PXP102_API_KEY  
  - RPC credentials  
  - issuer/nullifier logic  
- Use architecture:  
  - Frontend → your Backend / Proxy  
  - Backend → Status API  

This repo’s UI is ideal for:

- local integration testing  
- onboarding developers  
- partner demos of PXP-102  

