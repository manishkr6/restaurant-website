/**
 * ==============================================================================
 * GALLERY DATA FILE (gallery-data.js)
 * ==============================================================================
 * All restaurant gallery images, categorized for filtering and lightbox.
 * Categories:
 *  - "all"
 *  - "ambience" (Dining room, terrace, bar interior)
 *  - "dishes"   (Plated culinary creations)
 *  - "drinks"   (Cocktails, wines, mixology)
 *  - "kitchen"  (Behind the scenes, chefs in action)
 * ==============================================================================
 */

export const galleryCategories = [
  { id: "all", name: "All Photographs" },
  { id: "ambience", name: "Dining & Ambience" },
  { id: "dishes", name: "Culinary Creations" },
  { id: "drinks", name: "Mixology & Cellar" },
  { id: "kitchen", name: "Chefs & Kitchen" },
];

export const galleryImages = [
  {
    id: "gal-1",
    title: "The Main Dining Salon",
    category: "ambience",
    aspect: "landscape", // "landscape" | "portrait" | "square"
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    caption: "Intimate warm illumination and bespoke velvet banquettes in our main salon.",
  },
  {
    id: "gal-2",
    title: "Hand-Rolled Truffle Tagliolini",
    category: "dishes",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80",
    caption: "Freshly extruded egg pasta draped in cultured butter and Norcia black truffles.",
  },
  {
    id: "gal-3",
    title: "Artisan Smoked Old Fashioned",
    category: "drinks",
    aspect: "square",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    caption: "Small-batch Kentucky bourbon smoked with flamed fresh rosemary and cedar.",
  },
  {
    id: "gal-4",
    title: "Executive Chef Matteo at the Pass",
    category: "kitchen",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    caption: "Chef Matteo Rossi personally plating the tasting menu course with micro herbs.",
  },
  {
    id: "gal-5",
    title: "Subterranean Wine Vault",
    category: "ambience",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    caption: "Private temperature-controlled cellar showcasing 350+ biodynamic vintages.",
  },
  {
    id: "gal-6",
    title: "Wood-Fired Fiorentina Steak",
    category: "dishes",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    caption: "32oz dry-aged porterhouse kissed by Tuscan oak flame and fresh rosemary salt.",
  },
  {
    id: "gal-7",
    title: "Pugliese Burrata & Heirloom Carpaccio",
    category: "dishes",
    aspect: "square",
    url: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    caption: "Imported burrata with sweet heirloom garden tomatoes and 25-year balsamico.",
  },
  {
    id: "gal-8",
    title: "Cocktail Bar & Lounge",
    category: "ambience",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    caption: "Backlit onyx bar with brass accents and curated craft spirits.",
  },
  {
    id: "gal-9",
    title: "Precision Plating",
    category: "kitchen",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    caption: "Sous-chef executing delicate flower garnishing during evening dinner rush.",
  },
  {
    id: "gal-10",
    title: "Golden Tiramisù Elegance",
    category: "dishes",
    aspect: "square",
    url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    caption: "Handcrafted mascarpone cream with espresso savoiardi and 24k gold leaf.",
  },
  {
    id: "gal-11",
    title: "Vintage Decanting Ritual",
    category: "drinks",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    caption: "Our sommelier gently aerating a rare 2010 Barbaresco over candlelight.",
  },
  {
    id: "gal-12",
    title: "Courtyard Terrace by Twilight",
    category: "ambience",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    caption: "Alfresco romantic dining framed by fragrant olive trees and fairy lights.",
  },
];
