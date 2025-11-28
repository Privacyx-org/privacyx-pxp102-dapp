// src/components/DevelopersSection.jsx
import { PXP102_STATUS_API_BASE_URL, PXP102_IDENTITY_PASS_ADDRESS } from "../config";
import StatusPlayground from "./StatusPlayground";

function CodeBlock({ children }) {
  return (
    <pre className="text-[11px] sm:text-xs bg-black/70 border border-slate-700 rounded-xl p-3 overflow-x-auto font-mono">
      {children}
    </pre>
  );
}

export default function DevelopersSection() {
  return (
    <section
      id="developers"
      className="mb-12 rounded-2xl border border-slate-800 bg-black/40 p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold">Developer integrations</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Use PXP-102 as a low-level identity primitive: status API +
            direct on-chain checks via <span className="font-mono">privacyx-sdk</span>.
          </p>
        </div>
        <div className="text-[11px] text-right text-slate-500">
          <div>
            IdentityPass (mainnet):{" "}
            <span className="font-mono text-privacyx">
              {PXP102_IDENTITY_PASS_ADDRESS}
            </span>
          </div>
          <div>
            Status API base URL:{" "}
            <span className="font-mono text-privacyx">
              {PXP102_STATUS_API_BASE_URL || "<proxied via /health, /pxp-102/... >"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Status API bloc */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold flex items-center gap-2">
            A) Status API (HTTP)
            <span className="text-[10px] rounded-full border border-privacyx/40 px-2 py-0.5 text-privacyx bg-black/40">
              /pxp-102/status
            </span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Perfect for Web2 backends, gateways, and dashboards. You call a
            simple HTTP endpoint, we handle the on-chain calls.
          </p>

          <p className="text-[11px] text-slate-400">cURL example:</p>
          <CodeBlock>{`curl -H "x-api-key: YOUR_API_KEY" \\
  "${PXP102_STATUS_API_BASE_URL || "https://api.your-domain.com"}/pxp-102/status?issuer=0xISSUER_BYTES32&nullifier=0xNULLIFIER_BYTES32"`}</CodeBlock>

          <p className="text-[11px] text-slate-400">Node.js / Axios example:</p>
          <CodeBlock>{`import axios from "axios";

const BASE_URL = "${PXP102_STATUS_API_BASE_URL || "https://api.your-domain.com"}";

async function checkIdentityStatus(issuerHex, nullifierHex) {
  const res = await axios.get(\`\${BASE_URL}/pxp-102/status\`, {
    headers: {
      "x-api-key": process.env.PXP102_API_KEY, // ⚠️ keep this server-side in prod
    },
    params: {
      issuer: issuerHex,
      nullifier: nullifierHex,
    },
  });

  return res.data; // { currentRoot, nullifierUsed, ... }
}`}</CodeBlock>

          <p className="text-[11px] text-slate-400">
            ⚠️ In production, never expose your API key in frontend code.
            Keep API calls on your backend.
          </p>
        </div>

        {/* Direct on-chain bloc */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">
            B) Direct on-chain via <span className="font-mono">privacyx-sdk</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Use PXP-102 as a pure on-chain primitive: directly query the
            IdentityPass contract from Node.js, workers, or backend services.
          </p>

          <p className="text-[11px] text-slate-400">Node.js example (read path):</p>
          <CodeBlock>{`import { JsonRpcProvider, toBeHex } from "ethers";
import { IdentityPass, parsePubSignals } from "privacyx-sdk";
import { readFile } from "node:fs/promises";

const provider = new JsonRpcProvider(process.env.RPC_URL);
const idPass = new IdentityPass({
  chainId: 1,
  provider,
  address: "${PXP102_IDENTITY_PASS_ADDRESS}",
});

async function checkDemoIdentity() {
  const pubSignalsJson = JSON.parse(
    await readFile("identity_public.example.json", "utf8")
  );

  const [rootField, issuerField, nullifierField] = parsePubSignals(
    pubSignalsJson,
    3
  );

  const issuerHex = toBeHex(issuerField, 32);
  const nullifierHex = toBeHex(nullifierField, 32);

  const currentRoot = await idPass.getCurrentRoot(issuerHex);
  const used = await idPass.isNullifierUsed(nullifierHex);

  console.log("currentRoot:", currentRoot.toString());
  console.log("nullifierUsed:", used);
}`}</CodeBlock>

          <p className="text-[11px] text-slate-400">
            For full Groth16 proof submission examples, see:
          </p>
          <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1">
            <li>
              <span className="font-mono">
                privacyx-identity-pass / zk / identity_proof.example.json
              </span>
            </li>
            <li>
              <span className="font-mono">
                privacyx-sdk / examples / identity-pass-local-hardhat.example.mjs
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Backend proxy example */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-black/40 p-4 sm:p-5">
        <h4 className="text-sm font-semibold mb-2">
          C) Backend proxy (Express example)
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mb-2">
          In production, your frontend should talk to your own backend, and your
          backend forwards to the PXP-102 Status API with the API key attached.
        </p>
        <p className="text-[11px] text-slate-400 mb-1">
          Minimal Express proxy:
        </p>
        <CodeBlock>{`import express from "express";
import axios from "axios";

const app = express();

const UPSTREAM_BASE_URL = process.env.PXP102_STATUS_UPSTREAM_URL || "https://pxp102-status.your-domain.com";
const API_KEY = process.env.PXP102_API_KEY;

// Optional: basic health route for your own monitoring
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "pxp-102-proxy" });
});

// Proxy for /pxp-102/status/default
app.get("/pxp-102/status/default", async (_req, res) => {
  try {
    const upstreamRes = await axios.get(\`\${UPSTREAM_BASE_URL}/pxp-102/status/default\`, {
      headers: API_KEY ? { "x-api-key": API_KEY } : {},
    });

    res.json(upstreamRes.data);
  } catch (err) {
    console.error("Proxy error (default):", err.message);
    res.status(500).json({ error: "Upstream error" });
  }
});

// Generic proxy for /pxp-102/status?issuer=...&nullifier=...
app.get("/pxp-102/status", async (req, res) => {
  try {
    const upstreamRes = await axios.get(\`\${UPSTREAM_BASE_URL}/pxp-102/status\`, {
      headers: API_KEY ? { "x-api-key": API_KEY } : {},
      params: {
        issuer: req.query.issuer,
        nullifier: req.query.nullifier,
      },
    });

    res.json(upstreamRes.data);
  } catch (err) {
    console.error("Proxy error (status):", err.message);
    res.status(500).json({ error: "Upstream error" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(\`PXP-102 proxy listening on port \${port}\`);
});`}</CodeBlock>

        <p className="mt-2 text-[11px] text-slate-500">
          Your frontend points to this proxy (e.g.{" "}
          <span className="font-mono">VITE_PXP102_STATUS_API_BASE_URL=https://api.your-domain.com</span>
          ), while the proxy handles authentication and connectivity to the
          underlying PXP-102 Status API instance.
        </p>
      </div>

      <StatusPlayground />
    </section>
  );
}

