"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-sm" : "bg-transparent"
            )}
        >
            <Link href="/" className="text-lg font-bold tracking-tight">
                Vishal Bairwa<span className="text-blue-500">.</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
                <Link href="#experience" className="hover:text-foreground transition-colors">
                    Experience
                </Link>
                <Link href="#case-studies" className="hover:text-foreground transition-colors">
                    Case Studies
                </Link>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                </Link>
                <a href="/Vishal_Bairwa_Product.pdf" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors font-bold">
                    Resume
                </a>
            </nav>
        </motion.header>
    );
}
