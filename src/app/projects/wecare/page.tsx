"use client";

import { motion } from "framer-motion";
import { NeuralParticles } from "@/components/3d/NeuralParticles";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layout, 
  Database, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  UserCircle,
  HardHat,
  Monitor,
  Cpu,
  Server,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function WeCareProject() {
  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0F] text-white selection:bg-neon-purple/30 selection:text-neon-cyan overflow-x-hidden">
      <NeuralParticles />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple transition-all border border-transparent hover:border-neon-purple/50">
            <GithubIcon size={20} />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all border border-transparent hover:border-neon-cyan/50">
            <ExternalLink size={20} />
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* 1. Hero Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-6"
        >
          <motion.div variants={itemVariants} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan font-mono text-sm uppercase tracking-widest">
            Service Management Platform
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-black name-glow" style={{ fontFamily: 'var(--font-syne)' }}>
            WeCare
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-xl max-w-3xl leading-relaxed">
            A full-stack web application designed to streamline the booking and management of everyday services. 
            Empowering users, employees, and administrators through a unified digital system.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-6">
            {["Django", "Python", "Razorpay", "PostgreSQL", "JavaScript"].map((tech) => (
              <span key={tech} className="px-5 py-2 rounded-2xl bg-white/5 border border-white/10 text-sm font-mono text-neon-purple hover:border-neon-purple/50 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* 2. Visual Gallery Section */}
        <section className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.1)]"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                src="/projects/wecare/hero.png"
                alt="WeCare Main Dashboard"
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-10">
                <p className="text-neon-cyan font-mono text-sm uppercase tracking-widest">Main Interface</p>
                <h3 className="text-2xl font-bold">Service Dashboard</h3>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/projects/wecare/login.png", title: "Authentication", desc: "Secure Role-Based Login" },
              { src: "/projects/wecare/servicebook.png", title: "Service book", desc: "service history" },
              { src: "/projects/wecare/user.png", title: "Service Selection", desc: "Client dashboard" },
              { src: "/projects/wecare/admin.png", title: "Admin Assignment", desc: "Management interface" }
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]"
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-lg font-bold text-white mb-1">{img.title}</h4>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Overview & Architecture */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-bold flex items-center gap-4 text-glow">
              <span className="w-12 h-[2px] bg-neon-cyan" /> Core Overview
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                WeCare is a comprehensive service management platform that brings multiple service categories home care, pet care, baby care, and vehicle maintenance into a single, unified digital system.
              </p>
              <p>
                By bridging the gap between users seeking reliable help and professionals looking for work, the system automates the entire lifecycle of a service request. From initial booking to admin-led employee assignment and secure payment processing, WeCare ensures efficiency at every step.
              </p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] space-y-8 relative group hover:border-neon-purple/50 transition-all duration-500 shadow-2xl">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-neon-purple/10 blur-[100px] rounded-full group-hover:bg-neon-purple/20 transition-all" />
            <h2 className="text-2xl font-bold flex items-center gap-4">
              <div className="p-3 bg-neon-purple/10 rounded-xl border border-neon-purple/20">
                <Workflow className="text-neon-purple" size={24} />
              </div>
              MVT Architecture
            </h2>
            <div className="space-y-6">
              {[
                { l: "M", t: "Models", d: "Relational database schema managing users, pricing tiers, and booking states using Django ORM." },
                { l: "V", t: "Views", d: "The engine handling business logic, user permissions, and API integrations like Razorpay." },
                { l: "T", t: "Templates", d: "Server-side rendering of dynamic dashboards that adapt based on the logged-in role." }
              ].map((mvt) => (
                <div key={mvt.l} className="flex gap-6 items-start group/item">
                  <div className="text-3xl font-black text-neon-purple/30 group-hover/item:text-neon-purple transition-all pt-1 font-mono">{mvt.l}</div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{mvt.t}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{mvt.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 4. Database Design */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Database Design</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-mono text-xs uppercase tracking-[0.4em]">Structured Relational Intelligence</p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "User Model", desc: "Granular role extension for Admin, Client, and Employee personas.", icon: UserCircle },
              { title: "Service System", desc: "Dynamic pricing and category mapping for diverse service sets.", icon: Layout },
              { title: "Booking Engine", desc: "Maintains transactional integrity and real-time status updates.", icon: Server },
              { title: "Assignment Map", desc: "One-to-one mapping for dispatching employees to service requests.", icon: CheckCircle2 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-neon-cyan/50 transition-all hover:bg-white/10 group shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-neon-cyan/5 border border-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 group-hover:scale-110 transition-all duration-300">
                   <item.icon className="text-neon-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 5. System Flow (Pipeline) */}
        <section className="space-y-20 py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-cyan/5 opacity-30 blur-3xl" />
          <div className="text-center space-y-4 relative">
            <h2 className="text-5xl font-black">Application Pipeline</h2>
            <p className="text-gray-500 font-mono text-sm tracking-widest">STEP-BY-STEP WORKFLOW TRACKING</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-neon-purple/20 via-white/5 to-neon-cyan/20 -translate-y-1/2 hidden lg:block" />
            
            {[
              { name: "Auth & Session", sub: "LOGIN", color: "neon-purple" },
              { name: "Service Selection", sub: "USER BOOKING", color: "neon-cyan" },
              { name: "Admin Dispatch", sub: "ASSIGNMENT", color: "neon-purple" },
              { name: "Checkout Flow", sub: "PAYMENT", color: "neon-cyan" },
              { name: "Record Storage", sub: "COMPLETION", color: "neon-purple" }
            ].map((flow, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] relative z-10 flex flex-col items-center text-center group hover:border-white/20 transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-full bg-${flow.color}/5 border border-${flow.color}/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                  <ChevronRight size={24} className={`text-${flow.color}`} />
                </div>
                <p className={`text-[10px] font-mono tracking-[0.3em] font-bold text-${flow.color} bg-${flow.color}/5 px-3 py-1 rounded-full mb-3`}>{flow.sub}</p>
                <h4 className="font-bold text-lg leading-tight">{flow.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Authentication & Roles */}
        <section className="space-y-16">
          <div className="flex flex-col items-center text-center space-y-4">
             <h2 className="text-4xl font-bold">Multi-Role Authorization</h2>
             <p className="text-gray-400 max-w-2xl leading-relaxed">Dedicated modules for each persona ensure security and specialized functionality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { role: "Administrator", tasks: ["Employee Management", "Dispatch Logic", "System Pricing", "Audit Logs"], icon: ShieldCheck, color: "neon-purple" },
              { role: "Client / User", tasks: ["Personal Profile", "New Service Booking", "Secure Checkout", "Request Status"], icon: UserCircle, color: "neon-cyan" },
              { role: "Employee", tasks: ["Work Dashboard", "Schedule View", "Self Profile", "Task Updates"], icon: HardHat, color: "zinc-400" }
            ].map((role, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-white/5 p-12 rounded-[3rem] border border-white/5 flex flex-col items-center text-center transition-all duration-500 shadow-xl"
              >
                <div className={`w-20 h-20 rounded-3xl mb-8 flex items-center justify-center bg-gray-900 border border-white/10 shadow-inner`}>
                  <role.icon className={role.color === "neon-purple" ? "text-neon-purple" : role.color === "neon-cyan" ? "text-neon-cyan" : "text-gray-400"} size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest font-mono">{role.role}</h3>
                <ul className="space-y-4 w-full">
                  {role.tasks.map((task, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-center justify-center gap-3">
                       <CheckCircle2 size={14} className="text-neon-cyan/50" /> {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. Payment Integration */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neon-purple/10 via-white/5 to-neon-cyan/10 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 sm:p-24 flex flex-col lg:flex-row gap-20 items-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-neon-cyan/10 blur-[120px] rounded-full" />
          <div className="flex-1 space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono text-xs font-bold uppercase tracking-widest">
              Live Checkout Flow
            </div>
            <h2 className="text-5xl sm:text-6xl font-black name-glow">
              Razorpay API
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              Integrating a financial engine into the booking pipeline. The platform leverages Razorpay for secure server-side order generation and client-side payment processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
                <CreditCard className="text-neon-cyan" />
                <span className="font-mono text-sm tracking-tight">Order Creation</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-colors">
                <ShieldCheck className="text-neon-purple" />
                <span className="font-mono text-sm tracking-tight">Status Syncing</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="w-full aspect-square max-w-md border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
             >
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   className="p-16 rounded-[4rem] bg-black/60 backdrop-blur-2xl border border-white/20 shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                >
                   <CreditCard size={120} className="text-white/20" />
                </motion.div>
             </motion.div>
          </div>
        </motion.section>

        {/* 8. Tech Stack */}
        <section className="space-y-16 text-center">
          <h2 className="text-3xl font-black uppercase tracking-[0.6em] text-gray-600">The Modern Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { n: "Python", i: Cpu },
              { n: "Django", i: Server },
              { n: "PostgreSQL", i: Database },
              { n: "Razorpay", i: CreditCard },
              { n: "JavaScript", i: Workflow },
              { n: "Git", i: Monitor }
            ].map((stack, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, borderColor: "rgba(34,211,238,0.5)" }}
                className="flex items-center gap-4 px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 group transition-all cursor-default"
              >
                <stack.i size={20} className="text-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-bold tracking-wide">{stack.n}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. Final Outcome */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto py-20 px-10 bg-white/5 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent pointer-events-none" />
          <div className="w-24 h-24 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto border border-neon-cyan/20 mb-10 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative z-10">
            <CheckCircle2 className="text-neon-cyan" size={48} />
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-10 tracking-tight relative z-10" style={{ fontFamily: 'var(--font-syne)' }}>System Outcome</h2>
          <p className="text-gray-400 text-xl leading-relaxed relative z-10">
            WeCare functions as a complete service management system where multiple components—authentication, booking, assignment, payments, and dashboards—work together in a structured and scalable way.
            This project demonstrates advanced backend architecture and real-world application design patterns, creating a blueprint for enterprise-grade service platforms.
          </p>
          <div className="pt-16 relative z-10">
            <Link 
              href="/"
              className="px-12 py-5 rounded-[2rem] bg-neon-cyan text-black font-black hover:bg-white hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] transition-all uppercase tracking-widest text-sm"
            >
              Return Home
            </Link>
          </div>
        </motion.section>

      </div>

      <footer className="w-full text-center py-12 text-gray-700 font-mono text-xs border-t border-white/5 mt-40 relative z-10">
        WeCare Development • CHRIST University Bengaluru • 2025
      </footer>
    </main>
  );
}
