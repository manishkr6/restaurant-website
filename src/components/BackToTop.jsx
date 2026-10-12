import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#141A23] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
