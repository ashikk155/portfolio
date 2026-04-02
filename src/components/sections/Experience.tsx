"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "WeCare - Service Management Web Application",
      date: "2025",
      type: "work",
      points: [
        "Developed a Django-based service booking system with Admin, User, and Employee roles.",
        "Integrated Razorpay for secure online payments.",
        "Designed dashboards for booking and job tracking.",
      ],
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-end text-white text-right">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-12 flex items-center justify-end gap-4 text-glow">
          Experience <span className="text-neon-cyan">/</span>
        </h2>
        
        <div className="relative border-r border-neon-purple/30 mr-4 sm:mr-8 mt-12 space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pr-8 sm:pr-12 flex flex-col items-end"
            >
              {/* Timeline dot */}
              <div className="absolute -right-[20px] top-0 w-10 h-10 rounded-full bg-[#050a05] border-2 border-neon-purple flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                <Briefcase size={18} className="text-neon-purple" />
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-neon-cyan/50 transition-colors duration-500 group relative overflow-hidden text-right w-full sm:w-2/3 lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-l from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-neon-purple text-sm font-mono font-semibold tracking-wider">{exp.date}</span>
                <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-glow transition-all">{exp.title}</h3>
                <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2 flex flex-col items-end">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-3 leading-relaxed flex-row-reverse">
                      <span className="text-neon-cyan mt-1">◂</span> <span className="text-left">{pt}</span>
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
