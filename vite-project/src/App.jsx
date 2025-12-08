import "./index.css";
import DevelopersSection from "./components/DevelopersSection";
import logo from "./assets/logo-prvx.png";

function App() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{ backgroundColor: "#101010" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            {/* LOGO */}
            <div className="h-9 w-9 rounded-xl bg-black/40 flex items-center justify-center shadow-lg shadow-privacyx/40">
              <img
                src={logo}
                alt="PrivacyX Logo"
                className="h-7 w-7 object-contain"
              />
            </div>

            <div>
              <h1 className="text-base sm:text-lg font-semibold tracking-tight">
                Privacyx · PXP-102 Identity Pass
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Groth16 on-chain identity primitive for Web3 integrators
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-privacyx" />
            <span>Mainnet live</span>
            <a
              href="https://www.privacyx.tech/pxp-102"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-700 px-2.5 py-1 text-[11px] text-slate-200 hover:border-slate-400 hover:text-slate-100 transition"
            >
              Docs
            </a>
            <a
              href="https://github.com/Privacyx-org/privacyx-identity-pass"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-700 px-2.5 py-1 text-[11px] text-slate-200 hover:border-slate-400 hover:text-slate-100 transition"
            >
              GitHub
            </a>
          </div>

          {/* Mobile nav */}
          <div className="flex sm:hidden items-center gap-2 text-[11px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-privacyx" />
            <span>Mainnet live</span>
            <div className="ml-auto flex gap-2">
              <a
                href="https://www.privacyx.tech/pxp-102"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-700 px-2 py-1 text-[11px] text-slate-200 hover:border-slate-400 hover:text-slate-100 transition"
              >
                Docs
              </a>
              <a
                href="https://github.com/Privacyx-org/privacyx-identity-pass"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-700 px-2 py-1 text-[11px] text-slate-200 hover:border-slate-400 hover:text-slate-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[2fr,1.4fr] mb-10 sm:mb-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/40 px-3 py-1 text-[11px] sm:text-xs text-privacyx mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-privacyx" />
              PXP-102 · Zero-knowledge identity pass
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              ZK-powered identity checks,{" "}
              <span className="text-privacyx">without leaking who you are</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              PXP-102 is a generic identity primitive based on Groth16 proofs and
              Merkle roots. It lets you verify{" "}
              <span className="font-medium text-slate-100">
                “this wallet is verified”
              </span>{" "}
              without ever exposing raw identity data on-chain.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <a
                href="#integrations"
                className="inline-flex items-center justify-center rounded-xl bg-privacyx px-4 py-2 text-sm font-semibold text-privacyx-dark shadow-md shadow-privacyx/40 hover:brightness-105 transition w-full sm:w-auto"
              >
                View integration options
              </a>
              <a
                href="#status-api"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600/80 bg-black/40 px-4 py-2 text-sm text-slate-100 hover:border-slate-400 transition w-full sm:w-auto"
              >
                Check status API
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <p className="text-slate-400 mb-1">Standard</p>
                <p className="font-medium">PXP-102 Identity Pass</p>
                <p className="text-slate-500 mt-1">Groth16 + Merkle nullifier</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <p className="text-slate-400 mb-1">Network</p>
                <p className="font-medium">Ethereum mainnet</p>
                <p className="text-slate-500 mt-1 text-xs">
                  IdentityPass deployed & initialized
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <p className="text-slate-400 mb-1">Usage model</p>
                <p className="font-medium">Backend / dApp primitive</p>
                <p className="text-slate-500 mt-1 text-xs">
                  Status API + direct on-chain calls
                </p>
              </div>
            </div>
          </div>

          {/* Status API card */}
          <div
            id="status-api"
            className="rounded-2xl border border-slate-700 bg-gradient-to-b from-black/60 to-neutral-900/80 p-4 sm:p-5 shadow-lg shadow-black/40"
          >
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              PXP-102 Identity Status API
              <span className="text-[10px] rounded-full border border-slate-600 px-2 py-0.5 text-slate-200 bg-black/40">
                Mainnet
              </span>
            </h3>
            <p className="text-xs text-slate-300 mb-3">
              A minimal HTTP API (Express + privacyx-sdk) that lets integrators:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 mb-3">
              <li>Read the current Merkle root for an issuer</li>
              <li>Check whether a nullifier has already been used</li>
              <li>Integrate PXP-102 in KYC / access-control flows</li>
            </ul>

            <div className="mb-3">
              <p className="text-[11px] text-slate-400 mb-1">
                Example (reference deployment: identitypass-api.privacyx.tech)
              </p>
              <pre className="text-[11px] bg-black/70 border border-slate-700 rounded-xl p-3 overflow-x-auto">
{`curl -H "x-api-key: YOUR_API_KEY" \\
  "https://identitypass-api.privacyx.tech/pxp-102/status/default"`}
              </pre>
            </div>

            <div className="text-[11px] text-slate-400 mb-1">
              Typical JSON response:
            </div>
            <pre className="text-[11px] bg-black/70 border border-slate-700 rounded-xl p-3 overflow-x-auto">
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
        <section className="grid gap-8 md:grid-cols-2 mb-10 sm:mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-3">How PXP-102 works</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                PXP-102 is based on a{" "}
                <span className="text-slate-100">Groth16 circuit</span> and an{" "}
                <span className="text-slate-100">on-chain Merkle tree</span> of
                issuer-verified identities.
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

          <div id="integrations">
            <h3 className="text-lg font-semibold mb-3">Integration patterns</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <h4 className="text-sm font-semibold mb-1">
                  A) Web2 / Web3 access-control
                </h4>
                <p className="text-xs text-slate-300">
                  Use the Status API to gate access to dashboards, SaaS, or
                  internal tools: if the nullifier is used, the wallet has
                  proven its identity at least once.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <h4 className="text-sm font-semibold mb-1">
                  B) dApps & DeFi frontends
                </h4>
                <p className="text-xs text-slate-300">
                  Call the IdentityPass contract directly from your backend or
                  relayer, while keeping the user experience on your own UI.
                </p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-black/40 p-3">
                <h4 className="text-sm font-semibold mb-1">
                  C) Issuer dashboards
                </h4>
                <p className="text-xs text-slate-300">
                  Build an issuer-side UI to manage Merkle roots, monitor
                  nullifiers, and audit identity passes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick integration guide */}
        <section className="mb-10 sm:mb-12 rounded-2xl border border-slate-800 bg-black/40 p-4 sm:p-5">
          <h3 className="text-lg font-semibold mb-2">
            Integrate PXP-102 in 3 steps
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            This is the minimal path from “user is verified by an issuer” to
            “my backend can gate access using a nullifier”.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300">
            <li>
              <span className="font-semibold">Issuer verifies the user.</span>{" "}
              Off-chain KYC / identity flow, then the issuer updates its Merkle
              root on the IdentityPass contract.
            </li>
            <li>
              <span className="font-semibold">User generates a Groth16 proof.</span>{" "}
              The wallet or your backend generates a proof with{" "}
              <span className="font-mono text-privacyx">issuer</span>,{" "}
              <span className="font-mono text-privacyx">nullifier</span>, and
              Merkle path.
            </li>
            <li>
              <span className="font-semibold">Your backend checks the nullifier.</span>{" "}
              After a successful on-chain verification, your backend can simply
              call the PXP-102 Status API:
              <pre className="mt-2 text-[11px] bg-black/70 border border-slate-700 rounded-xl p-3 overflow-x-auto font-mono">
{`GET /pxp-102/status?issuer=0xISSUER_BYTES32&nullifier=0xNULLIFIER_BYTES32
→ { currentRoot, nullifierUsed, ... }`}
              </pre>
            </li>
          </ol>

          <p className="mt-3 text-[11px] text-slate-500">
            If <span className="font-mono">nullifierUsed === true</span>, the
            wallet has already proven its identity for this flow. You can then
            safely gate dashboards, DeFi actions, or issuer-specific features.
          </p>
        </section>

        <DevelopersSection />

        {/* Production & security notes */}
        <section
          id="production"
          className="mt-8 mb-6 rounded-2xl border border-slate-800 bg-black/40 p-4 sm:p-5"
        >
          <h3 className="text-lg font-semibold mb-2">
            Production & security notes
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            This playground dApp talks directly to the public PXP-102 Status API
            at{" "}
            <span className="font-mono text-privacyx">
              https://identitypass-api.privacyx.tech
            </span>
            . In your own integrations, you should route calls through your own
            backend and never expose long-lived API keys in frontend code.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm text-slate-300">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Frontend config (Vite)</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  Set{" "}
                  <span className="font-mono text-privacyx">
                    VITE_PXP102_STATUS_API_BASE_URL
                  </span>{" "}
                  to your backend or gateway URL, e.g.:{" "}
                  <span className="font-mono">
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
                  <span className="font-mono">
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
        <footer className="border-t border-slate-800 pt-4 mt-6 text-[11px] text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>PrivacyX · Identity layer for Web3 anonymity.</span>
          <span className="text-slate-600">
            PXP-102 · Groth16 · mainnet primitive ·{" "}
            <span className="text-privacyx">#4befa0</span>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;

