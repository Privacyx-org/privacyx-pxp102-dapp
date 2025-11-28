// src/components/StatusPlayground.jsx
import { useState } from "react";
import axios from "axios";
import { PXP102_STATUS_API_BASE_URL } from "../config";

function JsonBox({ data }) {
  if (!data) return null;

  return (
    <pre className="text-[11px] sm:text-xs bg-black/70 border border-slate-700 rounded-xl p-3 overflow-x-auto font-mono mt-3">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

export default function StatusPlayground() {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [health, setHealth] = useState(null);
  const [statusDefault, setStatusDefault] = useState(null);
  const [error, setError] = useState("");

  // sera "" en dev → Vite proxy / API locale
  const baseUrl = PXP102_STATUS_API_BASE_URL;

  async function callHealth() {
    try {
      setLoading(true);
      setError("");
      setStatusDefault(null);

      // ⬇️ IMPORTANT : URL relative → proxy Vite
      const res = await axios.get(`${baseUrl}/health`);
      setHealth(res.data);
    } catch (err) {
      console.error("Health error full:", err);
      setError(err?.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }

  async function callDefaultStatus() {
    try {
      setLoading(true);
      setError("");
      setHealth(null);

      // ⬇️ IMPORTANT : URL relative → proxy Vite
      const res = await axios.get(`${baseUrl}/pxp-102/status/default`, {
        headers: apiKey ? { "x-api-key": apiKey } : {},
      });

      setStatusDefault(res.data);
    } catch (err) {
      console.error("Status default error full:", err);
      setError(err?.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-black/50 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <h4 className="text-sm font-semibold">Live status playground</h4>
          <p className="text-[11px] sm:text-xs text-slate-400">
            Call your own PXP-102 Status API directly from this page.
          </p>
        </div>
        <span className="text-[10px] rounded-full border border-slate-700 px-2 py-0.5 text-slate-400">
          {baseUrl}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.7fr,1.1fr] items-start">
        {/* Inputs + actions */}
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="block text-[11px] text-slate-400">
              Optional API key (x-api-key header)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Leave empty if your dev API is not protected"
              className="w-full rounded-xl border border-slate-700 bg-black/60 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-privacyx"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={callHealth}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-100 border border-slate-600 hover:border-privacyx/70 hover:bg-slate-700 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "GET /health"}
            </button>
            <button
              onClick={callDefaultStatus}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-privacyx px-3 py-1.5 text-xs font-semibold text-privacyx-dark shadow-md shadow-privacyx/40 hover:brightness-105 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "GET /pxp-102/status/default"}
            </button>
          </div>

          {error && (
            <p className="text-[11px] text-red-400">
              Error: {error}
            </p>
          )}

          {!error && !loading && !health && !statusDefault && (
            <p className="text-[11px] text-slate-500">
              Hit one of the buttons above to see a JSON response here.
            </p>
          )}
        </div>

        {/* JSON output */}
        <div>
          {health && (
            <>
              <p className="text-[11px] text-slate-400 mb-1">
                /health response:
              </p>
              <JsonBox data={health} />
            </>
          )}
          {statusDefault && (
            <>
              <p className="text-[11px] text-slate-400 mb-1 mt-2">
                /pxp-102/status/default response:
              </p>
              <JsonBox data={statusDefault} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

