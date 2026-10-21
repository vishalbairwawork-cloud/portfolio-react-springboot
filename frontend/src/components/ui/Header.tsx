import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);

const LeetcodeIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607L9.4 7.82l4.993-4.994c.54-.54.54-1.414 0-1.955a1.374 1.374 0 0 0-.91-.871zm3.842 8.799a1.376 1.376 0 0 0-.968.404l-3.738 3.738a1.377 1.377 0 1 0 1.947 1.947l3.738-3.738a1.378 1.378 0 0 0-.979-2.351z"/>
    </svg>
);

const MediumIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="px-6 py-4 flex items-center justify-between">
                <a href="#" className="text-lg font-bold tracking-tight">
                    Vishal Bairwa<span className="text-blue-500">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/70">
                    <a href="#experience" className="hover:text-foreground transition-colors">
                        Experience
                    </a>
                    <a href="#case-studies" className="hover:text-foreground transition-colors">
                        Architecture
                    </a>
                    <a href="#articles" className="hover:text-foreground transition-colors">
                        Blogs
                    </a>
                    <a href="#skills" className="hover:text-foreground transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-foreground transition-colors">
                        Contact
                    </a>

                    <div className="flex items-center gap-3 ml-2 pl-4 border-l border-foreground/10">
                        <ThemeToggle />
                        <a href="https://github.com/vishalbairwawork-cloud" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="GitHub">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                        <a href="https://leetcode.com/u/bairwavishal/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-amber-500 transition-colors" aria-label="LeetCode">
                            <LeetcodeIcon className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/vishal-bairwa/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                        <a href="https://medium.com/@vishalbairwa" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Medium">
                            <MediumIcon className="w-5 h-5" />
                        </a>
                        <a href="/Vishal_Bairwa_Product.pdf" target="_blank" rel="noreferrer" className="ml-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                            Resume
                        </a>
                    </div>
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-foreground/80 hover:bg-foreground/10 rounded-lg transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-background border-b border-foreground/5 shadow-xl"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6">
                            <nav className="flex flex-col gap-4 text-base font-medium text-foreground/70">
                                <a href="#experience" onClick={closeMenu} className="hover:text-foreground transition-colors">Experience</a>
                                <a href="#case-studies" onClick={closeMenu} className="hover:text-foreground transition-colors">Architecture</a>
                                <a href="#articles" onClick={closeMenu} className="hover:text-foreground transition-colors">Blogs</a>
                                <a href="#skills" onClick={closeMenu} className="hover:text-foreground transition-colors">Skills</a>
                                <a href="#contact" onClick={closeMenu} className="hover:text-foreground transition-colors">Contact</a>
                            </nav>
                            
                            <div className="flex items-center gap-4 pt-6 border-t border-foreground/5 flex-wrap">
                                <a href="https://github.com/vishalbairwawork-cloud" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="GitHub">
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                                <a href="https://leetcode.com/u/bairwavishal/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-amber-500 transition-colors" aria-label="LeetCode">
                                    <LeetcodeIcon className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/vishal-bairwa/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                                    <LinkedinIcon className="w-5 h-5" />
                                </a>
                                <a href="https://medium.com/@vishalbairwa" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Medium">
                                    <MediumIcon className="w-5 h-5" />
                                </a>
                                <a href="/Vishal_Bairwa_Product.pdf" target="_blank" rel="noreferrer" className="ml-auto px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
