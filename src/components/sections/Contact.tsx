"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col z-10 text-white min-h-[80vh] justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-16 justify-between items-center"
      >
        <div className="flex-1 flex flex-col items-start gap-8">
          <h2 className="text-5xl sm:text-7xl font-black text-glow">
            Let's <span className="text-neon-cyan">Talk</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            I'm currently looking for internship opportunities in AI/ML, Cyber Security, or Software Development. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col gap-6 mt-4">
            <a href="mailto:ashiktomy155@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-neon-purple group-hover:shadow-[0_0_15px_rgba(157,78,221,0.5)] transition-all">
                <Mail size={20} />
              </div>
              <span className="font-mono text-lg tracking-wide">ashiktomy155@gmail.com</span>
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/in/ashik-tomy" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/ashikk155" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all">
                <GithubIcon size={20} />
              </a>
              <a href="/resume.pdf" download className="group flex items-center gap-2 px-6 py-0 rounded-full border border-neon-purple/50 bg-neon-purple/10 hover:bg-neon-purple hover:text-white transition-all">
                <FileText size={18} />
                <span className="font-bold tracking-wide">Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-400">Name</label>
              <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-400">Email</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-400">Message</label>
              <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none" placeholder="Hello Ashik..." />
            </div>
            <button className="flex items-center justify-center gap-2 w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-black font-black tracking-widest hover:brightness-125 transition-all text-sm uppercase">
              Send Message <Send size={16} className="-mt-1" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
