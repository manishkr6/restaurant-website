import React, { useState, useMemo } from "react";
import { config } from "../config";
import { menuCategories, menuItems } from "../menu-data";
import { 
  Search, 
  Sparkles, 
  Award, 
  Leaf, 
  Flame, 
  Download, 
  Printer, 
  Star, 
  ChevronRight,
  Filter,
  X
} from "lucide-react";

export default function MenuView({ onSelectDish, onOpenReservation }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTagFilter, setActiveTagFilter] = useState("all"); // "all" | "chefs_special" | "veg" | "spicy" | "gluten_free"

  // Filter logic
  const filteredDishes = useMemo(() => {
    return menuItems.filter((dish) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || dish.category === selectedCategory;

      // Dietary tag filter
      const matchesTag =
        activeTagFilter === "all" ||
        (dish.tags && dish.tags.includes(activeTagFilter));

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.category.toLowerCase().includes(query);

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, activeTagFilter, searchQuery]);

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Menu Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Gastronomy</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
          The Culinary Menu
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Crafted with seasonal harvests, prime coastal delicacies, and European heritage. Every plate is prepared fresh to order with precision.
        </p>

        {/* Action Buttons: Download PDF / Print */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={handlePrintMenu}
            className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] text-xs font-medium flex items-center gap-2 transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Menu</span>
          </button>
          <a
            href={config.seo.menuPdfUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (config.seo.menuPdfUrl === "#") {
                e.preventDefault();
                handlePrintMenu();
              }
            }}
            className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/60 hover:border-[#D4AF37] text-neutral-300 hover:text-[#D4AF37] text-xs font-medium flex items-center gap-2 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Sticky Filter & Search Toolbar */}
      <div className="sticky top-16 z-30 py-4 glass-panel border-y border-neutral-800 shadow-xl mb-12 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Top Bar: Search and Tag Chips */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Live Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search by dish name, truffle, pasta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Tag Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs text-neutral-400 hidden sm:inline flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3 h-3 text-[#D4AF37]" /> Filter:
              </span>

              {[
                { id: "all", label: "All" },
                { id: "chefs_special", label: "Chef's Special", icon: <Award className="w-3 h-3" /> },
                { id: "veg", label: "Vegetarian", icon: <Leaf className="w-3 h-3" /> },
                { id: "spicy", label: "Spicy", icon: <Flame className="w-3 h-3" /> },
                { id: "gluten_free", label: "Gluten-Free" },
              ].map((chip) => {
                const isActive = activeTagFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setActiveTagFilter(chip.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 focus:outline-none ${
                      isActive
                        ? "bg-[#D4AF37] text-black shadow-md font-semibold"
                        : "bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    {chip.icon && <span>{chip.icon}</span>}
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all shrink-0 focus:outline-none ${
                    isActive
                      ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900/60"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredDishes.length === 0 ? (
          <div className="text-center py-20 rounded-2xl glass-card p-8">
            <p className="text-neutral-400 text-sm">
              No dishes found matching your current filter or search term "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setActiveTagFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full gold-gradient-btn text-black text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-2xl glass-card overflow-hidden flex flex-col justify-between cursor-pointer"
                onClick={() => onSelectDish(dish)}
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Chef's Special Badge */}
                  {dish.tags?.includes("chefs_special") && (
                    <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Award className="w-3 h-3" /> Chef's Special
                    </span>
                  )}

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 font-display text-xl font-bold text-white bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4AF37]/30">
                    ${dish.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                        {dish.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{dish.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-neutral-300 mt-2 line-clamp-3 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Footer with Tags and Quick View Trigger */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {dish.tags?.includes("veg") && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-0.5">
                          <Leaf className="w-2.5 h-2.5" /> Veg
                        </span>
                      )}
                      {dish.tags?.includes("spicy") && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-500/40 text-red-300 flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> Spicy
                        </span>
                      )}
                      {dish.tags?.includes("gluten_free") && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40 text-amber-300">
                          GF
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reservation CTA Strip */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div className="p-8 rounded-3xl glass-panel border border-[#D4AF37]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-display text-2xl font-bold text-white">
              Prepared to Taste Chef's Creations?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Table reservations available today. Dietary accommodations gladly honored.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="gold-gradient-btn text-black font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shrink-0"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
    </div>
  );
}
