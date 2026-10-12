import React from "react";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

export default function NotFoundView({ setActivePage }) {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl glass-panel border border-[#D4AF37]/30 shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] mx-auto flex items-center justify-center">
          <UtensilsCrossed className="w-8 h-8 text-[#D4AF37]" />
        </div>
        <div className="font-display text-6xl font-bold gold-gradient-text">
          404
        </div>
        <h2 className="font-display text-2xl font-bold text-white">
          Course Not Found
        </h2>
        <p className="text-xs text-neutral-400 leading-relaxed">
          The vintage or dish you are searching for has been moved or retired from our cellar. Allow us to escort you back to the main salon.
        </p>
        <button
          onClick={() => {
            setActivePage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="gold-gradient-btn text-black font-semibold px-6 py-3 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Salon</span>
        </button>
      </div>
    </div>
  );
}
