"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function NeuralParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionRadius = 150;
    const mouseConnectionRadius = 200;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: -1000, y: -1000 };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((width * height) / 10000); // Responsive particle count
      for (let i = 0; i < Math.min(count, 150); i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2, // slower movement
          vy: (Math.random() - 0.5) * 0.2, // slower movement
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    initParticles();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0A0A0F");
      gradient.addColorStop(1, "#020617");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 238, 255, 0.35)"; // Nodes: rgba(14, 238, 255, 0.35)
        ctx.shadowBlur = 0; // Remove extra shadow for minimal noise
        ctx.fill();

        // Check connections with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionRadius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 1 - dist / connectionRadius;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.15})`; // Lines: rgba(99, 102, 241, 0.15)
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Check connection with mouse
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseConnectionRadius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = 1 - distMouse / mouseConnectionRadius;
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.3})`; // Subtly increase opacity for lines near cursor
          ctx.lineWidth = 1;
          ctx.stroke();

          // Nearby nodes slightly brighten
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(14, 238, 255, ${0.35 + alpha * 0.3})`; // Brighten Node near cursor
          ctx.fill();

          // Particles slightly react to mouse (slow smooth movement)
          p.x -= dxMouse * 0.002;
          p.y -= dyMouse * 0.002;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0A0A0F]"
      style={{ pointerEvents: 'none' }} // Ensure it doesn't block interactions but cursor proximity works via window listeners
    />
  );
}
