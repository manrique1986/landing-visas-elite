"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

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
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-16 overflow-hidden">

      {/* Foto de fondo */}
      <Image
        src="/emocional.png"
        alt="Familia reunida"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay navy para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1535]/80 via-[#0a1535]/70 to-[#0a1535]/90" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="gradient-border-badge">
              <div className="inner">
                <span className="marquee-text">
                  Solo para hijos colombianos en Estados Unidos &nbsp;&nbsp;·&nbsp;&nbsp; Solo para hijos colombianos en Estados Unidos
                </span>
              </div>
            </div>
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
              QUIERO AGENDAR UNA LLAMADA
            </a>
            <a
              href="#por-que-catalina"
              className="border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/8 transition"
            >
              Conocer el servicio →
            </a>
          </motion.div>

          


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
            {/* Sello de garantía */}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-4xl font-extrabold text-white">8 sem.</p>
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon
                    points={Array.from({ length: 20 }, (_, i) => {
                      const a = ((i * 360 / 20) - 90) * Math.PI / 180;
                      const r = i % 2 === 0 ? 49 : 42;
                      return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
                    }).join(" ")}
                    fill="#c9a44a"
                  />
                  <circle cx="50" cy="50" r="40" fill="#0a1535" />
                  <circle cx="50" cy="50" r="38.5" stroke="#c9a44a" strokeWidth="2" fill="none" />
                  <path d="M 30 52 L 44 66 L 70 38" stroke="#c9a44a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <p className="text-sm text-slate-400 mt-1">garantía de resultado</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
