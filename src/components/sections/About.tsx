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
        "Specializing in Artificial Intelligence & Machine Learning, with Honors in Cyber Security",
        "CGPA: 7.99 / 10",
        "Actively contributed and led initiatives across clubs and associations (CSA, ACC, IIIC)",
        "Worked on projects in AI/ML, full-stack development, and system design",
      ],
    },
    {
      title: "Higher Secondary Education",
      company: "St. Mary's H.S.S, Kerala",
      date: "2023",
      type: "edu",
      points: [
        "Completed higher secondary education with 96% in core subjects",
        "Volunteered in NSS (National Service Scheme) and Bharat Scouts & Guides",
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
              <motion.div 
                whileHover={{ y: -12, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[2rem] hover:border-neon-cyan/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <span className="text-neon-cyan text-xs sm:text-sm font-mono font-semibold tracking-widest bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/20">{exp.date}</span>
                  <h3 className="text-2xl sm:text-4xl font-bold mt-6 text-white group-hover:text-glow transition-all tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>{exp.title}</h3>
                  <h4 className="text-lg sm:text-xl text-gray-400 font-medium mb-8 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-600"></span> {exp.company}
                  </h4>
                  
                  <ul className="space-y-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-gray-300 text-base sm:text-lg flex gap-4 leading-relaxed group/item">
                        <span className="text-neon-purple mt-1.5 transition-transform group-hover/item:translate-x-1 group-hover/item:scale-125">▹</span> 
                        <span className="group-hover:text-white transition-colors duration-300">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
