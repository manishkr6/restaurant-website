import React from "react";
import { config } from "../config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp,
  UtensilsCrossed,
  Sparkles
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const currentYear = new Date().getFullYear();

export default function Footer({ setActivePage, onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080A0E] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative Gold Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#D4AF37]/30 blur-sm rounded-full" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10">
                <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-widest text-[#D4AF37]">
                {config.restaurantName}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {config.tagline}. Dedicated to culinary mastery, sustainably sourced ingredients, and memorable hospitality since {config.establishedYear}.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="gold-gradient-btn text-black text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Your Table</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white font-semibold tracking-wider border-b border-neutral-800 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: "home", label: "Home Experience" },
                { id: "menu", label: "Artisan Menu" },
                { id: "about", label: "Our Story & Chefs" },
                { id: "gallery", label: "Photography & Ambience" },
                { id: "contact", label: "Reservations & Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours of Hospitality */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white font-semibold tracking-wider border-b border-neutral-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Hours of Dining</span>
            </h4>
            <div className="space-y-3 text-sm">
              {config.openingHours.map((sched, idx) => (
                <div key={idx} className="border-b border-neutral-900 pb-2">
                  <div className="font-medium text-neutral-200">{sched.days}</div>
                  <div className="text-[#D4AF37] font-semibold text-xs">{sched.hours}</div>
                  <div className="text-[11px] text-neutral-500">{sched.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-white font-semibold tracking-wider border-b border-neutral-800 pb-2">
              Location & Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>{config.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${config.phoneRaw}`} className="hover:text-white transition-colors">
                  {config.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-white transition-colors">
                  {config.email}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={config.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={config.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={config.socialLinks.tripadvisor}
                target="_blank"
                rel="noreferrer"
                aria-label="TripAdvisor"
                className="px-2.5 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors font-medium"
              >
                TripAdvisor
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} {config.restaurantName}. All rights reserved. Crafted for fine dining excellence.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}