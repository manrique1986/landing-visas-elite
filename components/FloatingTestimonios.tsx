"use client";

import { useEffect, useState } from "react";

export default function FloatingTestimonios() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece después de 2 segundos
    const t = setTimeout(() => setVisible(true), 2000);
    // Se oculta cuando el usuario llega a los testimonios
    function onScroll() {
      const el = document.getElementById("testimonios");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) setVisible(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  function scrollToTestimonios() {
    document.getElementById("testimonios")?.scrollIntoView({ behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTestimonios}
      aria-label="Ver testimonios"
      className="fixed bottom-8 right-6 z-50 flex flex-col items-center gap-1.5 group"
    >
      {/* Píldora */}
      <div className="flex items-center gap-2 bg-[#0a1535] border border-[#c9a44a]/70 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-black/40 group-hover:border-[#c9a44a] group-hover:bg-[#0f1f45] transition-all duration-200 whitespace-nowrap">
        {/* Ícono play video */}
        <svg className="w-4 h-4 text-[#c9a44a] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Mira los testimonios
      </div>

      {/* Flecha animada */}
      <svg
        className="w-5 h-5 text-[#c9a44a] animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
