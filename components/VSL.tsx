"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIMEO_ID = "1206144228";

function send(iframe: HTMLIFrameElement, method: string, value?: unknown) {
  const msg = value !== undefined
    ? JSON.stringify({ method, value })
    : JSON.stringify({ method });
  iframe.contentWindow?.postMessage(msg, "https://player.vimeo.com");
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function VSL() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const seeking = useRef(false);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://player.vimeo.com") return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (data.event === "pause") setPaused(true);
        if (data.event === "play") setPaused(false);
        if (data.event === "playProgress" && !seeking.current) {
          setCurrent(data.data.seconds ?? 0);
          setDuration(data.data.duration ?? 0);
        }
      } catch { /* noop */ }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  function onLoad() {
    const f = iframeRef.current;
    if (!f) return;
    send(f, "addEventListener", "pause");
    send(f, "addEventListener", "play");
    send(f, "addEventListener", "playProgress");
  }

  function togglePlay() {
    const f = iframeRef.current;
    if (!f) return;
    send(f, paused ? "play" : "pause");
    setPaused(p => !p);
  }

  function toggleMute() {
    const f = iframeRef.current;
    if (!f) return;
    send(f, "setMuted", !muted);
    setMuted(m => !m);
  }

  function onSeekChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseFloat(e.target.value);
    setCurrent(val);
    seeking.current = true;
  }

  function onSeekCommit(e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) {
    const val = parseFloat((e.target as HTMLInputElement).value);
    const f = iframeRef.current;
    if (f) send(f, "seekTo", val);
    seeking.current = false;
  }

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <section className="bg-navy pb-20 pt-4">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            ref={iframeRef}
            onLoad={onLoad}
            className="absolute inset-0 w-full h-full"
            src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&muted=1&title=0&byline=0&portrait=0&controls=0&api=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
          />

          {/* Cubre botones like/watchlater arriba derecha */}
          <div className="absolute top-0 right-0 w-16 h-14 bg-[#0a1535] pointer-events-none" />

          {/* Barra de controles */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6 bg-gradient-to-t from-black/90 to-transparent">
            {/* Barra de progreso */}
            <div className="relative w-full h-1 mb-3 group/bar">
              <div className="absolute inset-0 bg-white/20 rounded-full" />
              <div
                className="absolute left-0 top-0 h-full bg-gold rounded-full pointer-events-none"
                style={{ width: `${pct}%` }}
              />
              <input
                type="range"
                min={0}
                max={duration || 1}
                step={0.1}
                value={current}
                onChange={onSeekChange}
                onMouseUp={onSeekCommit}
                onTouchEnd={onSeekCommit}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
              />
            </div>

            {/* Controles */}
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="text-white hover:text-gold transition-colors" aria-label={paused ? "Reproducir" : "Pausar"}>
                {paused ? (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                ) : (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6zm8-14v14h4V5z" /></svg>
                )}
              </button>

              <button onClick={toggleMute} className="text-white hover:text-gold transition-colors" aria-label={muted ? "Activar sonido" : "Silenciar"}>
                {muted ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                )}
              </button>

              {duration > 0 && (
                <span className="text-white/70 text-xs ml-auto">
                  {fmt(current)} / {fmt(duration)}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
