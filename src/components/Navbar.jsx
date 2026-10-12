import React, { useState, useEffect } from "react";
import { config } from "../config";
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  MapPin,
  UtensilsCrossed 
} from "lucide-react";

export default function Navbar({ activePage, setActivePage, onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact & Booking" },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-panel shadow-2xl backdrop-blur-md"
            : "py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 group-hover:scale-105 transition-all duration-300">
                <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-widest text-[#D4AF37]">
                  {config.logo.text}
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 font-sans -mt-1">
                  {config.logo.subtext}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1 text-sm font-medium tracking-wider uppercase transition-colors duration-200 focus:outline-none ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full animate-fade-in shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons: Reserve */}
            <div className="hidden md:flex items-center gap-4">
              {/* Reserve CTA */}
              <button
                onClick={onOpenReservation}
                className="gold-gradient-btn text-black font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-lg focus:outline-none"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Mobile Actions: Hamburger */}
            <div className="flex md:hidden items-center gap-2">

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="p-2 rounded-lg text-neutral-200 hover:text-[#D4AF37] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-20 right-4 left-4 bottom-6 rounded-2xl glass-panel border border-[#D4AF37]/20 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="font-display text-xl text-[#D4AF37] font-bold">
                  {config.restaurantName}
                </span>
                <span className="text-xs text-neutral-400">
                  Est. {config.establishedYear}
                </span>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left px-4 py-3 rounded-xl text-base font-medium tracking-wide uppercase transition-all duration-200 ${
                        isActive
                          ? "bg-[#D4AF37]/15 text-[#D4AF37] border-l-4 border-[#D4AF37]"
                          : "text-neutral-200 hover:bg-neutral-800/50"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-neutral-800 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full gold-gradient-btn text-black font-semibold py-3.5 rounded-xl text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-neutral-800 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-neutral-800 hover:text-white"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Find Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
