"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="bg-navy-gradient relative min-h-[95vh] flex items-center pt-16 overflow-hidden">

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-navy-700/40 blur-3xl" />
        <div className="animate-blob delay-2 absolute top-1/2 -right-48 w-[600px] h-[600px] rounded-full bg-[#1a2a7a]/50 blur-3xl" />
        <div className="animate-blob delay-4 absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-gold/40 text-gold rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-gold pulse-dot" />
            Solo para hijos colombianos en Estados Unidos
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Trae a tus padres a{" "}
            <span className="shimmer">EE.UU.</span>{" "}
            sin que enfrenten solos la Embajada
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Catalina Cardozo y su equipo brindan un servicio de acompañamiento premium desde el primer paso hasta el día de la entrevista. Más de 1.000 familias ya lo vivieron.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a href="#agendar" className="cta-btn glow-ring px-10 py-4 rounded-xl text-base">
              Quiero el diagnóstico gratuito
            </a>
            <a
              href="#por-que-catalina"
              className="border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/8 transition"
            >
              Conocer el servicio →
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-slate-400">
            Sin costo · Sin tarjeta · Respuesta en menos de 24 h
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-white/10"
          >
            <div>
              <p className="text-4xl font-extrabold text-white">
                +<Counter to={1000} />
              </p>
              <p className="text-sm text-slate-400 mt-1">visas aprobadas</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">
                <Counter to={10} />+ años
              </p>
              <p className="text-sm text-slate-400 mt-1">de experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">8 sem.</p>
              <p className="text-sm text-slate-400 mt-1">garantía de resultado</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
