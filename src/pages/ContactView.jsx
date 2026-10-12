import React, { useState } from "react";
import { config } from "../config";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Users, 
  User, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  MessageCircle, 
  ExternalLink 
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    seating: "Main Dining Salon",
    message: "",
    botcheck: "", // Honeypot
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot
    if (formData.botcheck) {
      console.warn("Spam detected via honeypot.");
      return;
    }

    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setStatus("error");
      setErrorMessage("Please fill in your Name, Phone Number, and Reservation Date.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const hasValidKey =
        config.web3FormsAccessKey &&
        !config.web3FormsAccessKey.includes("YOUR_WEB3FORMS");

      if (hasValidKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: config.web3FormsAccessKey,
            subject: `New Table Booking & Inquiry from ${formData.name}`,
            from_name: `${config.restaurantName} Online Concierge`,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            seating: formData.seating,
            message: formData.message,
          }),
        });

        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to submit booking.");
        }
      } else {
        // Simulated responsive submission for preview/demo
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#FDF0CD", "#E07A5F", "#FFFFFF"],
        });
      } catch {
        // ignore confetti errors
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "Submission failed. Please call our reservation desk directly."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "19:00",
      guests: "2",
      seating: "Main Dining Salon",
      message: "",
      botcheck: "",
    });
  };

  const encodedMsg = encodeURIComponent(config.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMsg}`;

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Concierge & Reservations</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
          Reserve Your Table & Contact Us
        </h1>
        <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          We welcome reservations up to 60 days in advance. For parties exceeding 8 guests, private dining inquiries, or immediate assistance, please reach out directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* =================================================================
              LEFT COLUMN: CONTACT & RESERVATION FORM (7 cols)
              ================================================================= */}
          <div className="lg:col-span-7 rounded-3xl glass-panel border border-[#D4AF37]/30 p-8 sm:p-10 shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="font-display text-3xl font-bold text-white">
                  Reservation Received!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#D4AF37] font-semibold">{formData.name}</span>. Our concierge team has logged your booking for{" "}
                  <span className="text-white font-medium">{formData.guests} guests</span> on{" "}
                  <span className="text-white font-medium">{formData.date}</span> at{" "}
                  <span className="text-white font-medium">{formData.time}</span>. We will confirm your table shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="gold-gradient-btn text-black font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Book a Table
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill out the form below. Direct confirmation delivered instantly.
                  </p>
                </div>

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Lord Alexander Sterling"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+1 (212) 555-0100"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        name="email"
                        placeholder="guest@sanctuary.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Time *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="17:30">5:30 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:15">9:15 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Guests *
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full pl-10 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="8+">8+ (Large Party)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Preferred Seating Atmosphere
                    </label>
                    <select
                      name="seating"
                      value={formData.seating}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Main Dining Salon">Main Dining Salon (Opulent & Romantic)</option>
                      <option value="Chef's Open Counter">Chef's Open Counter (Culinary Theater)</option>
                      <option value="Subterranean Wine Vault">Subterranean Wine Vault (Private Dining)</option>
                      <option value="Twilight Courtyard">Twilight Courtyard (Alfresco Starlit)</option>
                    </select>
                  </div>

                  {/* Message & Requests */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Special Inquiries or Dietary Preferences
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Let us know if you're celebrating a milestone or have allergy restrictions..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full gold-gradient-btn text-black font-semibold py-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-2xl transition-all disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Your Reservation...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Submit Reservation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* =================================================================
              RIGHT COLUMN: RESTAURANT DETAILS, MAP, AND ACTIONS (5 cols)
              ================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Connect Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${config.phoneRaw}`}
                className="p-5 rounded-2xl glass-card border border-[#D4AF37]/30 flex flex-col items-center justify-center text-center group hover:border-[#D4AF37] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform mb-2">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white">Click to Call</span>
                <span className="text-[11px] text-[#D4AF37] font-medium mt-0.5">{config.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card border border-[#25D366]/40 flex flex-col items-center justify-center text-center group hover:border-[#25D366] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform mb-2">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white">WhatsApp Chat</span>
                <span className="text-[11px] text-[#25D366] font-medium mt-0.5">Instant Concierge</span>
              </a>
            </div>

            {/* Address & Hours Card */}
            <div className="p-8 rounded-3xl glass-panel border border-[#D4AF37]/30 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">Our Address</h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {config.address.fullAddress}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(config.address.fullAddress)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#D4AF37] hover:underline inline-flex items-center gap-1 mt-1 font-semibold"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-neutral-800 pt-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-display text-lg font-bold text-white">Dining Hours</h4>
                  {config.openingHours.map((h, i) => (
                    <div key={i} className="text-xs">
                      <div className="font-medium text-neutral-200">{h.days}</div>
                      <div className="text-[#D4AF37] font-semibold">{h.hours}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>Follow Our Culinary Journey:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={config.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-full border border-neutral-800 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={config.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="p-2 rounded-full border border-neutral-800 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Interactive Embed */}
            <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl h-64 bg-neutral-900">
              <iframe
                title="Google Maps Location"
                src={config.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) brightness(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
