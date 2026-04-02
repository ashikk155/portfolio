"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export function About() {
  const experiences = [
    {
      title: "B.Tech in Computer Science (AI & ML)",
      company: "CHRIST University, Bengaluru",
      date: "2023 - 2027",
      type: "edu",
      points: [
        "Honors in Cyber Security.",
        "CGPA: 7.99 / 10",
        "Active member of NSS, CSA, IIIC, and ACC Logistics Head.",
      ],
    },
    {
      title: "Higher Secondary Education",
      company: "St. Mary's H.S.S, Kerala",
      date: "2023",
      type: "edu",
      points: [
        "Completed with 96% in core subjects.",
      ],
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col pt-32 h-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 flex items-center gap-4 text-glow">
          <span className="text-neon-purple">/</span> My Journey
        </h2>
        
        <div className="relative border-l border-neon-cyan/30 ml-4 sm:ml-8 mt-12 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[20px] top-0 w-10 h-10 rounded-full bg-[#0a0a1a] border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.4)]">
                {exp.type === "work" ? (
                  <Briefcase size={18} className="text-neon-cyan" />
                ) : (
                  <GraduationCap size={18} className="text-neon-purple" />
                )}
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-neon-purple/50 transition-colors duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transition-none" />
                <span className="text-neon-cyan text-sm font-mono font-semibold tracking-wider">{exp.date}</span>
                <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-glow transition-all">{exp.title}</h3>
                <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-3 leading-relaxed">
                      <span className="text-neon-purple mt-1">▹</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
