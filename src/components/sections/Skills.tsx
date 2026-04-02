"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const getIconUrl = (name: string, categoryColor: string) => {
  const slugs: Record<string, string> = {
    'C': 'c', 'Python': 'python', 'Java': 'java', 'HTML': 'html5', 'CSS': 'css3', 'JavaScript': 'javascript', 'TypeScript': 'typescript',
    'Django': 'django', 'Streamlit': 'streamlit', 'PyTorch': 'pytorch', 'TensorFlow': 'tensorflow', 'Scikit-learn': 'scikitlearn',
    'Transformers': 'huggingface', 'Axios': 'axios', 'React': 'react', 'Next.js': 'nextdotjs',
    'Kali Linux': 'kalilinux', 'Wireshark': 'wireshark', 'Docker': 'docker',
    'MongoDB': 'mongodb', 'MySQL': 'mysql', 'Cloudinary': 'cloudinary', 'Netlify': 'netlify',
    'Git': 'git', 'GitHub': 'github', 'Linux': 'linux', 'VS Code': 'visualstudiocode', 'Jupyter Notebook': 'jupyter',
    'Razorpay': 'razorpay', 'Unity': 'unity', 'Solidworks': 'solidworks'
  };
  const slug = slugs[name];
  if (!slug) return null;
  const hex = categoryColor === 'neon-cyan' ? '22d3ee' : '7c3aed'; 
  return `https://cdn.simpleicons.org/${slug}/${hex}`;
};

const skillCategories = [
  {
    title: "Databases & Hosting",
    skills: ["MongoDB", "MySQL", "Cloudinary", "Netlify"],
    color: "neon-purple",
    duration: 35,
    direction: 1,
    radius: 120, // Inner orbit
  },
  {
    title: "Cybersecurity & DevOps",
    skills: ["Kali Linux", "Wireshark", "Docker", "Nmap", "Burp Suite", "Autopsy", "XSS"],
    color: "neon-cyan",
    duration: 45,
    direction: -1,
    radius: 190,
  },
  {
    title: "Languages",
    skills: ["C", "Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
    color: "neon-cyan",
    duration: 55,
    direction: 1,
    radius: 260,
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Jupyter Notebook", "Razorpay", "Unity", "Solidworks"],
    color: "neon-cyan",
    duration: 65,
    direction: -1,
    radius: 330,
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Streamlit", "PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "FAISS", "Axios", "React", "Next.js"],
    color: "neon-purple",
    duration: 75,
    direction: 1,
    radius: 400, // Outer orbit
  },
];

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  // Used for un-focusing orbits if tapping outside
  const handleContainerClick = () => {
    setHoveredCategory(null);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 flex flex-col items-center justify-center z-10 text-white overflow-hidden bg-[#020503]" onClick={handleContainerClick}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-6xl font-black mb-16 sm:mb-24 text-center text-glow z-20 relative px-4 pointer-events-none">
          Technical <span className="text-neon-cyan text-stroke">Arsenal</span>
        </h2>
      </motion.div>

      {/* Orbital System Container */}
      {/* Removed stopPropagation so clicking empty transparent space dismisses the rings */}
      <div className="relative w-full max-w-[1000px] h-[450px] sm:h-[650px] md:h-[900px] flex items-center justify-center">
        {/* Responsive scaling wrapper */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.35] sm:scale-[0.55] md:scale-[0.75] lg:scale-100 transition-transform duration-500 w-[800px] h-[800px] pointer-events-none">
          
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
             <div className={`relative w-28 h-28 rounded-full bg-[#050a05] border-2 flex items-center justify-center transition-all duration-300 ${hoveredCategory !== null ? 'border-transparent' : 'border-neon-cyan/50 shadow-[0_0_50px_rgba(34,211,238,0.3)]'}`}>
                <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3s' }} />
                
                <AnimatePresence mode="wait">
                  {hoveredCategory !== null ? (
                     <motion.div 
                       key={hoveredCategory}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.8 }}
                       className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 rounded-full bg-black/80 backdrop-blur-sm border pointer-events-none"
                       style={{ 
                          borderColor: skillCategories[hoveredCategory].color === 'neon-cyan' ? 'rgba(34,211,238,0.5)' : 'rgba(124,58,237,0.5)',
                          boxShadow: `0 0 30px rgba(${skillCategories[hoveredCategory].color === 'neon-cyan' ? '34,211,238' : '124,58,237'}, 0.3) inset`
                       }}
                     >
                       <span className="text-xs sm:text-sm font-bold leading-tight" style={{ color: `rgb(${skillCategories[hoveredCategory].color === 'neon-cyan' ? '34,211,238' : '124,58,237'})` }}>
                         {skillCategories[hoveredCategory].title}
                       </span>
                     </motion.div>
                  ) : (
                     <motion.span 
                        key="me"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-2xl font-black tracking-widest text-neon-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] pointer-events-none"
                     >
                       ME
                     </motion.span>
                  )}
                </AnimatePresence>
             </div>
          </div>

          {/* Orbits */}
          {skillCategories.map((cat, i) => {
            const isHovered = hoveredCategory === i;
            const isDimmed = hoveredCategory !== null && hoveredCategory !== i;
            const rgbColor = cat.color === 'neon-cyan' ? '34, 211, 238' : '124, 58, 237';

            return (
              <div
                key={i}
                // pointer-events-none PREVENTS the large transparent circles from intercepting each other's hovers!
                className="absolute top-1/2 left-1/2 rounded-full border transition-all duration-500 ease-out z-10 pointer-events-none"
                style={{
                  width: cat.radius * 2,
                  height: cat.radius * 2,
                  animation: `orbit-spin ${cat.duration}s linear infinite ${cat.direction === 1 ? 'normal' : 'reverse'}`,
                  animationPlayState: hoveredCategory !== null ? 'paused' : 'running',
                  opacity: isDimmed ? 0.15 : 1,
                  borderColor: isHovered ? `rgba(${rgbColor}, 0.5)` : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: isHovered ? `0 0 40px rgba(${rgbColor}, 0.1) inset, 0 0 40px rgba(${rgbColor}, 0.1)` : 'none',
                  zIndex: isHovered ? 40 : 10 + i,
                }}
              >
                {/* Skill Nodes */}
                {cat.skills.map((skill, j) => {
                  const angle = (j / cat.skills.length) * 360;
                  const iconUrl = getIconUrl(skill, cat.color);

                  return (
                    // 1. Position on circle
                    <div 
                      key={j}
                      className="absolute top-1/2 left-1/2"
                      style={{ 
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${cat.radius}px)` 
                      }}
                    >
                      {/* 2. Static counter-rotation */}
                      <div style={{ transform: `rotate(${-angle}deg)` }}>
                        {/* 3. Animated counter-rotation to stay upright. Add pointer-events-auto HERE so nodes are clickable */}
                        <div 
                          className="relative flex items-center justify-center transition-transform duration-300 cursor-pointer pointer-events-auto"
                          style={{
                            animation: `orbit-spin-reverse ${cat.duration}s linear infinite ${cat.direction === 1 ? 'normal' : 'reverse'}`,
                            animationPlayState: hoveredCategory !== null ? 'paused' : 'running',
                          }}
                          onPointerEnter={(e) => {
                            if (e.pointerType === "mouse") setHoveredCategory(i);
                          }}
                          onPointerLeave={(e) => {
                            if (e.pointerType === "mouse") setHoveredCategory(null);
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Avoid triggering the section's un-focus logic
                            setHoveredCategory(hoveredCategory === i ? null : i);
                          }}
                        >
                          <div 
                             className={`w-14 h-14 rounded-full bg-[#050a05] border flex items-center justify-center transition-all duration-300 shadow-xl ${isHovered ? 'scale-110 z-50' : 'scale-100 z-30'}`}
                             style={{
                               borderColor: isHovered ? `rgba(${rgbColor}, 0.6)` : 'rgba(255,255,255,0.1)',
                               boxShadow: isHovered ? `0 0 20px rgba(${rgbColor}, 0.5)` : 'none',
                             }}
                          >
                             {iconUrl ? (
                               <img src={iconUrl} alt={skill} className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] pointer-events-none" />
                             ) : (
                               <Terminal size={24} className={`pointer-events-none ${cat.color === 'neon-cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`} />
                             )}
                          </div>

                          {/* Orbit Active Side Label */}
                          <AnimatePresence>
                            {(isHovered) && (
                              <motion.div
                                initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="absolute left-[calc(100%+12px)] px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border text-sm xl:text-base font-bold whitespace-nowrap pointer-events-none z-[100]"
                                style={{
                                  borderColor: `rgba(${rgbColor}, 0.4)`,
                                  color: `rgb(${rgbColor})`,
                                  boxShadow: `0 4px 15px rgba(0,0,0,0.5)`
                                }}
                              >
                                {skill}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
