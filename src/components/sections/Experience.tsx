"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "WeCare - Service Management Web Application",
      date: "2025",
      type: "work",
      points: [
        "Designed and developed backend using Django",
        "Implemented role-based authentication (Admin, User, Employee)",
        "Integrated Razorpay payment gateway",
        "Built dashboards for tracking bookings and job status",
      ],
      tech: ["Django", "Python", "Razorpay", "HTML", "CSS", "JS"]
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
              <motion.div 
                whileHover={{ y: -12, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] hover:border-neon-cyan/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] hover:bg-white/10 transition-all duration-300 group relative overflow-hidden text-right w-full sm:w-5/6 lg:w-4/5"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <span className="text-neon-purple text-xs sm:text-sm font-mono font-semibold tracking-widest bg-neon-purple/10 px-4 py-1.5 rounded-full border border-neon-purple/20">{exp.date}</span>
                  <h3 className="text-2xl sm:text-4xl font-bold mt-6 text-white group-hover:text-glow transition-all tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>{exp.title}</h3>
                  <h4 className="text-lg sm:text-xl text-gray-400 font-medium mb-8 flex flex-row-reverse items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-600"></span> {exp.company}
                  </h4>
                  
                  <ul className="space-y-4 flex flex-col items-end">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-gray-300 text-base sm:text-lg flex gap-4 leading-relaxed flex-row-reverse text-right group/item">
                        <span className="text-neon-cyan mt-1.5 transition-transform group-hover/item:-translate-x-1 group-hover/item:scale-125">◂</span> 
                        <span className="group-hover:text-white transition-colors duration-300">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-2 justify-end">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-purple whitespace-nowrap hover:border-neon-purple/50 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex justify-end">
                    <Link 
                      href="/projects/wecare"
                      className="group/btn flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                    >
                      <span className="text-sm font-bold tracking-wide">View Project</span>
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
