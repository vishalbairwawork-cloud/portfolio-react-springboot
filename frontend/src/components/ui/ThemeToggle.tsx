import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { isDark, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="w-14 h-8 rounded-full bg-foreground/10 opacity-0" aria-hidden="true"></div>
        );
    }

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center w-14 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 cursor-pointer"
            aria-label="Toggle theme"
        >
            <div className="absolute inset-0 flex items-center justify-between px-2 w-full h-full pointer-events-none">
                <Sun className="w-3.5 h-3.5 text-foreground/40" />
                <Moon className="w-3.5 h-3.5 text-foreground/40" />
            </div>
            
            <motion.div
                layout
                initial={false}
                animate={{
                    x: isDark ? 24 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
                className="w-6 h-6 rounded-full bg-background shadow-sm ml-1 flex items-center justify-center z-10"
            >
                {isDark ? (
                    <Moon className="w-3.5 h-3.5 text-foreground" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                )}
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
