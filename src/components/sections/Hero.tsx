"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="z-10 flex flex-col items-start justify-center mt-16 sm:mt-20 w-full max-w-5xl px-4 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-black tracking-tight leading-none greeting-gradient text-[length:clamp(2.5rem,5vw,4.5rem)]"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Hi, I&apos;m.
        </motion.p>

        <h1 className="font-black tracking-tight leading-none name-gradient name-glow text-[length:clamp(2.8rem,10vw,8rem)] whitespace-nowrap" style={{ fontFamily: 'var(--font-syne)' }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block"
          >
            Ashik Tomy
          </motion.span>
        </h1>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 1 }}
           className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mt-6 mb-8 uppercase font-mono self-center text-center"
        >
          Think. Build. Scale.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="flex flex-row items-center justify-center self-center w-full gap-3 sm:gap-6 cursor-none mb-10"
        >
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base whitespace-nowrap rounded-full border border-white text-white font-bold tracking-wide hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 transition-all duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base whitespace-nowrap rounded-full border border-white text-white font-bold tracking-wide hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.0, duration: 1 }}
           className="text-gray-400 text-xl sm:text-2xl md:text-3xl max-w-5xl text-justify leading-relaxed self-center mx-auto"
        >
          Final-year B.Tech Computer Science (AI & ML) student with Honors in Cyber Security, backed by a strong foundation in machine learning and hands-on experience through academic, personal, and research-driven projects. Actively contributed to research and academic initiatives, while also taking on leadership and volunteer roles across clubs and associations, including serving as a club head. Seeking opportunities to apply my skills in AI/ML, cybersecurity, and software development to build impactful, real-world systems.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
