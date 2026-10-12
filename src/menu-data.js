/**
 * ==============================================================================
 * MENU DATA FILE (menu-data.js)
 * ==============================================================================
 * Define all restaurant categories and dishes here.
 * Tags available:
 *  - "chefs_special" (renders gold signature badge)
 *  - "veg"           (vegetarian green leaf badge)
 *  - "spicy"         (spicy chili flame badge)
 *  - "gluten_free"   (gluten-free badge)
 *  - "featured"      (displays in Home page Signature Dishes carousel)
 * ==============================================================================
 */

export const menuCategories = [
  { id: "all", name: "All Offerings" },
  { id: "starters", name: "Antipasti & Starters" },
  { id: "pasta", name: "Handcrafted Pastas" },
  { id: "mains", name: "Wood-Fired Mains & Grills" },
  { id: "seafood", name: "Coastal Seafood" },
  { id: "desserts", name: "Dolci & Desserts" },
  { id: "cocktails", name: "Artisan Cocktails & Wines" },
];

export const menuItems = [
  // ---------------------------------------------------------------------------
  // STARTERS & ANTIPASTI
  // ---------------------------------------------------------------------------
  {
    id: "dish-1",
    name: "Truffled Burrata Pugliese",
    category: "starters",
    description: "Creamy artisanal burrata from Puglia, roasted heirloom tomato carpaccio, aged Modena balsamico glaze, and basil oil with crispy focaccia crisp.",
    price: 24,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    tags: ["veg", "chefs_special", "featured"],
    rating: 4.9,
    calories: "420 kcal",
  },
  {
    id: "dish-2",
    name: "Wagyu Beef Carpaccio",
    category: "starters",
    description: "A5 Miyazaki Wagyu tenderloin, shaved black winter truffles, caper emulsion, Parmigiano-Reggiano 36-month crumbles, and micro arugula.",
    price: 29,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free", "featured"],
    rating: 4.8,
    calories: "380 kcal",
  },
  {
    id: "dish-3",
    name: "Charred Spanish Octopus",
    category: "starters",
    description: "Smoked paprika-crusted Galician octopus, saffron potato mousseline, chorizo crumb, and citrus herb chimichurri.",
    price: 27,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free", "chefs_special"],
    rating: 4.9,
    calories: "350 kcal",
  },
  {
    id: "dish-4",
    name: "Crispy Calamari Fritti",
    category: "starters",
    description: "Wild Mediterranean baby squid tossed in semolina crumb, pickled calabrian chili peppers, and charred lemon caper aioli.",
    price: 22,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    tags: ["spicy"],
    rating: 4.7,
    calories: "460 kcal",
  },

  // ---------------------------------------------------------------------------
  // HANDCRAFTED PASTAS
  // ---------------------------------------------------------------------------
  {
    id: "dish-5",
    name: "Norcia Black Truffle Tagliolini",
    category: "pasta",
    description: "House-extruded egg tagliolini, cultured alpine butter, 30-month Parmigiano-Reggiano, and generous tableside Norcia black truffle shavings.",
    price: 38,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=800&q=80",
    tags: ["veg", "chefs_special", "featured"],
    rating: 5.0,
    calories: "590 kcal",
  },
  {
    id: "dish-6",
    name: "Slow-Braised Wild Boar Pappardelle",
    category: "pasta",
    description: "Hand-torn saffron pappardelle, 12-hour braised Tuscan wild boar ragù, juniper berries, fresh rosemary, and salted ricotta salata.",
    price: 34,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    tags: [],
    rating: 4.8,
    calories: "670 kcal",
  },
  {
    id: "dish-7",
    name: "Maine Lobster Agnolotti",
    category: "pasta",
    description: "Delicate pasta pillows filled with sweet Maine lobster and mascarpone, Meyer lemon bisque emulsion, and sevruga caviar pearls.",
    price: 42,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["chefs_special", "featured"],
    rating: 4.9,
    calories: "540 kcal",
  },
  {
    id: "dish-8",
    name: "Spicy Calabrian Rigatoni Alla Vodka",
    category: "pasta",
    description: "Bronze-cut rigatoni, fiery Calabrian chili paste, San Marzano tomato cream sauce, crispy prosciutto di Parma, and buffalo stracciatella.",
    price: 31,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
    tags: ["spicy"],
    rating: 4.8,
    calories: "610 kcal",
  },

  // ---------------------------------------------------------------------------
  // WOOD-FIRED MAINS & PRIME CUTS
  // ---------------------------------------------------------------------------
  {
    id: "dish-9",
    name: "Prime Dry-Aged Fiorentina Steak",
    category: "mains",
    description: "45-day dry-aged 32oz Prime Porterhouse for two, seared over Tuscan oak charcoal, rosemary sea salt, roasted bone marrow, and salsa verde.",
    price: 110,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free", "chefs_special", "featured"],
    rating: 5.0,
    calories: "920 kcal",
  },
  {
    id: "dish-10",
    name: "Braised Colorado Lamb Shank",
    category: "mains",
    description: "Overnight slow-braised lamb shank in Barolo wine jus, saffron Milanese risotto, and orange gremolata crunch.",
    price: 46,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free"],
    rating: 4.9,
    calories: "780 kcal",
  },
  {
    id: "dish-11",
    name: "Organic Roasted Magret Duck Breast",
    category: "mains",
    description: "Pan-roasted duck breast, spiced sour cherry reduction, caramelized baby fennel, and parsnip velvet puree.",
    price: 44,
    image: "https://images.unsplash.com/photo-1514944298352-fae065bc34f3?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free"],
    rating: 4.8,
    calories: "640 kcal",
  },

  // ---------------------------------------------------------------------------
  // COASTAL SEAFOOD
  // ---------------------------------------------------------------------------
  {
    id: "dish-12",
    name: "Wild Mediterranean Sea Bass (Branzino)",
    category: "seafood",
    description: "Whole deboned Mediterranean branzino roasted in sea salt crust, grilled vine cherry tomatoes, castelvetrano olives, and Meyer lemon herb glaze.",
    price: 48,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free", "chefs_special", "featured"],
    rating: 4.9,
    calories: "510 kcal",
  },
  {
    id: "dish-13",
    name: "Jumbo Diver Scallops",
    category: "seafood",
    description: "Pan-seared sea scallops, sweet corn emulsion, crispy pancetta lardons, and pomegranate reduction glaze.",
    price: 45,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free"],
    rating: 4.8,
    calories: "440 kcal",
  },

  // ---------------------------------------------------------------------------
  // DESSERTS & DOLCI
  // ---------------------------------------------------------------------------
  {
    id: "dish-14",
    name: "Signature Golden Tiramisù Aura",
    category: "desserts",
    description: "Espresso-soaked savoiardi biscuits, whipped Venezuelan mascarpone cream, dark cocoa dust, and edible 24k gold leaf.",
    price: 18,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    tags: ["veg", "chefs_special", "featured"],
    rating: 5.0,
    calories: "450 kcal",
  },
  {
    id: "dish-15",
    name: "Bronte Pistachio Lava Soufflé",
    category: "desserts",
    description: "Warm Sicilian pistachio molten cake, Fior di Latte gelato, crushed toasted pistachios, and raspberry coulis drizzle.",
    price: 19,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["veg"],
    rating: 4.9,
    calories: "520 kcal",
  },
  {
    id: "dish-16",
    name: "Blood Orange Olive Oil Cake",
    category: "desserts",
    description: "Tuscan extra virgin olive oil cake, candied blood orange wheels, rosemary honey syrup, and mascarpone cream.",
    price: 16,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["veg"],
    rating: 4.7,
    calories: "390 kcal",
  },

  // ---------------------------------------------------------------------------
  // SIGNATURE COCKTAILS & WINES
  // ---------------------------------------------------------------------------
  {
    id: "dish-17",
    name: "Smoked Rosemary Old Fashioned",
    category: "cocktails",
    description: "Small-batch Kentucky bourbon, house demerara syrup, Angostura & orange bitters, smoked with flamed fresh rosemary and cedar wood.",
    price: 21,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    tags: ["chefs_special"],
    rating: 4.9,
    calories: "210 kcal",
  },
  {
    id: "dish-18",
    name: "Amalfi Coast Limoncello Spritz",
    category: "cocktails",
    description: "Handcrafted Sorrento limoncello, Valdobbiadene Prosecco Superiore, sparkling mineral soda, fresh mint sprig, and lemon wheel.",
    price: 19,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["veg"],
    rating: 4.8,
    calories: "180 kcal",
  },
  {
    id: "dish-19",
    name: "Barolo DOCG 'Monfalletto' Cordero 2018",
    category: "cocktails",
    description: "Piedmont, Italy. Complex bouquet of violets, ripe dark cherries, cedar, and velvety persistent tannins. By the glass / bottle.",
    price: 28,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten_free"],
    rating: 5.0,
    calories: "160 kcal",
  },
];
