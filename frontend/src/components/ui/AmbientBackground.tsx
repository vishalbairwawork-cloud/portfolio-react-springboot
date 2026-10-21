import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Developer Grid Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10 opacity-60"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] dark:bg-violet-600/10 opacity-50"
      />
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
        className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] dark:bg-emerald-600/10 opacity-50"
      />
    </div>
  );
}
