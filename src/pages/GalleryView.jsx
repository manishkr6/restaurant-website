import React, { useState, useMemo } from "react";
import { galleryCategories, galleryImages } from "../gallery-data";
import { Sparkles, Maximize2 } from "lucide-react";

export default function GalleryView({ onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Odyssey</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
          Atmosphere & Artistry
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Glimpse into the candlelit ambience of our salons, delicate culinary craftsmanship, and the nocturnal buzz of our mixology bar.
        </p>
      </div>

      {/* 2. Category Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all focus:outline-none ${
                  isActive
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Masonry / Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => {
            // Find true index in master galleryImages for lightbox navigation
            const globalIndex = galleryImages.findIndex((item) => item.id === image.id);

            return (
              <div
                key={image.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer border border-[#D4AF37]/20 shadow-xl aspect-[4/3] bg-neutral-950"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">
                        {image.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mt-0.5">
                        {image.title}
                      </h3>
                      <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                        {image.caption}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shrink-0 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
