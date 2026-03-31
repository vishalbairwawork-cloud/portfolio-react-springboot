import FadeIn from "@/components/ui/FadeIn";
import AnimatedToolset from "@/components/ui/AnimatedToolset";
import { ArrowRight, Briefcase, FileText, LineChart, Target, Users, BookOpen, ExternalLink, GraduationCap, TrendingUp, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* HERO SECTION */}
      <section id="hero" className="w-full max-w-5xl px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-start gap-4">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Transitioning to Product
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">Scalable Platforms</span> <br />
            <span className="text-foreground/40">& Driving Growth.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 mt-4 leading-relaxed tracking-wide">
            Consulting Analyst at Deloitte & Co-founder at EduShots. Proven track record of scaling platforms, optimizing enterprise workflows, and bridging business strategy with technical execution.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="#case-studies" className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10">
              View Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-6 py-3 rounded-xl font-semibold transition-colors">
              Let&apos;s Connect
            </Link>
          </div>
        </FadeIn>

        {/* STATS STRIP */}
        <FadeIn delay={0.5}>
          <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-foreground/5 w-full">
            {[
              { label: "Latency Cut", value: "95%", icon: TrendingUp, color: "text-emerald-500" },
              { label: "MAU Scaled", value: "5K+", icon: Users, color: "text-blue-500" },
              { label: "Years Experience", value: "2+", icon: Clock, color: "text-purple-500" },
              { label: "PM Articles", value: "5+", icon: Award, color: "text-orange-500" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-foreground/5`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-xl font-bold tracking-tight">{stat.value}</div>
                    <div className="text-xs text-foreground/50 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="w-full max-w-5xl px-6 py-24 border-t border-foreground/5">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="p-3 rounded-2xl bg-blue-500/10">
              <Briefcase className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-foreground/5 pl-8 ml-3 space-y-24">
          {/* Deloitte Experience */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[53px] top-0 h-10 w-10 rounded-full border-4 border-background bg-white shadow-sm flex items-center justify-center overflow-hidden">
                <img src="/deloitte.png" alt="Deloitte" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Analyst</h3>
              <div className="flex items-center gap-2 text-foreground/60 text-sm mt-2 mb-6 font-medium">
                <span className="text-foreground dark:text-gray-300 font-semibold">Deloitte India (Offices of US)</span>
                <span>&bull;</span>
                <span>Nov 2023 – Present</span>
              </div>
              <ul className="space-y-4 text-foreground/80 leading-relaxed max-w-3xl">
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                  <Target className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">End-to-End Delivery & Stakeholder Management</strong>
                    <span>Led end-to-end project delivery of an enterprise tech client's internal Sales Asset Management and Pricing Platform, partnering proactively with design, DevOps, QA, and business stakeholders.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                  <LineChart className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Data-Driven Performance Optimization</strong>
                    <span>Improved revenue-critical quote processing performance by eliminating redundant API dependencies, reducing transaction latency from 4 minutes to under 10 seconds (95% improvement).</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                  <Users className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Requirement Translation & Scope Definition</strong>
                    <span>Partnered with product teams to clarify feature scope, prioritize backlog items, and translate business requirements into well-defined user stories and PRDs using Jira and Confluence.</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* EduShots Experience */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[53px] top-0 h-10 w-10 rounded-full border-4 border-background bg-white shadow-sm flex items-center justify-center overflow-hidden">
                <img src="/edushots.png" alt="EduShots" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Co-founder</h3>
              <div className="flex items-center gap-2 text-foreground/60 text-sm mt-2 mb-6 font-medium">
                <span className="text-foreground dark:text-gray-300 font-semibold">EduShots.com</span>
                <span>&bull;</span>
                <span>Feb 2021 – Dec 2022</span>
              </div>
              <ul className="space-y-4 text-foreground/80 leading-relaxed max-w-3xl">
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                  <Users className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Platform Launch & Team Leadership</strong>
                    <span>Founded and led the end-to-end development of a digital platform from ideation to launch, building and managing a 7-member cross-functional team across content, design, and dev.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.02] transition-colors border border-transparent hover:border-foreground/5">
                  <LineChart className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Acquisition Strategy & Growth</strong>
                    <span>Drove 10x growth in daily active users and scaled platform to 5K+ monthly active users within 3 months using SEO-led acquisition and performance optimization.</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="w-full max-w-5xl px-6 py-24 border-t border-foreground/5">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="p-3 rounded-2xl bg-violet-500/10">
              <GraduationCap className="w-6 h-6 text-violet-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-foreground/5 pl-8 ml-3 space-y-12">
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[53px] top-0 h-10 w-10 rounded-full border-4 border-background bg-white shadow-sm flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/nitm.png" alt="NIT Meghalaya" className="w-7 h-7 object-contain" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Bachelor of Technology (B.Tech)</h3>
              <div className="flex flex-wrap items-center gap-2 text-foreground/60 text-sm mt-2 mb-4 font-medium">
                <span className="text-foreground dark:text-gray-300 font-semibold">National Institute of Technology, Meghalaya (NIT Meghalaya)</span>
                <span>&bull;</span>
                <span>2019 – 2023</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl">
                Developed strong analytical foundations in statistics, data interpretation, and systems thinking. Explored AI/ML fundamentals — including predictive modelling, NLP basics, and data-driven decision frameworks — which now directly inform how I approach product metrics, user behaviour analysis, and AI-powered feature evaluation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="case-studies" className="w-full max-w-5xl px-6 py-24 border-t border-foreground/5">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="p-3 rounded-2xl bg-blue-500/10">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Study 1: Deloitte Enterprise Pricing */}
          <FadeIn delay={0.1}>
            <div className="group h-full flex flex-col rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-8 transition-all hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8">
                <LineChart className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Enterprise Pricing Platform Optimization</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed flex-grow">
                Led the optimization and frontend delivery of Dell's internal 3PP Pricing Platform, resolving high-impact API bottlenecks and clarifying feature scopes for execution.
              </p>
              <div className="space-y-5 mb-8 bg-background/50 p-6 rounded-2xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">The Approach</span>
                  <p className="text-sm mt-1.5 font-medium">Validated API contracts and defined well-structured user stories bridging business with technical architecture.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">The Impact</span>
                  <p className="text-sm mt-1.5 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 w-fit px-3 py-1 rounded-lg">Reduced latency 95% (4m → &lt;10s)</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Case Study 2: EduShots */}
          <FadeIn delay={0.2}>
            <div className="group h-full flex flex-col rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-8 transition-all hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">EduShots: Zero to 5K+ MAU</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed flex-grow">
                Launched a content-driven digital platform MVP from scratch, managing a 7-creator team and owning the product's end-to-end distribution strategy.
              </p>
              <div className="space-y-5 mb-8 bg-background/50 p-6 rounded-2xl">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">The Approach</span>
                  <p className="text-sm mt-1.5 font-medium">Defined MVP scope, set up content delivery workflows, and implemented SEO-led acquisition strategies.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">The Impact</span>
                  <p className="text-sm mt-1.5 text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 w-fit px-3 py-1 rounded-lg">10x DAU growth in 3 months</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section id="articles" className="w-full max-w-5xl px-6 py-24 border-t border-foreground/5">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="p-3 rounded-2xl bg-orange-500/10">
              <BookOpen className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Publications & Deep Dives</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Product Improvement: Product-Hunt Case-Study",
              summary: "A detailed case study exploring how to approach product improvement questions, using Product Hunt as a specific example.",
              url: "https://vishalbairwa.medium.com/product-improvement-questions-improve-product-hunt-b2e3c9667d08",
              image: "https://cdn-images-1.medium.com/max/1024/0*yM0n4bwK9RM9lWl3",
              delay: 0.1
            },
            {
              title: "System Design for Product Managers: Netflix",
              summary: "Explains the basic architecture of Netflix and other OTT platforms in a way that is accessible to non-tech product managers.",
              url: "https://vishalbairwa.medium.com/system-design-for-product-managers-netflix-case-study-3b0fed93edaf",
              image: "https://miro.medium.com/v2/resize:fit:1200/0*GN1yg0gzX2ZtfQdU",
              delay: 0.2
            },
            {
              title: "System Design Concepts for PMs",
              summary: "An introduction to essential system design principles intended for product folks to better understand technical trade-offs.",
              url: "https://vishalbairwa.medium.com/system-design-concepts-for-product-managers-8adbc382732f",
              image: "https://cdn-images-1.medium.com/max/759/1*L1Hdr1-_64gUPfOQjl03Tw.png",
              delay: 0.3
            },
            {
              title: "SQL for Product Managers",
              summary: "A comprehensive guide covering SQL basics to intermediate level concepts tailored for product management roles.",
              url: "https://vishalbairwa.medium.com/sql-for-product-managers-d2e76501f6a2",
              image: "https://miro.medium.com/v2/resize:fit:1200/1*K-MAP0pdLtkvg4CiPBKq8w.png",
              delay: 0.4
            },
            {
              title: "Technologies a PM Should Know",
              summary: "A broad overview of the critical technologies a PM should know—covering why, what, and how to learn them.",
              url: "https://vishalbairwa.medium.com/technologies-for-product-managers-why-technologies-resources-2df9b63e4579",
              image: "https://miro.medium.com/v2/resize:fit:1200/0*s7-dje0yEHEkqpp9",
              delay: 0.5
            }
          ].map((article, idx) => (
            <FadeIn key={idx} delay={article.delay}>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group h-full flex flex-col rounded-3xl bg-foreground/[0.02] border border-foreground/5 p-6 transition-all hover:bg-foreground/[0.04] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 block"
              >
                <div className="relative w-full h-40 mb-5 rounded-2xl overflow-hidden bg-foreground/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-[10px] bg-background/90 backdrop-blur-md flex items-center justify-center shadow-sm">
                    <ExternalLink className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight line-clamp-2">{article.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow line-clamp-3">
                  {article.summary}
                </p>
                <div className="mt-6 text-sm font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read on Medium <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="w-full max-w-5xl px-6 py-24 border-t border-foreground/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">The Toolset</h2>
            <p className="text-foreground/60 mt-4 max-w-xl mx-auto">Technologies and frameworks I use to bridge strategy with execution.</p>
          </div>
        </FadeIn>
        <AnimatedToolset />
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="w-full px-6 py-32 bg-foreground/[0.02] border-t border-foreground/5 flex flex-col items-center text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[0px] shadow-[0_0_100px_40px_rgba(59,130,246,0.1)]"></div>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build something great?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for Product roles. If you're building products that need a data-driven strategist, let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:vishalbairwa.work@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-bairwa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-8 py-4 rounded-2xl font-bold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@vishalbairwa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-foreground px-8 py-4 rounded-2xl font-bold transition-colors"
            >
              Medium
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
