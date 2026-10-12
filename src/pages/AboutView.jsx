import React from "react";
import { config } from "../config";
import { Sparkles, Award, CheckCircle2, Calendar } from "lucide-react";

export default function AboutView({ onOpenReservation }) {
  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Craft</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
          The Soul of {config.restaurantName}
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Founded in {config.establishedYear}, driven by a passion for authentic Mediterranean alchemy, uncompromised farm harvests, and warm white-glove hospitality.
        </p>
      </div>

      {/* 2. Main Narrative & Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              {config.about.heading}
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] rounded-full" />
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {config.about.paragraphs[0]}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {config.about.paragraphs[1]}
            </p>

            {/* Founder Quote Highlight */}
            <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 mt-6">
              <p className="text-sm italic text-neutral-200">
                "{config.about.chefQuote}"
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-bold text-[#D4AF37]">{config.about.chefName}</span>
                <span className="text-neutral-400">{config.about.chefTitle}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src={config.about.imageMain}
                alt="Restaurant interior"
                loading="lazy"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl glass-panel border border-[#D4AF37]/40 p-5 shadow-2xl hidden sm:block max-w-xs">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Excellence in Sourcing</div>
              <p className="text-[11px] text-neutral-300 mt-1">
                Every olive oil harvest and vintage is hand-selected directly from artisanal Mediterranean estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Milestones / Timeline */}
      <section className="py-20 bg-[#090C10] border-y border-neutral-900 mb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Journey Through Time</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
              Milestones of Distinction
            </h2>
          </div>

          <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 sm:ml-32 space-y-12">
            {config.about.milestones.map((ms, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[45px] sm:-left-[140px] top-0 flex items-center gap-3">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#D4AF37] hidden sm:block w-20 text-right">
                    {ms.year}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#141A23] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.4)]" />
                </div>

                <div className="p-6 rounded-2xl glass-card">
                  <div className="text-xs text-[#D4AF37] font-bold sm:hidden mb-1">
                    {ms.year}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {ms.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Culinary Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Artisans</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Meet Our Culinary Masters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.about.team.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-card overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <div className="text-xs text-[#D4AF37] font-semibold mt-0.5">
                    {member.role}
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-neutral-800/80">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Craft Specialty:
                </span>
                <p className="text-xs text-neutral-300 font-medium">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#D4AF37]/30">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              The Guiding Compass
            </span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Our Core Philosophical Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.about.values.map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h3 className="font-display text-base font-bold text-white">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Parallax Image Strip with Quote */}
      <section className="relative py-20 overflow-hidden border-y border-[#D4AF37]/30">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=80"
            alt="Wine barrels"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-neutral-200 italic">
            "In every pour of wine and every fold of fresh pasta lies a sacred tradition that binds people together."
          </p>
          <div className="text-xs tracking-widest uppercase text-[#D4AF37] font-semibold">
            — Matteo Rossi, Executive Chef
          </div>
          <div className="pt-4">
            <button
              onClick={onOpenReservation}
              className="gold-gradient-btn text-black font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table to Experience</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
