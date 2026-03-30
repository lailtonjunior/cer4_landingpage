"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;
      const duration = 2000; // 2 seconds
      
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * to));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

export default function KPIs() {
  const stats = [
    { label: "Atendimentos Mês", value: 4500, suffix: "+" },
    { label: "Municípios Cobertos", value: 38, suffix: "" },
    { label: "Taxa de Satisfação", value: 98, suffix: "%" },
    { label: "Profissionais", value: 120, suffix: "+" }
  ];

  return (
    <section className="py-20 bg-apae-wine relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-apae-red/30 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-apae-blue/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tabular-nums">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm md:text-base font-medium tracking-wide shadow-black">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
