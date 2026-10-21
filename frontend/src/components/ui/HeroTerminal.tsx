import { useState } from "react";
import { Copy, Check, Terminal, Code2, Sparkles } from "lucide-react";

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<"java" | "terminal" | "json">("java");
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const javaCode = `@Service
public class SoftwareEngineerService {
    @Autowired
    private PricingOptimizationEngine engine;

    public ImpactMetric optimizeLatency() {
        return ImpactMetric.builder()
            .platform("Dell 3PP Asset & Pricing Platform")
            .stack(List.of("Java 17", "Spring Boot", "React", "Postman"))
            .beforeLatency(Duration.ofMinutes(4))
            .afterLatency(Duration.ofSeconds(9))
            .improvement("95% cut in transaction latency")
            .status(Status.PRODUCTION_DEPLOYED)
            .build();
    }
}`;

  const terminalCode = `$ curl -i -X GET https://api.vishalbairwa.dev/api/profile
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
X-Powered-By: Spring Boot 3.3.4 & React 19

{
  "name": "Vishal Bairwa",
  "role": "Software Engineer I @ Deloitte",
  "coreStack": ["Java", "Spring Boot", "React", "TypeScript", "SQL"],
  "location": "Bengaluru / Hyderabad, India",
  "status": "Available for High-Impact Engineering Roles"
}`;

  const currentSnippet = activeTab === "java" ? javaCode : terminalCode;

  return (
    <div className="w-full rounded-2xl border border-foreground/10 bg-[#0d1117] text-[#c9d1d9] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs text-[#8b949e] font-sans font-medium hidden sm:inline flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            vishal@deloitte: ~/portfolio
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-[#0d1117] p-1 rounded-lg border border-[#30363d]">
          <button
            onClick={() => setActiveTab("java")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === "java"
                ? "bg-[#21262d] text-white shadow-sm"
                : "text-[#8b949e] hover:text-[#c9d1d9]"
            }`}
          >
            <Code2 className="w-3 h-3 text-amber-400" />
            Engineer.java
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === "terminal"
                ? "bg-[#21262d] text-white shadow-sm"
                : "text-[#8b949e] hover:text-[#c9d1d9]"
            }`}
          >
            <Terminal className="w-3 h-3 text-emerald-400" />
            curl.sh
          </button>
        </div>

        <button
          onClick={() => copyCode(currentSnippet)}
          className="p-1.5 rounded-md hover:bg-[#21262d] text-[#8b949e] hover:text-white transition-colors cursor-pointer"
          title="Copy to clipboard"
          aria-label="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed">
        {activeTab === "java" ? (
          <pre className="text-left font-mono">
            <code>
              <span className="text-[#ff7b72]">@Service</span>{"\n"}
              <span className="text-[#ff7b72]">public class</span> <span className="text-[#ffa657]">SoftwareEngineerService</span> {"{"}{"\n"}
              {"    "}<span className="text-[#ff7b72]">@Autowired</span>{"\n"}
              {"    "}<span className="text-[#ff7b72]">private</span> <span className="text-[#79c0ff]">PricingOptimizationEngine</span> engine;{"\n\n"}
              {"    "}<span className="text-[#ff7b72]">public</span> <span className="text-[#79c0ff]">ImpactMetric</span> <span className="text-[#d2a8ff]">optimizeLatency</span>() {"{"}{"\n"}
              {"        "}<span className="text-[#ff7b72]">return</span> ImpactMetric.<span className="text-[#79c0ff]">builder</span>(){"\n"}
              {"            "}.<span className="text-[#79c0ff]">platform</span>(<span className="text-[#a5d6ff]">"Dell 3PP Asset &amp; Pricing Platform"</span>){"\n"}
              {"            "}.<span className="text-[#79c0ff]">stack</span>(List.<span className="text-[#79c0ff]">of</span>(<span className="text-[#a5d6ff]">"Java 17"</span>, <span className="text-[#a5d6ff]">"Spring Boot 3"</span>, <span className="text-[#a5d6ff]">"React"</span>, <span className="text-[#a5d6ff]">"JPA"</span>)){"\n"}
              {"            "}.<span className="text-[#79c0ff]">beforeLatency</span>(Duration.<span className="text-[#79c0ff]">ofMinutes</span>(<span className="text-[#79c0ff]">4</span>)){"\n"}
              {"            "}.<span className="text-[#79c0ff]">afterLatency</span>(Duration.<span className="text-[#79c0ff]">ofSeconds</span>(<span className="text-[#79c0ff]">9</span>)) <span className="text-[#7ee787]">// 95% latency reduction</span>{"\n"}
              {"            "}.<span className="text-[#79c0ff]">status</span>(Status.<span className="text-[#79c0ff]">PRODUCTION_VERIFIED</span>){"\n"}
              {"            "}.<span className="text-[#79c0ff]">build</span>();{"\n"}
              {"    "}{"}"}{"\n"}
              {"}"}
            </code>
          </pre>
        ) : (
          <pre className="text-left font-mono">
            <code>
              <span className="text-[#7ee787]">$</span> <span className="text-[#d2a8ff]">curl</span> -s -X GET http://localhost:8082/api/profile | jq{"\n"}
              <span className="text-[#8b949e]">HTTP/1.1 200 OK · Spring Boot 3.3.4 · 12ms</span>{"\n\n"}
              {"{"}{"\n"}
              {"  "}<span className="text-[#79c0ff]">"name"</span>: <span className="text-[#a5d6ff]">"Vishal Bairwa"</span>,{"\n"}
              {"  "}<span className="text-[#79c0ff]">"role"</span>: <span className="text-[#a5d6ff]">"Software Engineer I @ Deloitte"</span>,{"\n"}
              {"  "}<span className="text-[#79c0ff]">"specialization"</span>: <span className="text-[#a5d6ff]">"Java, Spring Boot, React, Distributed Systems"</span>,{"\n"}
              {"  "}<span className="text-[#79c0ff]">"keyMetric"</span>: <span className="text-[#7ee787]">"95% Latency Optimization (4m ➔ &lt;10s)"</span>,{"\n"}
              {"  "}<span className="text-[#79c0ff]">"openTo"</span>: <span className="text-[#a5d6ff]">"SDE I / Backend / Full-Stack Opportunities"</span>{"\n"}
              {"}"}
            </code>
          </pre>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-t border-[#30363d] text-[11px] text-[#8b949e]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
            Spring Boot 3.3.4
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">JVM 17/21</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">React 19</span>
        </div>
        <div className="flex items-center gap-1.5 text-blue-400 font-medium">
          <Sparkles className="w-3 h-3" />
          <span>Live Runtime</span>
        </div>
      </div>
    </div>
  );
}
