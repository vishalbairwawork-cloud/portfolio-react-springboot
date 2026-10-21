import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit message to Spring Boot API.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      // If Spring Boot is offline or endpoint errors, give friendly notice
      setErrorMessage(err.message || "Could not reach Spring Boot backend. Please try emailing directly.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 bg-background/80 backdrop-blur-md border border-foreground/10 p-8 rounded-3xl shadow-xl text-left">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight">Send a Direct Message</h3>
          <p className="text-xs text-foreground/60 mt-1">Processed securely via Java Spring Boot backend & H2 DB</p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          REST API Active
        </span>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base">Message Sent Successfully!</h4>
            <p className="text-sm mt-1 opacity-90">Thank you! Your inquiry was recorded in the Spring Boot backend database. I will reply soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-xs font-semibold underline underline-offset-4 cursor-pointer hover:opacity-80"
            >
              Send another note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/10 text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/10 text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Product Discussion / Opportunity"
              className="w-full px-4 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/10 text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about what you're building or how I can help..."
              className="w-full px-4 py-3 rounded-xl bg-foreground/[0.03] border border-foreground/10 text-foreground text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-6 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting to Spring Boot...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Inquiry via API
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
