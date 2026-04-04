"use client";

import { motion } from "framer-motion";
import { Code2, Microscope, Users, Target } from "lucide-react";

const focusItems = [
  {
    title: "What I Build",
    icon: <Code2 className="w-12 h-12 lg:w-16 lg:h-16 text-neon-cyan mb-6 lg:mb-8" />,
    items: [
      "Intelligent full-stack web applications",
      "Scalable backend systems and APIs",
      "AI/ML-driven solutions and predictive models",
      "Platforms focused on real-world usability and impact"
    ]
  },
  {
    title: "Research & Exploration",
    icon: <Microscope className="w-12 h-12 lg:w-16 lg:h-16 text-neon-purple mb-6 lg:mb-8" />,
    description: "I actively explore areas at the intersection of AI, machine learning, and cybersecurity, contributing to research-driven and academic initiatives. My focus is on understanding how intelligent systems can be designed, optimized, and applied to solve complex real-world problems, while continuously experimenting with new approaches and technologies."
  },
  {
    title: "Beyond Code",
    icon: <Users className="w-12 h-12 lg:w-16 lg:h-16 text-green-400 mb-6 lg:mb-8" />,
    description: "Beyond technical work, I've actively contributed to clubs and associations in both volunteer and team roles, and served as a Domain Head, taking responsibility for coordinating activities and supporting team execution. This experience has helped me develop strong collaboration, leadership, and communication skills."
  },
  {
    title: "Current Focus",
    icon: <Target className="w-12 h-12 lg:w-16 lg:h-16 text-[#f472b6] mb-6 lg:mb-8" />,
    items: [
      "Engineering intelligent systems, not just applications",
      "Integrating AI into real-world, scalable products",
      "Designing backend architectures that handle complexity and growth",
      "Continuously improving performance, structure, and system thinking"
    ]
  }
];

export function Focus() {
  return (
    <section className="relative w-full pb-32 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col z-10 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 perspective-1000 mt-12">
          {focusItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-10 lg:p-14 rounded-3xl hover:border-neon-cyan/30 transition-colors duration-500 group relative overflow-hidden flex flex-col justify-center min-h-[320px] lg:min-h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {item.icon}
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white group-hover:text-glow transition-all">{item.title}</h3>
                
                {item.description ? (
                  <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl">
                    {item.description}
                  </p>
                ) : (
                  <ul className="space-y-4 lg:space-y-6">
                    {item.items?.map((pt, j) => (
                      <li key={j} className="text-gray-300 text-base sm:text-lg lg:text-xl flex gap-4 leading-relaxed">
                        <span className="text-neon-cyan mt-1 lg:mt-1.5 leading-none text-lg lg:text-xl">▹</span> {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
