import React, { useState, useEffect } from "react";
import { config } from "../config";
import { menuItems } from "../menu-data";
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Quote,
  Wine,
  HeartHandshake,
  Leaf
} from "lucide-react";

export default function HomeView({ setActivePage, onOpenReservation, onSelectDish }) {
  // Testimonials carousel index
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Signature dishes (filter items flagged as featured)
  const featuredDishes = menuItems.filter((item) => item.tags?.includes("featured")).slice(0, 6);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % config.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % config.testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + config.testimonials.length) % config.testimonials.length);
  };

  const currentTestimonial = config.testimonials[activeTestimonial];

  // Feature icon mapping
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case "Award": return <Award className="w-6 h-6 text-[#D4AF37]" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case "Wine": return <Wine className="w-6 h-6 text-[#D4AF37]" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* =====================================================================
          1. FULL-SCREEN LUXURY HERO
          ===================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Parallax Blend and Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={config.hero.backgroundImage}
            alt={config.restaurantName}
            fetchPriority="high"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter brightness-75"
          />
          {/* Multi-layered luxury gradients for deep atmospheric lighting */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-[#0C0F14]/60 to-black/75" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
          {/* Michelin/Award Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0C0F14]/70 backdrop-blur-md mb-6 shadow-xl animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              {config.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-2xl">
            {config.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            {config.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto gold-gradient-btn text-black font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl focus:outline-none"
            >
              <Calendar className="w-4 h-4" />
              <span>{config.hero.primaryCtaText}</span>
            </button>

            <button
              onClick={() => {
                setActivePage("menu");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D4AF37]/50 bg-black/40 backdrop-blur-md text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2 focus:outline-none"
            >
              <span>{config.hero.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Announcement pill at base of hero */}
          <div className="mt-12 text-xs text-neutral-400 font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>{config.hero.announcementPill}</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-[10px] tracking-widest uppercase text-neutral-400">Scroll to Explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-[#D4AF37]/40 flex justify-center pt-1.5">
            <div className="w-1.5 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. OPENING HOURS & REPUTATION STRIP
          ===================================================================== */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Opening Hours</div>
              <div className="text-sm font-bold text-white mt-0.5">{config.openingHours[0].days}</div>
              <div className="text-xs text-[#D4AF37] font-medium">{config.openingHours[0].hours}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Distinction</div>
              <div className="text-sm font-bold text-white mt-0.5">Michelin Guide 2024</div>
              <div className="text-xs text-[#D4AF37] font-medium">Excellence in Gastronomy</div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Reservations</div>
              <div className="text-sm font-bold text-white mt-0.5">Available Daily</div>
              <button
                onClick={onOpenReservation}
                className="text-xs text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>Book your table online</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ABOUT STORY TEASER SECTION
          ===================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl aspect-[4/3]">
              <img
                src={config.about.imageMain}
                alt="Culinary story"
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl hidden sm:block">
              <img
                src={config.about.imageSecondary}
                alt="Bistro ambience"
                loading="lazy"
                className="w-full h-44 object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -left-4 sm:-left-6 rounded-2xl glass-panel border border-[#D4AF37]/40 p-4 shadow-xl">
              <div className="font-display text-3xl font-bold text-[#D4AF37]">
                {config.establishedYear}
              </div>
              <div className="text-[10px] tracking-widest uppercase text-neutral-300 font-semibold">
                Bespoke Heritage
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{config.about.subtitle}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
              {config.about.heading}
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {config.about.paragraphs[0]}
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              {config.about.paragraphs[1]}
            </p>

            {/* Chef Quote Card */}
            <div className="p-5 rounded-2xl glass-card border border-[#D4AF37]/25 flex items-center gap-4">
              <img
                src={config.about.chefSignatureImage}
                alt={config.about.chefName}
                className="w-14 h-14 rounded-full object-cover border border-[#D4AF37]"
              />
              <div>
                <p className="text-xs italic text-neutral-300 leading-snug">
                  "{config.about.chefQuote}"
                </p>
                <div className="text-xs font-bold text-[#D4AF37] mt-1">
                  {config.about.chefName} — <span className="text-neutral-400 font-normal">{config.about.chefTitle}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="gold-gradient-btn text-black font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Read Our Full Story & Milestones</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SIGNATURE DISHES SHOWCASE / CAROUSEL
          ===================================================================== */}
      <section className="py-24 bg-[#090C10] border-y border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Culinary Signatures</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
                Chef's Master Creations
              </h2>
            </div>

            <button
              onClick={() => {
                setActivePage("menu");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#E2BF4D] inline-flex items-center gap-2 group"
            >
              <span>Explore Complete Tasting Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-2xl glass-card overflow-hidden flex flex-col justify-between cursor-pointer"
                onClick={() => onSelectDish(dish)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Badge */}
                  {dish.tags?.includes("chefs_special") && (
                    <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Award className="w-3 h-3" /> Chef's Special
                    </span>
                  )}

                  {/* Price */}
                  <span className="absolute bottom-3 right-3 font-display text-xl font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    ${dish.price}
                  </span>
                </div>

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

                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex gap-2">
                      {dish.tags?.includes("veg") && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <Leaf className="w-3 h-3" /> Veg
                        </span>
                      )}
                      {dish.tags?.includes("gluten_free") && (
                        <span className="text-[10px] text-amber-300">
                          Gluten-Free
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Quick View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. "WHY CHOOSE US" VALUE PILLARS
          ===================================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aura Distinction</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Why Discerning Guests Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                <span>Core Guarantee 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. STATS COUNTER STRIP
          ===================================================================== */}
      <section className="py-20 bg-gradient-to-r from-[#10141D] via-[#141A24] to-[#10141D] border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-display text-4xl sm:text-6xl font-bold gold-gradient-text">
                  {stat.number}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-neutral-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CUSTOMER TESTIMONIALS SLIDER
          ===================================================================== */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Quote className="w-3.5 h-3.5" />
            <span>Guest Praise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Whispers of Acclaim
          </h2>
        </div>

        <div className="relative rounded-3xl glass-panel border border-[#D4AF37]/30 p-8 sm:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-8 left-8" />

          <div className="relative z-10 text-center space-y-6">
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="font-display text-xl sm:text-2xl md:text-3xl text-neutral-200 italic max-w-3xl mx-auto leading-relaxed">
              "{currentTestimonial.quote}"
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
              />
              <div className="text-left">
                <div className="font-display text-lg font-bold text-white">
                  {currentTestimonial.name}
                </div>
                <div className="text-xs text-[#D4AF37] font-medium">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevTestimonial}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-neutral-800 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextTestimonial}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-neutral-800 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. FINAL CALL TO ACTION BANNER
          ===================================================================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
            alt="Dining hall"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>An Evening to Remember</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Reserve Your Place at the Table
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Whether an anniversary celebration, business dinner, or an intimate romantic evening, our hospitality concierge ensures an extraordinary encounter.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="gold-gradient-btn text-black font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table Now</span>
            </button>
            <a
              href={`tel:${config.phoneRaw}`}
              className="px-8 py-4 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:text-white hover:border-[#D4AF37] text-xs uppercase tracking-widest font-semibold transition-all"
            >
              Call Concierge: {config.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
