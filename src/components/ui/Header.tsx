"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Linkedin, Menu, X } from "lucide-react";

const MediumIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

// Utility for merging tailwind classes safely
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
                <Link href="/" className="text-lg font-bold tracking-tight">
                    Vishal Bairwa<span className="text-blue-500">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
                    <Link href="#experience" className="hover:text-foreground transition-colors">
                        Experience
                    </Link>
                    <Link href="#case-studies" className="hover:text-foreground transition-colors">
                        Case Studies
                    </Link>
                    <Link href="#articles" className="hover:text-foreground transition-colors">
                        Blogs
                    </Link>
                    <Link href="#contact" className="hover:text-foreground transition-colors">
                        Contact
                    </Link>

                    <div className="flex items-center gap-4 ml-4 pl-4 border-l border-foreground/10">
                        <ThemeToggle />
                        <a href="https://www.linkedin.com/in/vishal-bairwa/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://medium.com/@vishalbairwa" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Medium">
                            <MediumIcon className="w-5 h-5" />
                        </a>
                        <a href="/Vishal_Bairwa_Product.pdf" target="_blank" rel="noreferrer" className="ml-2 px-4 py-2 rounded-full border border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-wider">
                            Resume
                        </a>
                    </div>
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-foreground/80 hover:bg-foreground/10 rounded-lg transition-colors"
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
                                <Link href="#experience" onClick={closeMenu} className="hover:text-foreground transition-colors">Experience</Link>
                                <Link href="#case-studies" onClick={closeMenu} className="hover:text-foreground transition-colors">Case Studies</Link>
                                <Link href="#articles" onClick={closeMenu} className="hover:text-foreground transition-colors">Blogs</Link>
                                <Link href="#contact" onClick={closeMenu} className="hover:text-foreground transition-colors">Contact</Link>
                            </nav>
                            
                            <div className="flex items-center gap-6 pt-6 border-t border-foreground/5">
                                <a href="https://www.linkedin.com/in/vishal-bairwa/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://medium.com/@vishalbairwa" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Medium">
                                    <MediumIcon className="w-6 h-6" />
                                </a>
                                <a href="/Vishal_Bairwa_Product.pdf" target="_blank" rel="noreferrer" className="ml-auto px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors font-bold text-sm tracking-wide">
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
