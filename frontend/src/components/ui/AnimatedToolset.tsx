import { motion, type Variants } from "framer-motion";
import { Server, Infinity } from "lucide-react";

export interface ToolItem {
    name: string;
    iconName?: string;
    img?: string;
    color?: string;
    bg?: string;
    icon?: any;
}

export interface ToolSection {
    category: string;
    items: ToolItem[];
}

const defaultTools: ToolSection[] = [
    {
        category: "Backend & Systems",
        items: [
            { name: "Java (17 / 21)", img: "https://skillicons.dev/icons?i=java", color: "text-amber-500", bg: "bg-amber-500/10" },
            { name: "Spring Boot", img: "https://skillicons.dev/icons?i=spring", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { name: "Microservices & REST", icon: Server, color: "text-sky-500", bg: "bg-sky-500/10" },
            { name: "Spring Data JPA / Hibernate", img: "https://skillicons.dev/icons?i=hibernate", color: "text-indigo-500", bg: "bg-indigo-500/10" },
            { name: "PostgreSQL & MySQL", img: "https://skillicons.dev/icons?i=postgres", color: "text-blue-500", bg: "bg-blue-500/10" },
            { name: "Redis & Caching", img: "https://skillicons.dev/icons?i=redis", color: "text-red-500", bg: "bg-red-500/10" },
        ]
    },
    {
        category: "Frontend & Web",
        items: [
            { name: "React", img: "https://skillicons.dev/icons?i=react", color: "text-cyan-500", bg: "bg-cyan-500/10" },
            { name: "TypeScript", img: "https://skillicons.dev/icons?i=ts", color: "text-blue-600", bg: "bg-blue-600/10" },
            { name: "JavaScript (ES6+)", img: "https://skillicons.dev/icons?i=js", color: "text-yellow-500", bg: "bg-yellow-500/10" },
            { name: "Tailwind CSS", img: "https://skillicons.dev/icons?i=tailwind", color: "text-teal-500", bg: "bg-teal-500/10" },
            { name: "Next.js & Vite", img: "https://skillicons.dev/icons?i=vite", color: "text-purple-500", bg: "bg-purple-500/10" },
            { name: "HTML5 & Modern CSS", img: "https://skillicons.dev/icons?i=html", color: "text-orange-500", bg: "bg-orange-500/10" },
        ]
    },
    {
        category: "Cloud, DevOps & Tools",
        items: [
            { name: "Docker", img: "https://skillicons.dev/icons?i=docker", color: "text-sky-600", bg: "bg-sky-600/10" },
            { name: "Azure DevOps", img: "https://skillicons.dev/icons?i=azure", color: "text-blue-500", bg: "bg-blue-500/10" },
            { name: "Postman", img: "https://skillicons.dev/icons?i=postman", color: "text-orange-500", bg: "bg-orange-500/10" },
            { name: "CI/CD Pipelines", icon: Infinity, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
            { name: "Git & GitHub", img: "https://skillicons.dev/icons?i=github", color: "text-gray-400", bg: "bg-gray-500/10" },
            { name: "GitLab", img: "https://skillicons.dev/icons?i=gitlab", color: "text-orange-500", bg: "bg-orange-500/10" },
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

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 10 }
    }
};

export default function AnimatedToolset({ sections = defaultTools }: { sections?: ToolSection[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full max-w-5xl">
            {sections.map((section, sectionIdx) => (
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
                            const imgUrl = item.img;
                            return (
                                <motion.div
                                    key={item.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-foreground/[0.03] transition-colors cursor-default"
                                >
                                    <div className={`p-2 flex items-center justify-center rounded-xl ${item.bg || 'bg-foreground/5'}`}>
                                        {imgUrl ? (
                                            <img src={imgUrl} alt={item.name} className="w-5 h-5 object-contain" />
                                        ) : (
                                            Icon && <Icon className={`w-5 h-5 ${item.color || 'text-foreground'}`} />
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
