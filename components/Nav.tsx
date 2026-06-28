"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="Visas Elite"
          width={140}
          height={40}
          priority
        />
        <a
          href="https://catalinavisaselite.com/formulario-de-aplicacion"
          className="cta-btn px-5 py-2.5 rounded-lg text-sm hidden sm:block"
        >
          Diagnóstico gratuito
        </a>
      </div>
    </motion.nav>
  );
}
