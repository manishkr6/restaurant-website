import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({ images, activeIndex, onClose, onPrev, onNext }) {
  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null || !images || images.length === 0) return null;

  const currentImage = images[activeIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[75vh] flex items-center justify-center bg-black">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="w-full h-auto max-h-[75vh] object-contain select-none"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-xl">
          <h4 className="font-display text-xl text-white font-bold">
            {currentImage.title}
          </h4>
          <p className="text-xs text-neutral-400 mt-1">
            {currentImage.caption}
          </p>
          <div className="text-[11px] text-[#D4AF37] mt-1 uppercase tracking-widest font-semibold">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
