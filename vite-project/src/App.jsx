import React, { useState } from "react";
import "./index.css";
import logo from "./assets/logo-prvx.png";

// Icône Soleil (Light mode) – style Privacyx #4befa0
const SunIcon = () => (
  <svg
    className="w-4 h-4 md:w-4 md:h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4befa0"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

// Icône Lune (Dark mode) – style Privacyx #4befa0
const MoonIcon = () => (
  <svg
    className="w-4 h-4 md:w-4 md:h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4befa0"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21Z" />
  </svg>
);

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`inline-flex items-center justify-center text-sm px-2 py-1 rounded-xl border transition-colors ${
        darkMode ? "border-white/10 bg-white/5" : "border-gray-300 bg-white"
      }`}
      aria-label="Toggle theme"
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const textPrimary = darkMode ? "text-slate-100" : "text-slate-900";
  const textSecondary = darkMode ? "text-slate-400" : "text-slate-700";
  const textMuted = darkMode ? "text-slate-500" : "text-slate-700";
  const bodyText = darkMode ? "text-slate-300" : "text-slate-800";
  const borderSubtle = darkMode ? "border-slate-700" : "border-slate-300";
  const borderStrong = darkMode ? "border-slate-800" : "border-slate-400";
  const cardBg = darkMode ? "bg-black/40" : "bg-white";
  const sectionBg = darkMode ? "bg-black/40" : "bg-white";
  const headerShadow = darkMode
    ? "shadow-lg shadow-privacyx/40"
    : "shadow-md shadow-neutral-400/40";
  const statusBadgeBorder = darkMode ? "border-slate-600" : "border-slate-400";
  const statusBadgeText = darkMode ? "text-slate-200" : "text-slate-800";

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden break-words transition-colors duration-300 ${textPrimary}`}
      style={{ backgroundColor: darkMode ? "#101010" : "#f3f3f3" }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* LOGO */}
            <div
              className={`h-9 w-9 rounded-xl flex items-center justify-center ${cardBg} ${headerShadow}`}
            >
              <img
                src={logo}
                alt="PrivacyX Logo"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-sm xs:text-base sm:text-lg font-semibold tracking-tight leading-snug">
                Privacyx · PXP-102 Identity Pass
              </h1>
              <p
                className={`text-[10px] xs:text-[11px] sm:text-xs ${textSecondary}`}
              >
                Groth16 on-chain identity primitive for Web3 integrators
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <div
            className={`hidden sm:flex flex-wrap items-center gap-3 text-xs ${textSecondary}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-privacyx" />
            <span className="whitespace-nowrap">Mainnet live</span>
            <a
              href="https://www.privacyx.tech/pxp-102"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] transition max-w-full ${
                darkMode
                  ? "border-slate-700 text-slate-200 hover:border-slate-300 hover:text-slate-50"
                  : "border-slate-400 text-slate-900 hover:border-slate-600 hover:text-slate-900 bg-white"
              }`}
            >
              Docs
            </a>
            <a
              href="https://github.com/Privacyx-org/privacyx-identity-pass"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] transition max-w-full ${
                darkMode
                  ? "border-slate-700 text-slate-200 hover:border-slate-300 hover:text-slate-50"
                  : "border-slate-400 text-slate-900 hover:border-slate-600 hover:text-slate-900 bg-white"
              }`}
            >
              GitHub
            </a>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Mobile nav */}
          <div
            className={`flex sm:hidden items-center gap-2 text-[11px] ${textSecondary}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-privacyx shrink-0" />
            <span className="truncate">Mainnet live</span>
            <div className="ml-auto flex gap-2 items-center">
              <a
                href="https://www.privacyx.tech/pxp-102"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center rounded-lg border px-2 py-1 text-[11px] transition ${
                  darkMode
                    ? "border-slate-700 text-slate-200 hover:border-slate-300 hover:text-slate-50"
                    : "border-slate-400 text-slate-900 hover:border-slate-600 hover:text-slate-900 bg-white"
                }`}
              >
                Docs
              </a>
              <a
                href="https://github.com/Privacyx-org/privacyx-identity-pass"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center rounded-lg border px-2 py-1 text-[11px] transition ${
                  darkMode
                    ? "border-slate-700 text-slate-200 hover:border-slate-300 hover:text-slate-50"
                    : "border-slate-400 text-slate-900 hover:border-slate-600 hover:text-slate-900 bg-white"
                }`}
              >
                GitHub
              </a>
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[2fr,1.4fr] mb-10 sm:mb-12">
          <div className="w-full">
            <p
              className={`inline-flex flex-wrap items-center gap-2 rounded-full border ${borderSubtle} ${cardBg} px-3 py-1 text-[11px] sm:text-xs text-privacyx mb-4 max-w-full`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-privacyx shrink-0" />
              <span className="truncate sm:whitespace-nowrap">
                PXP-102 · Zero-knowledge identity pass
              </span>
            </p>

            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 leading-snug">
              ZK-powered identity checks,{" "}
              <span className="text-privacyx">without leaking who you are</span>.
            </h2>

            <p
              className={`text-sm sm:text-base ${bodyText} leading-relaxed mb-6 max-w-xl`}
            >
              PXP-102 is a generic identity primitive based on Groth16 proofs and
              Merkle roots. It lets you verify{" "}
              <span
                className={
                  darkMode ? "font-medium text-slate-100" : "font-medium text-slate-900"
                }
              >
                “this wallet is verified”
              </span>{" "}
              without ever exposing raw identity data on-chain.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 w-full">
              <a
                href="#integrations"
                className="inline-flex items-center justify-center rounded-xl bg-privacyx px-4 py-2 text-sm font-semibold text-privacyx-dark shadow-md shadow-privacyx/40 hover:brightness-105 transition w-full sm:w-auto"
              >
                View integration options
              </a>
              <a
                href="#status-api"
                className={`inline-flex items-center justify-center rounded-xl border ${borderSubtle} ${cardBg} px-4 py-2 text-sm ${textPrimary} hover:border-slate-400 transition w-full sm:w-auto`}
              >
                Check status API
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm w-full">
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3 w-full`}
              >
                <p
                  className={`${darkMode ? "text-slate-400" : "text-slate-700"} mb-1`}
                >
                  Standard
                </p>
                <p className="font-medium">PXP-102 Identity Pass</p>
                <p
                  className={darkMode ? "text-slate-500 mt-1" : "text-slate-700 mt-1"}
                >
                  Groth16 + Merkle nullifier
                </p>
              </div>
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3 w-full`}
              >
                <p
                  className={`${darkMode ? "text-slate-400" : "text-slate-700"} mb-1`}
                >
                  Network
                </p>
                <p className="font-medium">Ethereum mainnet</p>
                <p
                  className={`${darkMode ? "text-slate-500" : "text-slate-700"} mt-1 text-xs`}
                >
                  IdentityPass deployed & initialized
                </p>
              </div>
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3 w-full`}
              >
                <p
                  className={`${darkMode ? "text-slate-400" : "text-slate-700"} mb-1`}
                >
                  Usage model
                </p>
                <p className="font-medium">Backend / dApp primitive</p>
                <p
                  className={`${darkMode ? "text-slate-500" : "text-slate-700"} mt-1 text-xs`}
                >
                  Status API + direct on-chain calls
                </p>
              </div>
            </div>
          </div>

          {/* Status API card */}
          <div
            id="status-api"
            className={`rounded-2xl border ${borderSubtle} ${
              darkMode
                ? "bg-gradient-to-b from-neutral-950/80 to-neutral-900/80"
                : cardBg
            } p-4 sm:p-5 shadow-lg shadow-black/40 w-full`}
          >
            <h3 className="text-sm font-semibold mb-2 flex flex-wrap items-center gap-2">
              <span>PXP-102 Identity Status API</span>
              <span
                className={`text-[10px] rounded-full border ${statusBadgeBorder} px-2 py-0.5 ${statusBadgeText} ${cardBg} whitespace-nowrap`}
              >
                Mainnet
              </span>
            </h3>
            <p className={`text-xs ${bodyText} mb-3`}>
              A minimal HTTP API (Express + privacyx-sdk) that lets integrators:
            </p>
            <ul
              className={`list-disc list-inside text-xs ${bodyText} space-y-1 mb-3`}
            >
              <li>Read the current Merkle root for an issuer</li>
              <li>Check whether a nullifier has already been used</li>
              <li>Integrate PXP-102 in KYC / access-control flows</li>
            </ul>

            <div className="mb-3">
              <p className="text-[11px] text-slate-400 mb-1">
                Example (reference deployment: identitypass-api.privacyx.tech)
              </p>
              <pre
                className={`text-[11px] ${cardBg} border ${borderSubtle} rounded-xl p-3 whitespace-pre-wrap break-all`}
              >
{`curl -H "x-api-key: YOUR_API_KEY" \
  "https://identitypass-api.privacyx.tech/pxp-102/status?issuer=0xISSUER_BYTES32&nullifier=0xNULLIFIER_BYTES32"`}
              </pre>
            </div>

            <div className="text-[11px] text-slate-400 mb-1">
              Typical JSON response:
            </div>
            <pre
              className={`text-[11px] ${cardBg} border ${borderSubtle} rounded-xl p-3 whitespace-pre-wrap break-all`}
            >
{`{
  "network": "mainnet",
  "contractAddress": "0x2b88...",
  "issuerHex": "0x0000...0002",
  "nullifierHex": "0x0000...0007",
  "currentRoot": "5",
  "nullifierUsed": false
}`}
            </pre>
          </div>
        </section>

        {/* How it works / Integrations */}
        <section className="grid gap-8 md:grid-cols-2 mb-10 sm:mb-12 w-full">
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-3">How PXP-102 works</h3>
            <div className={`space-y-3 text-sm ${bodyText}`}>
              <p>
                PXP-102 is based on a{" "}
                <span className={darkMode ? "text-slate-100" : "text-slate-900"}>
                  Groth16 circuit
                </span>{" "}
                and an{" "}
                <span className={darkMode ? "text-slate-100" : "text-slate-900"}>
                  on-chain Merkle tree
                </span>{" "}
                of issuer-verified identities.
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>An issuer verifies a user off-chain.</li>
                <li>The issuer updates its Merkle root on the IdentityPass contract.</li>
                <li>The user generates a Groth16 proof client-side or backend-side.</li>
                <li>
                  The proof is submitted on-chain, flipping a{" "}
                  <code className="bg-black/40 px-1 rounded">nullifier</code>{" "}
                  from <code>false</code> to <code>true</code>.
                </li>
              </ol>
              <p>
                Any dApp / backend can then simply ask:
                <br />
                <span className="font-mono text-xs text-privacyx">
                  isNullifierUsed(nullifierBytes32) ?
                </span>
              </p>
            </div>
          </div>

          <div id="integrations" className="w-full">
            <h3 className="text-lg font-semibold mb-3">Integration patterns</h3>
            <div className={`space-y-3 text-sm ${bodyText}`}>
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3`}
              >
                <h4 className="text-sm font-semibold mb-1">
                  A) Web2 / Web3 access-control
                </h4>
                <p className="text-xs">
                  Use the Status API to gate access to dashboards, SaaS, or
                  internal tools: if the nullifier is used, the wallet has
                  proven its identity at least once.
                </p>
              </div>
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3`}
              >
                <h4 className="text-sm font-semibold mb-1">
                  B) dApps & DeFi frontends
                </h4>
                <p className="text-xs">
                  Call the IdentityPass contract directly from your backend or
                  relayer, while keeping the user experience on your own UI.
                </p>
              </div>
              <div
                className={`rounded-xl border ${borderSubtle} ${cardBg} p-3`}
              >
                <h4 className="text-sm font-semibold mb-1">
                  C) Issuer dashboards
                </h4>
                <p className="text-xs">
                  Build an issuer-side UI to manage Merkle roots, monitor
                  nullifiers, and audit identity passes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer integration examples */}
        <section
          id="developers"
          className={`mb-10 sm:mb-12 rounded-2xl border ${borderStrong} ${sectionBg} p-4 sm:p-5 w-full`}
        >
          <h3 className="text-lg font-semibold mb-3">Developer integration examples</h3>
          <p className={`text-xs sm:text-sm ${bodyText} mb-4`}>
            Perfect for Web2 backends, gateways, and dashboards. You call a simple
            HTTP endpoint, we handle the on-chain calls.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* HTTP + curl */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">HTTP status check (curl)</h4>
              <pre
                className={`text-[11px] ${cardBg} border ${borderSubtle} rounded-xl p-3 whitespace-pre-wrap break-all font-mono`}
              >
{`curl -H "x-api-key: YOUR_API_KEY" \
  "https://identitypass-api.privacyx.tech/pxp-102/status?issuer=0xISSUER_BYTES32&nullifier=0xNULLIFIER_BYTES32"`}
              </pre>
            </div>

            {/* Axios example */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Node.js / Axios</h4>
              <pre
                className={`text-[11px] ${cardBg} border ${borderSubtle} rounded-xl p-3 whitespace-pre-wrap break-all font-mono`}
              >
{`import axios from "axios";

const BASE_URL = "https://identitypass-api.privacyx.tech";

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
}`}
              </pre>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-500">
            ⚠️ In production, never expose your API key in frontend code. Keep API
            calls on your backend.
          </p>

          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold">
              Direct on-chain integration with IdentityPass
            </h4>
            <p className={`text-xs sm:text-sm ${bodyText}`}>
              Use PXP-102 as a pure on-chain primitive: directly query the IdentityPass
              contract from Node.js, workers, or backend services.
            </p>
            <pre
              className={`text-[11px] ${cardBg} border ${borderSubtle} rounded-xl p-3 whitespace-pre-wrap break-all font-mono`}
            >
{`import { JsonRpcProvider, toBeHex } from "ethers";
import { IdentityPass, parsePubSignals } from "privacyx-sdk";
import { readFile } from "node:fs/promises";

const provider = new JsonRpcProvider(process.env.RPC_URL);
const idPass = new IdentityPass({
  chainId: 1,
  provider,
  address: "0x2b8899B3ACDe63Fd5ABefa0D75d5982622665498",
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
}`}
            </pre>

            <p className="text-[11px] sm:text-xs text-slate-500 whitespace-pre-wrap break-all">
{`privacyx-identity-pass / zk / identity_proof.example.json
privacyx-sdk / examples / identity-pass-local-hardhat.example.mjs`}
            </p>
          </div>
        </section>

        {/* Production & security notes */}
        <section
          id="production"
          className={`mt-2 mb-6 rounded-2xl border ${borderStrong} ${sectionBg} p-4 sm:p-5 w-full`}
        >
          <h3 className="text-lg font-semibold mb-2">
            Production & security notes
          </h3>
          <p className={`text-xs sm:text-sm ${bodyText} mb-3`}>
            This playground dApp talks directly to the public PXP-102 Status API
            at{" "}
            <span className="font-mono text-privacyx">
              https://identitypass-api.privacyx.tech
            </span>
            . In your own integrations, you should route calls through your own
            backend and never expose long-lived API keys in frontend code.
          </p>

          <div
            className={`grid gap-4 md:grid-cols-2 text-xs sm:text-sm ${bodyText} w-full`}
          >
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Frontend config (Vite)</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Set{" "}
                  <span className="font-mono text-privacyx break-all">
                    VITE_PXP102_STATUS_API_BASE_URL
                  </span>{" "}
                  to your backend or gateway URL, e.g.:{" "}
                  <span className="font-mono break-all">
                    https://api.your-domain.com
                  </span>
                  .
                </li>
                <li>
                  Rebuild your dApp with{" "}
                  <span className="font-mono">npm run build</span> and deploy.
                </li>
                <li>
                  The dApp will call{" "}
                  <span className="font-mono break-all">
                    $VITE_PXP102_STATUS_API_BASE_URL/pxp-102/status
                  </span>{" "}
                  instead of the reference endpoint.
                </li>
              </ol>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Backend / API gateway</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Keep your{" "}
                  <span className="font-mono">PXP102_API_KEY</span> and RPC
                  credentials on server-side only.
                </li>
                <li>
                  Optionally, place the PXP-102 Status API behind your own
                  gateway (NGINX / API gateway / serverless).
                </li>
                <li>
                  For multi-tenant or issuer-specific setups, you can derive
                  issuer/nullifier policies in your backend before calling the
                  Status API.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            In short: this playground is ideal for integration tests and demos.
            In production, always treat PXP-102 as a backend primitive and keep
            secrets away from the browser.
          </p>
        </section>

        {/* Footer */}
        <footer
          className={`border-t ${borderStrong} pt-4 mt-6 text-[11px] ${textMuted} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full`}
        >
          <span>Privacyx · Identity layer for Web3 anonymity.</span>
          <span className="text-slate-600">
            PXP-102 · Groth16 · mainnet primitive
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;

