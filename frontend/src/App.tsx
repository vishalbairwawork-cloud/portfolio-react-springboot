import FadeIn from "@/components/ui/FadeIn";
import AnimatedToolset from "@/components/ui/AnimatedToolset";
import Header from "@/components/ui/Header";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AmbientBackground from "@/components/ui/AmbientBackground";
import ContactForm from "@/components/ui/ContactForm";
import HeroTerminal from "@/components/ui/HeroTerminal";
import ApiPlayground from "@/components/ui/ApiPlayground";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { 
  ArrowRight, Briefcase, FileText, LineChart, Target, 
  Users, BookOpen, ExternalLink, GraduationCap, TrendingUp, Clock, Award, Server,
  Cpu, GitBranch
} from "lucide-react";

// Icon lookup helper for dynamic backend icons
const iconMap: Record<string, any> = {
  TrendingUp,
  Users,
  Clock,
  Award,
  Target,
  LineChart,
  Briefcase,
  GraduationCap,
  FileText,
  BookOpen,
  Server,
  Cpu,
  GitBranch
};

export default function App() {
  const { data, backendConnected } = usePortfolioData();
  const { profile, stats, experiences, education, caseStudies, articles } = data;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative selection:bg-blue-500/20 selection:text-blue-500 font-sans">
      <ScrollProgress />
      <AmbientBackground />
      <Header />

      <main className="flex flex-col items-center w-full overflow-hidden pt-20 relative z-10">
        
        {/* BACKEND STATUS BADGE */}
        {backendConnected && (
          <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold backdrop-blur-md shadow-lg animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Spring Boot 3.3.4 · Active
          </div>
        )}

        {/* HERO SECTION */}
        <section id="hero" className="w-full max-w-5xl px-6 pt-12 pb-20 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Bio & Info */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium border border-blue-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {profile.statusBadge}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                  Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">Scalable Platforms</span> <br />
                  <span className="text-foreground/40">&amp; High-Throughput Systems.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed tracking-normal mt-1">
                  {profile.bio}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a href="#case-studies" className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold text-sm transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10 cursor-pointer">
                    System Architecture
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#api-console" className="inline-flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-xl font-semibold text-sm transition-colors border border-blue-500/20 cursor-pointer font-mono">
                    &lt;Live API Console /&gt;
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive Code Terminal */}
            <div className="lg:col-span-5 w-full">
              <FadeIn delay={0.3} direction="right">
                <HeroTerminal />
              </FadeIn>
            </div>
          </div>

          {/* STATS STRIP */}
          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-foreground/5 w-full">
              {stats.map((stat) => {
                const Icon = iconMap[stat.icon] || TrendingUp;
                return (
                  <div key={stat.label} className="flex items-center gap-3 p-3 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                    <div className="p-2.5 rounded-xl bg-foreground/5 shrink-0">
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-xl font-bold tracking-tight font-mono">{stat.value}</div>
                      <div className="text-xs text-foreground/60 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5">
          <FadeIn>
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Engineering Experience</h2>
                  <p className="text-xs font-mono text-foreground/50 mt-1">production deployments &amp; platform architecture</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-foreground/5 pl-8 ml-3 space-y-20">
            {experiences.map((exp, idx) => (
              <FadeIn key={exp.id || idx} delay={0.1 * (idx + 1)}>
                <div className="relative">
                  <div className="absolute -left-[53px] top-0 h-10 w-10 rounded-full border-4 border-background bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={exp.logoUrl} alt={exp.company} className="w-6 h-6 object-contain" />
                  </div>
                  
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-foreground/5 text-foreground/60">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-foreground/70 text-sm mt-1 mb-3 font-semibold">
                    {exp.company}
                  </div>

                  {/* Tech stack pills */}
                  {exp.company.includes("Deloitte") && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {["Java 17", "Spring Boot 3", "React 19", "Spring Data JPA", "Oracle Cloud (OCI)", "Azure DevOps", "REST APIs"].map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.company.includes("EduShots") && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {["Full-Stack Architecture", "Node / React", "SEO Optimization", "Edge CDN", "Micro-team Lead"].map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-4 text-foreground/80 leading-relaxed max-w-3xl">
                    {exp.points.map((pt, pIdx) => {
                      const PtIcon = iconMap[pt.icon] || Target;
                      return (
                        <li key={pIdx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                          <PtIcon className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                          <div>
                            <strong className="block text-foreground mb-1 text-sm">{pt.title}</strong>
                            <span className="text-sm leading-relaxed text-foreground/75">{pt.description}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* LIVE API PLAYGROUND SECTION */}
        <section id="api-console" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-mono text-xs font-semibold border border-blue-500/20 uppercase tracking-wider">
                Full-Stack Architecture
              </span>
              <h2 className="text-3xl font-bold tracking-tight mt-3">Interactive Backend Console</h2>
              <p className="text-foreground/60 text-sm mt-2 max-w-xl mx-auto">
                Test the live Spring Boot 3.3.4 REST endpoints powering this portfolio in real-time.
              </p>
            </div>
            <ApiPlayground />
          </FadeIn>
        </section>

        {/* CASE STUDIES SECTION */}
        <section id="case-studies" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5">
          <FadeIn>
            <div className="flex items-center gap-3 mb-16">
              <div className="p-3 rounded-2xl bg-blue-500/10">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">System Architecture &amp; Case Studies</h2>
                <p className="text-xs font-mono text-foreground/50 mt-1">deep dives into latency optimization &amp; platform scaling</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => {
              const StudyIcon = iconMap[study.icon] || LineChart;
              const isEmerald = study.color === "emerald";
              return (
                <FadeIn key={study.id || idx} delay={0.1 * (idx + 1)}>
                  <div className="group h-full flex flex-col rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-8 transition-all hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${isEmerald ? 'bg-emerald-500/10' : 'bg-purple-500/10'} flex items-center justify-center`}>
                        <StudyIcon className={`w-6 h-6 ${isEmerald ? 'text-emerald-600 dark:text-emerald-400' : 'text-purple-600 dark:text-purple-400'}`} />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/60">
                        {isEmerald ? 'Spring Boot + React' : 'Full-Stack MVP'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 tracking-tight">{study.title}</h3>
                    <p className="text-foreground/70 text-sm mb-6 leading-relaxed flex-grow">
                      {study.description}
                    </p>
                    <div className="space-y-4 bg-background/50 p-5 rounded-2xl border border-foreground/5 font-mono">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">Engineering Approach</span>
                        <p className="text-xs mt-1 text-foreground/80 font-sans">{study.approach}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">Production Impact</span>
                        <p className={`text-xs mt-1 ${isEmerald ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' : 'text-purple-600 dark:text-purple-400 bg-purple-500/10'} font-bold w-fit px-2.5 py-1 rounded-md font-mono`}>
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section id="articles" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5">
          <FadeIn>
            <div className="flex items-center gap-3 mb-16">
              <div className="p-3 rounded-2xl bg-orange-500/10">
                <BookOpen className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">System Design &amp; Engineering Articles</h2>
                <p className="text-xs font-mono text-foreground/50 mt-1">technical breakdowns of distributed systems &amp; databases</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <FadeIn key={article.id || idx} delay={article.delay || 0.1}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group h-full flex flex-col rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-6 transition-all hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 block cursor-pointer"
                >
                  <div className="relative w-full h-40 mb-5 rounded-2xl overflow-hidden bg-foreground/5">
                    <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-[10px] bg-background/90 backdrop-blur-md flex items-center justify-center shadow-sm">
                      <ExternalLink className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2 tracking-tight line-clamp-2">{article.title}</h3>
                  <p className="text-foreground/70 text-xs leading-relaxed flex-grow line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="mt-5 text-xs font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:gap-2 transition-all font-mono">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">The Technical Stack</h2>
              <p className="text-foreground/60 mt-3 text-sm max-w-xl mx-auto font-mono">
                Languages, frameworks, and cloud infrastructure engineered for production reliability.
              </p>
            </div>
          </FadeIn>
          <AnimatedToolset />
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="w-full max-w-5xl px-6 py-20 border-t border-foreground/5">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 rounded-2xl bg-violet-500/10">
                <GraduationCap className="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                <p className="text-xs font-mono text-foreground/50 mt-1">computer science &amp; engineering foundation</p>
              </div>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-foreground/5 pl-8 ml-3 space-y-12">
            {education.map((edu, idx) => (
              <FadeIn key={edu.id || idx} delay={0.1}>
                <div className="relative">
                  <div className="absolute -left-[53px] top-0 h-10 w-10 rounded-full border-4 border-background bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={edu.logoUrl} alt={edu.institution} className="w-7 h-7 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-foreground/60 text-xs font-mono mt-1 mb-3">
                    <span className="text-foreground dark:text-gray-300 font-semibold">{edu.institution}</span>
                    <span>&bull;</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl">
                    {edu.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="w-full px-6 py-28 bg-foreground/[0.02] border-t border-foreground/5 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[0px] shadow-[0_0_100px_40px_rgba(59,130,246,0.1)]"></div>

          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-mono text-xs font-semibold mb-4 border border-blue-500/20">
              <span>let's talk architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Ready to engineer something scalable?
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm passionate about engineering scalable, high-throughput systems and modern full-stack web applications. If you're looking for a dedicated Software Engineer, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                Email Me
              </a>
              <a
                href={profile.github || "https://github.com/vishalbairwawork-cloud"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                GitHub
              </a>
              <a
                href={profile.leetcode || "https://leetcode.com/u/bairwavishal/"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                LeetCode
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href={profile.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                Medium
              </a>
            </div>

            {/* Direct Message Form processed by Spring Boot */}
            <ContactForm />
          </FadeIn>
        </section>
      </main>

      <footer className="w-full py-8 border-t border-foreground/5 text-center text-xs text-foreground/50 font-mono">
        &copy; {new Date().getFullYear()} Vishal Bairwa · Java Spring Boot 3.3.4 &amp; React 19 Monorepo
      </footer>
    </div>
  );
}
