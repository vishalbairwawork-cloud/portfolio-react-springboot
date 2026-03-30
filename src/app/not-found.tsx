import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="relative">
        <div className="text-[160px] md:text-[240px] font-black text-foreground/5 leading-none select-none absolute inset-0 flex items-center justify-center">
          404
        </div>
        <div className="relative py-12 px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Page not found
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Oops, wrong turn.
          </h1>
          <p className="text-foreground/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Contact me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
