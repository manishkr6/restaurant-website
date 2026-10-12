import React from "react";
import { X, Flame, Leaf, Award, Star, Calendar } from "lucide-react";

export default function DishQuickViewModal({ dish, onClose, onOpenReservation }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="md:w-1/2 relative min-h-[260px] md:min-h-full">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          {dish.tags?.includes("chefs_special") && (
            <span className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B89222] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>Chef's Signature</span>
            </span>
          )}
        </div>

        {/* Dish Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[#D4AF37] uppercase tracking-widest font-semibold">
                {dish.category}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-semibold">{dish.rating}</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              {dish.name}
            </h3>

            <div className="text-xl font-bold text-[#D4AF37] mt-1 font-display">
              ${dish.price}
            </div>

            <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
              {dish.description}
            </p>

            {/* Tags & Calories */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-800">
              {dish.calories && (
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300">
                  {dish.calories}
                </span>
              )}
              {dish.tags?.includes("veg") && (
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                  <Leaf className="w-3 h-3" /> Vegetarian
                </span>
              )}
              {dish.tags?.includes("spicy") && (
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-red-950/60 border border-red-500/40 text-red-300 flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Spicy
                </span>
              )}
              {dish.tags?.includes("gluten_free") && (
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-amber-300 flex items-center gap-1">
                  Gluten Free
                </span>
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full gold-gradient-btn text-black font-semibold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table to Taste</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
