"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Certifications() {
  const certifications = [
    { name: "Programming for Data Analytics", issuer: "L&T EduTech" },
    { name: "Operating System Fundamentals", issuer: "Scaler Academy" },
    { name: "Computer Networking", issuer: "Cisco, Coursera & Infosys" },
    { name: "Build Your Own Chatbot", issuer: "IBM" },
    { name: "Python Programming", issuer: "Udemy" },
    { name: "Machine Learning Fundamentals", issuer: "SkillUp" },
    { name: "ClickUp Expert Certification", issuer: "ClickUp" },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-start z-10 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-16 flex items-center gap-4 text-glow">
          <span className="text-neon-cyan">/</span> Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 backdrop-blur-md transition-all cursor-crosshair overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-10 h-10 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-purple group-hover:text-[#050a05] text-neon-purple transition-colors">
                <Award size={18} />
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-bold text-lg text-white group-hover:text-glow transition-all">{cert.name}</h3>
                <span className="text-neon-cyan text-sm font-mono mt-1">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
