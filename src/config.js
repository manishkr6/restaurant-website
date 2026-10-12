/**
 * ==============================================================================
 * CLIENT CONFIGURATION FILE (config.js)
 * ==============================================================================
 * This is the SINGLE MASTER CONFIGURATION file for the entire restaurant website.
 * Change values here to completely rebrand and customize for a new client.
 * 
 * Instructions:
 * 1. Update restaurant name, contacts, and address.
 * 2. Set your brand colors and font preferences.
 * 3. Add your Web3Forms access key for the contact/reservation form.
 * 4. Replace image links with client photography or high-res Unsplash photos.
 * ==============================================================================
 */

export const config = {
  // ---------------------------------------------------------------------------
  // 1. BRAND & IDENTITY (EDIT HERE)
  // ---------------------------------------------------------------------------
  restaurantName: "AURA BISTRO & LOUNGE",
  shortName: "Aura",
  tagline: "Artisanal Mediterranean & Contemporary Fine Dining",
  establishedYear: 2012,

  // Logo: text or image path (e.g., "/assets/images/logo.png")
  logo: {
    type: "text", // "text" or "image"
    text: "AURA",
    subtext: "FINE DINING & LOUNGE",
    imagePath: "/favicon.svg",
    alt: "Aura Bistro Logo",
  },

  // ---------------------------------------------------------------------------
  // 2. CONTACT & LOCATION (EDIT HERE)
  // ---------------------------------------------------------------------------
  phone: "+1 (212) 555-0198",
  phoneRaw: "+12125550198", // without spaces for tel: links
  email: "concierge@aurabistro.com",
  reservationsEmail: "reservations@aurabistro.com",

  // WhatsApp click-to-chat
  whatsappNumber: "12125550198", // format with country code, no + or spaces
  whatsappPrefilledMessage: "Hello Aura Bistro! I would like to inquire about reserving a table.",

  // Physical Address
  address: {
    street: "482 Grand Avenue",
    neighborhood: "SoHo Arts District",
    city: "New York",
    state: "NY",
    zip: "10013",
    fullAddress: "482 Grand Avenue, SoHo Arts District, New York, NY 10013",
  },

  // Google Maps Embed Iframe URL
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.771987545934!2d-74.00481232347144!3d40.72293493693898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598be0092c43%3A0xe53be041c4be8f75!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",

  // ---------------------------------------------------------------------------
  // 3. OPERATING HOURS (EDIT HERE)
  // ---------------------------------------------------------------------------
  openingHours: [
    { days: "Monday – Thursday", hours: "11:30 AM – 10:30 PM", note: "Lunch & Dinner" },
    { days: "Friday – Saturday", hours: "11:30 AM – 11:30 PM", note: "Late Night Lounge" },
    { days: "Sunday", hours: "10:30 AM – 9:30 PM", note: "Champagne Brunch & Dinner" },
  ],
  happyHour: "Monday – Friday: 4:00 PM – 6:30 PM at the Cocktail Bar",

  // ---------------------------------------------------------------------------
  // 4. SOCIAL MEDIA LINKS (EDIT HERE)
  // ---------------------------------------------------------------------------
  socialLinks: {
    instagram: "https://instagram.com/aurabistro",
    facebook: "https://facebook.com/aurabistro",
    tripadvisor: "https://tripadvisor.com",
    yelp: "https://yelp.com",
  },

  // ---------------------------------------------------------------------------
  // 5. BRAND COLORS & TYPOGRAPHY (EDIT HERE)
  // Dynamic CSS variables will automatically apply these throughout the site!
  // ---------------------------------------------------------------------------
  brandColors: {
    primary: "#D4AF37",       // Luxury Champagne Gold
    primaryHover: "#E2BF4D",  // Bright Gold Glow
    primaryMuted: "rgba(212, 175, 55, 0.15)",
    accent: "#E07A5F",        // Warm Mediterranean Terracotta
    darkBg: "#0C0F14",        // Midnight Obsidian
    darkSurface: "#141A23",   // Deep Charcoal Card
    lightBg: "#FBF9F5",       // Cream Alabaster
    lightSurface: "#FFFFFF",  // Clean White
  },

  fonts: {
    display: "'Cormorant Garamond', Georgia, serif",
    body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  },

  // ---------------------------------------------------------------------------
  // 6. HERO SECTION CONTENT (EDIT HERE)
  // ---------------------------------------------------------------------------
  hero: {
    badge: "MICHELIN GUIDE SELECTED • 2024",
    headline: "Culinary Artistry Meets Mediterranean Soul",
    subheadline: "Indulge in seasonal wood-fired delicacies, handcrafted pastas, and rare vintage cellars amidst an opulent, modern sanctuary.",
    primaryCtaText: "Reserve a Table",
    secondaryCtaText: "Explore Menu",
    backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    announcementPill: "Now accepting reservations for Summer Tasting Menu",
  },

  // ---------------------------------------------------------------------------
  // 7. KEY METRICS & STATS (EDIT HERE)
  // ---------------------------------------------------------------------------
  stats: [
    { number: 14, suffix: "+", label: "Years of Culinary Artistry" },
    { number: 48, suffix: "", label: "Artisan Menu Creations" },
    { number: 85, suffix: "k+", label: "Delighted Guests Served" },
    { number: 18, suffix: "★", label: "Distinguished Awards & Honors" },
  ],

  // ---------------------------------------------------------------------------
  // 8. "WHY CHOOSE US" VALUE PILLARS (EDIT HERE)
  // ---------------------------------------------------------------------------
  features: [
    {
      icon: "Award",
      title: "Master Culinary Team",
      description: "Led by award-winning Executive Chef Matteo Rossi, bringing over two decades of fine dining craftsmanship from Milan to New York.",
    },
    {
      icon: "Sparkles",
      title: "Artisanal & Farm-to-Table",
      description: "Organic heirloom produce harvested daily from regional organic farms, paired with wild-caught seafood and prime dry-aged cuts.",
    },
    {
      icon: "Wine",
      title: "Sommelier-Curated Cellar",
      description: "An exclusive selection of over 350 international biodynamic vintages, rare reserves, and bespoke cocktail concoctions.",
    },
    {
      icon: "HeartHandshake",
      title: "Unrivaled Hospitality",
      description: "Warm, attentive white-glove service designed to transform every celebration, anniversary, or intimate dinner into a cherished memory.",
    },
  ],

  // ---------------------------------------------------------------------------
  // 9. ABOUT & STORY SECTION (EDIT HERE)
  // ---------------------------------------------------------------------------
  about: {
    heading: "A Symphony of Taste, Passion & Heritage",
    subtitle: "OUR CULINARY PHILOSOPHY",
    paragraphs: [
      "Founded in 2012 by Executive Chef Matteo Rossi, Aura Bistro was born out of a profound reverence for the timeless culinary heritage of the Mediterranean basin, elevated by modern contemporary culinary techniques.",
      "Every recipe is an ode to balance: the smokiness of charred olive wood, the silkiness of extra-virgin olive oil from Tuscan groves, and the vibrancy of hand-picked seasonal blossoms. We believe that true luxury lies not in pretension, but in the purity and honesty of every ingredient.",
    ],
    imageMain: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    chefName: "Matteo Rossi",
    chefTitle: "Executive Chef & Founder",
    chefQuote: "Cooking is the art of translating love into flavour, and memories into culinary poetry.",
    chefSignatureImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",

    // Timeline Milestones
    milestones: [
      { year: "2012", title: "The Humble Beginning", description: "Opened our doors with a 12-table bistro in the SoHo historic district." },
      { year: "2016", title: "James Beard Recognition", description: "Nominated for Best New Restaurant and praised for our hand-rolled saffron pasta." },
      { year: "2020", title: "Cellar Expansion", description: "Inaugurated our private subterranean wine tasting vault featuring 350+ rare vintages." },
      { year: "2024", title: "Michelin Guide Selection", description: "Honored with selection in the prestigious Michelin Guide for culinary excellence." },
    ],

    // Culinary Leadership Team
    team: [
      {
        name: "Matteo Rossi",
        role: "Executive Chef & Founder",
        specialty: "Modern Mediterranean & Wood-Fired Alchemy",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Elena Rostova",
        role: "Head Pastry Chef",
        specialty: "Artisan Confections & Botanical Infusions",
        image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Julian Mercier",
        role: "Head Sommelier & Mixologist",
        specialty: "Biodynamic Terroirs & Bespoke Cocktails",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80",
      },
    ],

    // Core Values
    values: [
      {
        title: "Purity of Ingredients",
        desc: "We refuse artificial shortcuts. 100% non-GMO, organic, locally harvested produce.",
      },
      {
        title: "Artisanal Precision",
        desc: "Every pasta ribbon is rolled by hand each morning; broths simmer for 48 hours.",
      },
      {
        title: "Sustainable Stewardship",
        desc: "Zero-waste culinary kitchen philosophy with 100% compostable compost cycle.",
      },
      {
        title: "Generous Spirit",
        desc: "We treat every guest as honored family in our warm, elegant salon.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 10. CUSTOMER TESTIMONIALS (EDIT HERE)
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      name: "Sophia Montgomery",
      role: "Michelin Guide Enthusiast & Food Critic",
      quote: "Aura offers an ethereal sensory journey. The truffle tagliolini paired with their vintage Barolo was single-handedly the finest dining experience I've had in Manhattan this year.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Marcus Vance",
      role: "Private Equity Executive",
      quote: "Hosted our 10-person executive dinner in their private wine vault. The personalized tasting menu and impeccable discrete service left every guest utterly speechless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Camilla & David Thorne",
      role: "Anniversary Celebrants",
      quote: "The ambience is sheer romance. Warm golden lighting, gentle live jazz undertones, and the pistachio soufflé that melted our hearts. Unforgettable!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    },
  ],

  // ---------------------------------------------------------------------------
  // 11. WEB3FORMS ACCESS KEY (EDIT HERE)
  // Get your free key at https://web3forms.com
  // Form submissions will be securely delivered directly to client email!
  // ---------------------------------------------------------------------------
  web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // e.g. "e7655866-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

  // ---------------------------------------------------------------------------
  // 12. SEO & METADATA (EDIT HERE)
  // ---------------------------------------------------------------------------
  seo: {
    siteTitle: "Aura Bistro & Lounge | Artisanal Fine Dining & Mediterranean Cuisine",
    metaDescription: "Experience award-winning Mediterranean fine dining, artisan pastas, dry-aged steaks, and handcrafted mixology in SoHo, New York.",
    keywords: "restaurant, fine dining, SoHo, New York, Mediterranean, reservation, wine bar, steakhouse",
    cuisine: "Mediterranean Contemporary",
    priceRange: "$$$$",
    menuPdfUrl: "#", // Link to client's downloadable menu PDF
  },
};
