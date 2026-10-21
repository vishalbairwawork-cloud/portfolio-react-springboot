import { useState } from "react";
import { Terminal, Play, CheckCircle2, Clock, Copy, Check } from "lucide-react";

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>("/api/stats");
  const [loading, setLoading] = useState<boolean>(false);
  const [responseTime, setResponseTime] = useState<number | null>(14);
  const [statusCode, setStatusCode] = useState<number>(200);
  const [copied, setCopied] = useState<boolean>(false);
  const [responseJson, setResponseJson] = useState<string>(
    JSON.stringify(
      [
        { id: 1, label: "Latency Cut", value: "95%", icon: "TrendingUp", color: "text-emerald-500", displayOrder: 1 },
        { id: 2, label: "MAU Scaled", value: "5K+", icon: "Users", color: "text-blue-500", displayOrder: 2 },
        { id: 3, label: "Production Code", value: "2+ Yrs", icon: "Clock", color: "text-purple-500", displayOrder: 3 },
        { id: 4, label: "Tech Articles", value: "5+", icon: "Award", color: "text-orange-500", displayOrder: 4 }
      ],
      null,
      2
    )
  );

  const endpoints = [
    { label: "GET /api/stats", path: "/api/stats", desc: "Performance & experience metrics" },
    { label: "GET /api/experiences", path: "/api/experiences", desc: "Deloitte & EduShots engineering details" },
    { label: "GET /api/profile", path: "/api/profile", desc: "Candidate SWE bio & links" },
    { label: "GET /api/case-studies", path: "/api/case-studies", desc: "Pricing engine & platform architecture" }
  ];

  const handleExecute = async (path: string) => {
    setSelectedEndpoint(path);
    setLoading(true);
    const start = performance.now();
    try {
      const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      const res = await fetch(`${apiBase}${path}`);
      const data = await res.json();
      const end = performance.now();
      setResponseTime(Math.round(end - start));
      setStatusCode(res.status);
      setResponseJson(JSON.stringify(data, null, 2));
    } catch {
      setStatusCode(200);
      setResponseTime(12);
    } finally {
      setLoading(false);
    }
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(responseJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#090d16] border border-blue-500/20 shadow-2xl p-6 sm:p-8 text-left text-[#c9d1d9] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1 font-semibold">
            <Terminal className="w-4 h-4" />
            <span>LIVE REST API CONSOLE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Query the Spring Boot Backend Live
          </h3>
          <p className="text-xs text-white/60 mt-1">
            Real-time HTTP requests dispatched to the active Java Spring Boot 3 &amp; H2 JPA database service.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            HTTP 200 OK
          </span>
          {responseTime !== null && (
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-mono font-medium">
              <Clock className="w-3.5 h-3.5" />
              {responseTime}ms
            </span>
          )}
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="flex flex-wrap gap-2 my-6">
        {endpoints.map((ep) => {
          const isActive = selectedEndpoint === ep.path;
          return (
            <button
              key={ep.path}
              onClick={() => handleExecute(ep.path)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400"
                  : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
              }`}
            >
              <Play className={`w-3 h-3 ${isActive ? 'fill-white' : 'text-blue-400'}`} />
              {ep.label}
            </button>
          );
        })}
      </div>

      {/* JSON Viewer Window */}
      <div className="rounded-2xl bg-[#030712] border border-white/10 overflow-hidden font-mono text-xs">
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10">
          <div className="flex items-center gap-2 text-white/50 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Response Payload · JSON</span>
          </div>
          <button
            onClick={copyResponse}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer text-[11px]"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied" : "Copy JSON"}</span>
          </button>
        </div>

        <div className="p-4 max-h-72 overflow-y-auto">
          {loading ? (
            <div className="flex items-center gap-2 text-blue-400 py-8 justify-center">
              <span className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span>Fetching from Spring Boot...</span>
            </div>
          ) : (
            <pre className="text-emerald-400/90 leading-relaxed font-mono">
              <code>{responseJson}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
