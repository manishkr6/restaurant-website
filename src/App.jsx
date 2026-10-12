import React, { useState, useEffect } from "react";
import { config } from "./config";
import { galleryImages } from "./gallery-data";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import WhatsAppFloating from "./components/WhatsAppFloating";
import ReservationModal from "./components/ReservationModal";
import LightboxModal from "./components/LightboxModal";
import DishQuickViewModal from "./components/DishQuickViewModal";

// Pages
import HomeView from "./pages/HomeView";
import MenuView from "./pages/MenuView";
import AboutView from "./pages/AboutView";
import GalleryView from "./pages/GalleryView";
import ContactView from "./pages/ContactView";
import NotFoundView from "./pages/NotFoundView";

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState("home");

  // Preloader State
  const [loading, setLoading] = useState(true);

  // Modal States
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 1. Permanent Dark Theme Setup
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  // 2. Set dynamic CSS variables & SEO Title from config.js
  useEffect(() => {
    const root = document.documentElement;
    if (config.brandColors) {
      root.style.setProperty("--color-primary", config.brandColors.primary);
      root.style.setProperty("--color-primary-hover", config.brandColors.primaryHover);
      root.style.setProperty("--color-accent", config.brandColors.accent);
    }

    if (config.fonts) {
      root.style.setProperty("--font-serif", config.fonts.display);
      root.style.setProperty("--font-sans", config.fonts.body);
    }

    if (config.seo?.siteTitle) {
      document.title = config.seo.siteTitle;
    }

    // 3. Dynamic JSON-LD Restaurant Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": config.restaurantName,
      "description": config.tagline,
      "image": config.hero.backgroundImage,
      "telephone": config.phone,
      "email": config.email,
      "servesCuisine": config.seo.cuisine,
      "priceRange": config.seo.priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.address.street,
        "addressLocality": config.address.city,
        "addressRegion": config.address.state,
        "postalCode": config.address.zip,
        "addressCountry": "US",
      },
      "openingHoursSpecification": config.openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": h.days,
        "description": h.hours,
      })),
      "menu": `${window.location.origin}/#menu`,
      "acceptsReservations": "True",
    };

    let scriptTag = document.getElementById("jsonld-restaurant");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "jsonld-restaurant";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, []);

  // 4. Hash-based URL Routing Support (e.g. #menu, #about, #gallery, #contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["home", "menu", "about", "gallery", "contact"].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when activePage changes
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === "home" ? "" : pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render view corresponding to activePage
  const renderCurrentPage = () => {
    switch (activePage) {
      case "home":
        return (
          <HomeView
            setActivePage={handlePageChange}
            onOpenReservation={() => setReservationOpen(true)}
            onSelectDish={(dish) => setSelectedDish(dish)}
          />
        );
      case "menu":
        return (
          <MenuView
            onSelectDish={(dish) => setSelectedDish(dish)}
            onOpenReservation={() => setReservationOpen(true)}
          />
        );
      case "about":
        return (
          <AboutView
            onOpenReservation={() => setReservationOpen(true)}
          />
        );
      case "gallery":
        return (
          <GalleryView
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />
        );
      case "contact":
        return <ContactView />;
      default:
        return <NotFoundView setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0C0F14] text-neutral-100 flex flex-col font-body selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] transition-colors duration-300">
      {/* 1. Page Load Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 3. Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* 4. Active Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 5. Global Shared Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* 6. Utility Overlays */}
      <BackToTop />
      <WhatsAppFloating />

      {/* 7. Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* 8. Dish Quick View Modal */}
      <DishQuickViewModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* 9. Lightbox Modal */}
      <LightboxModal
        images={galleryImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : galleryImages.length - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < galleryImages.length - 1 ? prev + 1 : 0
          )
        }
      />
    </div>
  );
}
