"use client";

import { motion } from "framer-motion";
import {
    Map, Lightbulb, Target, GitBranch, Layers, Figma, // Product
    Database, LineChart, Filter, PieChart, Search, Brain, // Data
    Cloud, Server, Infinity, Layout, Github // Tech
} from "lucide-react";

const tools = [
    {
        category: "Product & Strategy",
        items: [
            { name: "Roadmapping", icon: Map, color: "text-blue-500", bg: "bg-blue-500/10" },
            { name: "User Stories & PRDs", icon: Layers, color: "text-indigo-500", bg: "bg-indigo-500/10" },
            { name: "Figma & Design", img: "https://skillicons.dev/icons?i=figma", color: "text-pink-500", bg: "bg-pink-500/10" },
            { name: "Competitive Analysis", icon: Target, color: "text-rose-500", bg: "bg-rose-500/10" },
            { name: "A/B Testing", icon: GitBranch, color: "text-purple-500", bg: "bg-purple-500/10" },
            { name: "Design Thinking", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-500/10" },
        ]
    },
    {
        category: "Data & Analytics",
        items: [
            { name: "SQL & Databases", img: "https://skillicons.dev/icons?i=mysql", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { name: "KPI Tracking", icon: LineChart, color: "text-blue-500", bg: "bg-blue-500/10" },
            { name: "Machine Learning", icon: Brain, color: "text-pink-500", bg: "bg-pink-500/10" },
            { name: "Funnel Analysis", icon: Filter, color: "text-orange-500", bg: "bg-orange-500/10" },
            { name: "Mixpanel", img: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg", color: "text-violet-500", bg: "bg-violet-500/10" },
            { name: "Search Console", icon: Search, color: "text-cyan-500", bg: "bg-cyan-500/10" },
        ]
    },
    {
        category: "Cloud & Tech",
        items: [
            { name: "APIs & OAuth", icon: Server, color: "text-sky-500", bg: "bg-sky-500/10" },
            { name: "Oracle Cloud (OCI)", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", color: "text-red-500", bg: "bg-red-500/10" },
            { name: "Azure DevOps", img: "https://skillicons.dev/icons?i=azure", color: "text-blue-500", bg: "bg-blue-500/10" },
            { name: "CI/CD Pipelines", icon: Infinity, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
            { name: "Jira & Confluence", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", color: "text-blue-600", bg: "bg-blue-600/10" },
            { name: "DevOps & GitLab", img: "https://skillicons.dev/icons?i=gitlab", color: "text-orange-600", bg: "bg-orange-600/10" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

import type { Variants } from "framer-motion";

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 }
    }
};

export default function AnimatedToolset() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full max-w-5xl">
            {tools.map((section, sectionIdx) => (
                <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
                    className="bg-background border border-foreground/5 rounded-3xl p-8 hover:shadow-xl hover:border-foreground/10 transition-all flex flex-col h-full group"
                >
                    <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                        {section.category}
                    </h4>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-3 mt-auto flex-grow"
                    >
                        {section.items.map((item) => {
                            const Icon = item.icon;
                            // @ts-ignore: Next.js tsconfig might complain about dynamic properties without explicit type
                            const imgUrl = item.img;
                            return (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-foreground/[0.03] transition-colors cursor-default"
                                >
                                    <div className={`p-2 flex items-center justify-center rounded-xl ${item.bg}`}>
                                        {imgUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={imgUrl} alt={item.name} className="w-5 h-5 object-contain" />
                                        ) : (
                                            Icon && <Icon className={`w-5 h-5 ${item.color}`} />
                                        )}
                                    </div>
                                    <span className="font-medium text-foreground/80 text-sm">{item.name}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
