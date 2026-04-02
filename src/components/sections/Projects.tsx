"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const research = [
  {
    title: "Microscopic Activity-Based Modeling for Urban Vehicular Emission Estimation and Signal Optimization",
    year: "2026",
    description: "Developed a proactive traffic signal optimization system predicting urban emissions using vision-based tracking (YOLOv8 & DeepSort), a physics-informed Vehicle Specific Power (VSP) model, and LSTM neural networks.",
    tech: ["YOLOv8", "LSTM", "DeepSort", "VSP Formula", "Python"],
    github: "#",
    live: "#"
  }
];

const projects = [
  {
    title: "Adversarial Prompt Detection System",
    year: "2025",
    description: "Behavior-Aware Multi-Stage LLM Prompt Defense Framework. Engineered an offline, deterministic security pipeline to detect malicious prompts, jailbreak attempts, and prompt injection attacks.",
    tech: ["Python", "PyTorch", "Hugging Face", "DeBERTa", "FAISS", "Streamlit"],
    github: "#",
    live: "#"
  },
  {
    title: "Real-Time Fall Detection",
    year: "2024",
    description: "YOLO-based Human Posture Analysis System. Developed a fall detection system for old age homes using YOLOv10 with automated email alerts.",
    tech: ["Python", "OpenCV", "YOLOv10", "NumPy", "SMTP"],
    github: "#",
    live: "#"
  },
  {
    title: "Serene Homes",
    year: "2024",
    description: "Memory Space Management System. A full-stack digital memory platform to manage residents' digital memory spaces with secure cloud storage.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Netlify"],
    github: "#",
    live: "#"
  },
  {
    title: "Gesture-Driven Game Suite",
    year: "2024",
    description: "Real-Time Gesture-Controlled Games using Computer Vision. Implemented hand gesture recognition using MediaPipe and OpenCV.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    live: "#"
  }
];

function TiltCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative flex flex-col rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-neon-cyan/50 transition-colors duration-500 cursor-none perspective-1000 z-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" style={{ transform: "translateZ(-10px)" }} />
      
      <div
        className="flex flex-col h-full"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
          <span className="text-neon-purple font-mono font-semibold">{project.year}</span>
        </div>
        
        <p className={cn("text-gray-400 leading-relaxed transition-all duration-300", isExpanded ? "line-clamp-none" : "line-clamp-3")}>
          {project.description}
        </p>

        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="text-neon-cyan/80 hover:text-neon-cyan text-sm flex items-center gap-1 mt-2 self-start md:hidden"
        >
          {isExpanded ? "Show Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
        </button>
        
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neon-purple whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-8 items-center" style={{ transform: "translateZ(20px)" }}>
          <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple text-gray-400 transition-all border border-transparent hover:border-neon-purple/50">
            <GithubIcon size={20} />
          </a>
          <a href={project.live} className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan text-gray-400 transition-all border border-transparent hover:border-neon-cyan/50">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col z-10 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-glow">
            Featured <span className="text-neon-cyan text-stroke">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000 mb-24">
          {projects.map((proj, i) => (
            <TiltCard key={i} project={proj} index={i} />
          ))}
        </div>

        <div className="flex items-center gap-4 mb-16 justify-end w-full">
          <h2 className="text-4xl sm:text-6xl font-black text-glow text-right">
            Applied <span className="text-neon-cyan text-stroke">Research</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
          {research.map((res, i) => (
            <TiltCard key={`res-${i}`} project={res} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
