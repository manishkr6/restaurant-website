import React, { useState, useEffect } from "react";
import { config } from "../config";
import { UtensilsCrossed } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0F14] transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing ring */}
        <div className="relative w-24 h-24 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center animate-spin [animation-duration:6s]">
          <div className="absolute inset-0 rounded-full border-t-2 border-[#D4AF37] animate-spin [animation-duration:2s]" />
        </div>

        {/* Center emblem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#141A23] border border-[#D4AF37]/60 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-display text-2xl font-bold tracking-[0.25em] text-[#D4AF37]">
            {config.logo.text}
          </h2>
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 mt-1">
            {config.logo.subtext}
          </p>
        </div>
      </div>
    </div>
  );
}
