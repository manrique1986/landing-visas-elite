"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-28T23:59:59");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { value: time.d, label: "días" },
    { value: time.h, label: "horas" },
    { value: time.m, label: "min" },
    { value: time.s, label: "seg" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <span className="text-slate-400 text-sm mr-1">Cupos disponibles por:</span>
      {boxes.map(({ value, label }, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-navy-800 border border-gold/30 rounded-lg px-3 py-1.5 min-w-[48px] text-center">
            <span className="text-gold font-bold text-xl tabular-nums">{pad(value)}</span>
          </div>
          <span className="text-slate-500 text-xs mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}
