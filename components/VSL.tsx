"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Reemplazá este ID cuando tengas el video de Vimeo
const VIMEO_ID = "";

export default function VSL() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-navy pb-20 pt-4">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
          style={{ aspectRatio: "16/9" }}
        >
          {VIMEO_ID && playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-gradient">
              {/* Glow background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
              </div>

              {/* Play button */}
              <button
                onClick={() => VIMEO_ID && setPlaying(true)}
                className="relative group cursor-default"
                aria-label="Reproducir video"
              >
                <div className="w-20 h-20 rounded-full border-2 border-gold/60 flex items-center justify-center bg-navy/80 backdrop-blur-sm group-hover:border-gold group-hover:bg-navy transition-all duration-300">
                  <svg className="w-8 h-8 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border border-gold/30 scale-125 animate-ping opacity-40" />
              </button>

              <p className="mt-6 text-slate-400 text-sm"></p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
