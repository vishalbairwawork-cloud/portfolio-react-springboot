package com.vishalbairwa.portfolio.config;

import com.vishalbairwa.portfolio.model.*;
import com.vishalbairwa.portfolio.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProfileRepository profileRepository;
    private final StatRepository statRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final CaseStudyRepository caseStudyRepository;
    private final ArticleRepository articleRepository;

    public DataInitializer(ProfileRepository profileRepository,
                           StatRepository statRepository,
                           ExperienceRepository experienceRepository,
                           EducationRepository educationRepository,
                           CaseStudyRepository caseStudyRepository,
                           ArticleRepository articleRepository) {
        this.profileRepository = profileRepository;
        this.statRepository = statRepository;
        this.experienceRepository = experienceRepository;
        this.educationRepository = educationRepository;
        this.caseStudyRepository = caseStudyRepository;
        this.articleRepository = articleRepository;
    }

    @Override
    public void run(String... args) {
        // Seed Profile
        if (profileRepository.count() == 0) {
            Profile profile = new Profile(
                "Vishal Bairwa",
                "Building Scalable Platforms & High-Throughput Systems.",
                "Software Engineer at Deloitte & Co-founder at EduShots. Specialized in building enterprise-grade full-stack architectures with Java Spring Boot and React, with a proven track record of cutting platform latency by 95%.",
                "vishalbairwa.work@gmail.com",
                "https://www.linkedin.com/in/vishal-bairwa/",
                "https://github.com/vishalbairwawork-cloud",
                "https://leetcode.com/u/bairwavishal/",
                "https://medium.com/@vishalbairwa",
                "/Vishal_Bairwa_Product.pdf",
                "Software Engineer I @ Deloitte"
            );
            profileRepository.save(profile);
        }

        // Seed Stats
        if (statRepository.count() == 0) {
            statRepository.saveAll(List.of(
                new Stat("Latency Cut", "95%", "TrendingUp", "text-emerald-500", 1),
                new Stat("MAU Scaled", "5K+", "Users", "text-blue-500", 2),
                new Stat("Production Code", "2+ Yrs", "Clock", "text-purple-500", 3),
                new Stat("Tech Articles", "5+", "Award", "text-orange-500", 4)
            ));
        }

        // Seed Experiences
        if (experienceRepository.count() == 0) {
            // Deloitte - Tech Heavy (Spring Boot + React)
            Experience deloitte = new Experience(
                "Deloitte India (Offices of US)",
                "Software Engineer I",
                "Nov 2023 – Present",
                "/deloitte.png",
                1
            );
            deloitte.addPoint(
                "Full-Stack Engineering & Microservices (Spring Boot + React)",
                "Architected and implemented enterprise-grade web applications for Dell's 3PP Pricing and Sales Asset Management Platform; engineered dynamic, responsive user interfaces in React (TypeScript) and developed high-throughput RESTful microservices in Java Spring Boot.",
                "Target"
            );
            deloitte.addPoint(
                "Performance Engineering & 95% Latency Optimization",
                "Diagnosed critical quote processing performance bottlenecks; eliminated redundant synchronous API chains, optimized Spring Data JPA queries, and implemented caching strategies—reducing transaction latency from 4 minutes to under 10 seconds (95% performance improvement).",
                "LineChart"
            );
            deloitte.addPoint(
                "API Contract Design, Security & DevOps Automation",
                "Designed standardized REST API contracts using Postman and OAuth2 security protocols; integrated automated unit and integration test suites and partnered with DevOps to streamline deployment pipelines across Azure DevOps.",
                "Users"
            );
            experienceRepository.save(deloitte);

            // EduShots - Kept exact same as requested
            Experience edushots = new Experience(
                "EduShots.com",
                "Co-founder",
                "Feb 2021 – Dec 2022",
                "/edushots.png",
                2
            );
            edushots.addPoint(
                "Platform Launch & Team Leadership",
                "Founded and led the end-to-end development of a digital platform from ideation to launch, building and managing a 7-member cross-functional team across content, design, and dev.",
                "Users"
            );
            edushots.addPoint(
                "Acquisition Strategy & Growth",
                "Drove 10x growth in daily active users and scaled platform to 5K+ monthly active users within 3 months using SEO-led acquisition and performance optimization.",
                "LineChart"
            );
            experienceRepository.save(edushots);
        }

        // Seed Education
        if (educationRepository.count() == 0) {
            educationRepository.save(new Education(
                "Bachelor of Technology (B.Tech)",
                "National Institute of Technology, Meghalaya (NIT Meghalaya)",
                "2019 – 2023",
                "/nitm.png",
                "Strong foundations in Data Structures, Algorithms, Distributed Systems, and Database Management. Explored AI/ML fundamentals and software engineering patterns that directly power robust architecture decisions and performant systems.",
                1
            ));
        }

        // Seed Case Studies
        if (caseStudyRepository.count() == 0) {
            caseStudyRepository.saveAll(List.of(
                new CaseStudy(
                    "Enterprise Pricing Platform Optimization",
                    "Led the full-stack performance optimization and React frontend delivery of Dell's internal 3PP Pricing Platform, resolving high-impact Spring Boot API bottlenecks.",
                    "Restructured REST API dependency graphs, optimized JPA entity relationships, and designed high-responsiveness React component workflows.",
                    "Reduced latency 95% (4m → <10s)",
                    "LineChart",
                    "emerald",
                    1
                ),
                new CaseStudy(
                    "EduShots: Zero to 5K+ MAU",
                    "Launched a content-driven digital platform MVP from scratch, managing a 7-creator team and owning the product's end-to-end distribution strategy.",
                    "Defined MVP scope, set up content delivery workflows, and implemented SEO-led acquisition strategies.",
                    "10x DAU growth in 3 months",
                    "Target",
                    "purple",
                    2
                )
            ));
        }

        // Seed Articles
        if (articleRepository.count() == 0) {
            articleRepository.saveAll(List.of(
                new Article(
                    "System Design for Software Engineers: Netflix Architecture",
                    "Explores distributed caching, microservice decomposition, and streaming architecture behind large-scale OTT platforms like Netflix.",
                    "https://vishalbairwa.medium.com/system-design-for-product-managers-netflix-case-study-3b0fed93edaf",
                    "https://miro.medium.com/v2/resize:fit:1200/0*GN1yg0gzX2ZtfQdU",
                    0.1,
                    1
                ),
                new Article(
                    "System Design Concepts: Scalability, Caching & Load Balancing",
                    "An in-depth breakdown of essential distributed systems principles: horizontal scaling, CAP theorem, database sharding, and latency optimization.",
                    "https://vishalbairwa.medium.com/system-design-concepts-for-product-managers-8adbc382732f",
                    "https://cdn-images-1.medium.com/max/759/1*L1Hdr1-_64gUPfOQjl03Tw.png",
                    0.2,
                    2
                ),
                new Article(
                    "SQL Query Optimization & Database Internals",
                    "A deep dive covering SQL execution plans, indexing strategies, join algorithms, and tuning performance for high-throughput transactional databases.",
                    "https://vishalbairwa.medium.com/sql-for-product-managers-d2e76501f6a2",
                    "https://miro.medium.com/v2/resize:fit:1200/1*K-MAP0pdLtkvg4CiPBKq8w.png",
                    0.3,
                    3
                ),
                new Article(
                    "Modern Tech Stack Architecture & Engineering Trade-offs",
                    "An architectural overview of modern full-stack technologies—evaluating trade-offs between monolithic and microservice architectures.",
                    "https://vishalbairwa.medium.com/technologies-for-product-managers-why-technologies-resources-2df9b63e4579",
                    "https://miro.medium.com/v2/resize:fit:1200/0*s7-dje0yEHEkqpp9",
                    0.4,
                    4
                ),
                new Article(
                    "Product Architecture & Feature Engineering",
                    "A detailed engineering case study analyzing system requirements, event tracking pipelines, and feature decomposition using Product Hunt.",
                    "https://vishalbairwa.medium.com/product-improvement-questions-improve-product-hunt-b2e3c9667d08",
                    "https://cdn-images-1.medium.com/max/1024/0*yM0n4bwK9RM9lWl3",
                    0.5,
                    5
                )
            ));
        }
    }
}
