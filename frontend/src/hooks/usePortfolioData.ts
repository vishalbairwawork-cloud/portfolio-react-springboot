import { useState, useEffect } from "react";

export interface PortfolioData {
  profile: {
    name: string;
    headline: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
    medium: string;
    resumeUrl: string;
    statusBadge: string;
  };
  stats: Array<{
    label: string;
    value: string;
    icon: string;
    color: string;
  }>;
  experiences: Array<{
    id: number;
    company: string;
    role: string;
    period: string;
    logoUrl: string;
    points: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  }>;
  education: Array<{
    id: number;
    degree: string;
    institution: string;
    period: string;
    logoUrl: string;
    description: string;
  }>;
  caseStudies: Array<{
    id: number;
    title: string;
    description: string;
    approach: string;
    impact: string;
    icon: string;
    color: string;
  }>;
  articles: Array<{
    id: number;
    title: string;
    summary: string;
    url: string;
    image: string;
    delay: number;
  }>;
  toolset: Array<{
    category: string;
    items: Array<{
      name: string;
      icon?: string;
      img?: string;
      color?: string;
      bg?: string;
    }>;
  }>;
}

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Vishal Bairwa",
    headline: "Building Scalable Platforms & High-Throughput Systems.",
    bio: "Software Engineer at Deloitte & Co-founder at EduShots. Specialized in building enterprise-grade full-stack architectures with Java Spring Boot and React, with a proven track record of cutting platform latency by 95%.",
    email: "vishalbairwa.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishal-bairwa/",
    github: "https://github.com/vishalbairwawork-cloud",
    leetcode: "https://leetcode.com/u/bairwavishal/",
    medium: "https://medium.com/@vishalbairwa",
    resumeUrl: "/Vishal_Bairwa_Product.pdf",
    statusBadge: "Software Engineer I @ Deloitte"
  },
  stats: [
    { label: "Latency Cut", value: "95%", icon: "TrendingUp", color: "text-emerald-500" },
    { label: "MAU Scaled", value: "5K+", icon: "Users", color: "text-blue-500" },
    { label: "Production Code", value: "2+ Yrs", icon: "Clock", color: "text-purple-500" },
    { label: "Tech Articles", value: "5+", icon: "Award", color: "text-orange-500" },
  ],
  experiences: [
    {
      id: 1,
      company: "Deloitte India (Offices of US)",
      role: "Software Engineer I",
      period: "Nov 2023 – Present",
      logoUrl: "/deloitte.png",
      points: [
        {
          title: "Full-Stack Engineering & Microservices (Spring Boot + React)",
          description: "Architected and implemented enterprise-grade web applications for Dell's 3PP Pricing and Sales Asset Management Platform; engineered dynamic, responsive user interfaces in React (TypeScript) and developed high-throughput RESTful microservices in Java Spring Boot.",
          icon: "Target"
        },
        {
          title: "Performance Engineering & 95% Latency Optimization",
          description: "Diagnosed critical quote processing performance bottlenecks; eliminated redundant synchronous API chains, optimized Spring Data JPA queries, and implemented caching strategies—reducing transaction latency from 4 minutes to under 10 seconds (95% performance improvement).",
          icon: "LineChart"
        },
        {
          title: "API Contract Design, Security & DevOps Automation",
          description: "Designed standardized REST API contracts using Postman and OAuth2 security protocols; integrated automated unit and integration test suites and partnered with DevOps to streamline deployment pipelines across Azure DevOps.",
          icon: "Users"
        }
      ]
    },
    {
      id: 2,
      company: "EduShots.com",
      role: "Co-founder",
      period: "Feb 2021 – Dec 2022",
      logoUrl: "/edushots.png",
      points: [
        {
          title: "Platform Launch & Team Leadership",
          description: "Founded and led the end-to-end development of a digital platform from ideation to launch, building and managing a 7-member cross-functional team across content, design, and dev.",
          icon: "Users"
        },
        {
          title: "Acquisition Strategy & Growth",
          description: "Drove 10x growth in daily active users and scaled platform to 5K+ monthly active users within 3 months using SEO-led acquisition and performance optimization.",
          icon: "LineChart"
        }
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      institution: "National Institute of Technology, Meghalaya (NIT Meghalaya)",
      period: "2019 – 2023",
      logoUrl: "/nitm.png",
      description: "Strong foundations in Data Structures, Algorithms, Distributed Systems, and Database Management. Explored AI/ML fundamentals and software engineering patterns that directly power robust architecture decisions and performant systems."
    }
  ],
  caseStudies: [
    {
      id: 1,
      title: "Enterprise Pricing Platform Optimization",
      description: "Led the full-stack performance optimization and React frontend delivery of Dell's internal 3PP Pricing Platform, resolving high-impact Spring Boot API bottlenecks.",
      approach: "Restructured REST API dependency graphs, optimized JPA entity relationships, and designed high-responsiveness React component workflows.",
      impact: "Reduced latency 95% (4m → <10s)",
      icon: "LineChart",
      color: "emerald"
    },
    {
      id: 2,
      title: "EduShots: Zero to 5K+ MAU",
      description: "Launched a content-driven digital platform MVP from scratch, managing a 7-creator team and owning the product's end-to-end distribution strategy.",
      approach: "Defined MVP scope, set up content delivery workflows, and implemented SEO-led acquisition strategies.",
      impact: "10x DAU growth in 3 months",
      icon: "Target",
      color: "purple"
    }
  ],
  articles: [
    {
      id: 1,
      title: "System Design for Software Engineers: Netflix Architecture",
      summary: "Explores distributed caching, microservice decomposition, and streaming architecture behind large-scale OTT platforms like Netflix.",
      url: "https://vishalbairwa.medium.com/system-design-for-product-managers-netflix-case-study-3b0fed93edaf",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*GN1yg0gzX2ZtfQdU",
      delay: 0.1
    },
    {
      id: 2,
      title: "System Design Concepts: Scalability, Caching & Load Balancing",
      summary: "An in-depth breakdown of essential distributed systems principles: horizontal scaling, CAP theorem, database sharding, and latency optimization.",
      url: "https://vishalbairwa.medium.com/system-design-concepts-for-product-managers-8adbc382732f",
      image: "https://cdn-images-1.medium.com/max/759/1*L1Hdr1-_64gUPfOQjl03Tw.png",
      delay: 0.2
    },
    {
      id: 3,
      title: "SQL Query Optimization & Database Internals",
      summary: "A deep dive covering SQL execution plans, indexing strategies, join algorithms, and tuning performance for high-throughput transactional databases.",
      url: "https://vishalbairwa.medium.com/sql-for-product-managers-d2e76501f6a2",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*K-MAP0pdLtkvg4CiPBKq8w.png",
      delay: 0.3
    },
    {
      id: 4,
      title: "Modern Tech Stack Architecture & Engineering Trade-offs",
      summary: "An architectural overview of modern full-stack technologies—evaluating trade-offs between monolithic and microservice architectures.",
      url: "https://vishalbairwa.medium.com/technologies-for-product-managers-why-technologies-resources-2df9b63e4579",
      image: "https://miro.medium.com/v2/resize:fit:1200/0*s7-dje0yEHEkqpp9",
      delay: 0.4
    },
    {
      id: 5,
      title: "Product Architecture & Feature Engineering",
      summary: "A detailed engineering case study analyzing system requirements, event tracking pipelines, and feature decomposition using Product Hunt.",
      url: "https://vishalbairwa.medium.com/product-improvement-questions-improve-product-hunt-b2e3c9667d08",
      image: "https://cdn-images-1.medium.com/max/1024/0*yM0n4bwK9RM9lWl3",
      delay: 0.5
    }
  ],
  toolset: []
};

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [backendConnected, setBackendConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchPortfolio() {
      try {
        const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
        const res = await fetch(`${apiBase}/api/portfolio`);
        if (res.ok) {
          const json = await res.json();
          if (isMounted) {
            setData(prev => ({
              ...prev,
              ...json,
              profile: { ...prev.profile, ...(json.profile || {}) },
              stats: json.stats && json.stats.length > 0 ? json.stats : prev.stats,
              experiences: json.experiences && json.experiences.length > 0 ? json.experiences : prev.experiences,
              education: json.education && json.education.length > 0 ? json.education : prev.education,
              caseStudies: json.caseStudies && json.caseStudies.length > 0 ? json.caseStudies : prev.caseStudies,
              articles: json.articles && json.articles.length > 0 ? json.articles : prev.articles,
              toolset: json.toolset && json.toolset.length > 0 ? json.toolset : prev.toolset
            }));
            setBackendConnected(true);
          }
        } else {
          if (isMounted) setBackendConnected(false);
        }
      } catch (err) {
        if (isMounted) setBackendConnected(false);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchPortfolio();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, backendConnected, isLoading };
}
