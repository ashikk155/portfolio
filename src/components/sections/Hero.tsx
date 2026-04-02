"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const name = "Ashik Tomy".split("");
  
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-transparent z-[-10]" />
      
      <div className="z-10 flex flex-col items-center justify-center -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-2 mb-6 rounded-full border border-neon-purple/30 bg-neon-purple/10 backdrop-blur-md"
        >
          <span className="text-neon-cyan text-sm sm:text-base font-mono tracking-wider">
            AI/ML & Cyber Security
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-center text-glow flex mb-4">
          {name.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className={char === " " ? "mr-4 sm:mr-6" : "text-transparent bg-clip-text bg-gradient-to-b from-white to-neon-cyan drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-2xl text-center mb-10 px-4"
        >
          Building intelligent systems and secure architectures. Third-year B.Tech specializing in Machine Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 cursor-none"
        >
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full border border-neon-cyan text-neon-cyan font-bold tracking-wide hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-full border border-neon-cyan text-neon-cyan font-bold tracking-wide hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
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
