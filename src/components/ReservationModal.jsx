import React, { useState } from "react";
import { config } from "../config";
import confetti from "canvas-confetti";
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Sparkles
} from "lucide-react";

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    seating: "Main Dining Salon",
    requests: "",
    botcheck: "", // Honeypot field
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.botcheck) {
      console.warn("Spam bot detected via honeypot.");
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Phone, and Date).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Check if access key is configured
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
            subject: `New Table Reservation Request from ${formData.name}`,
            from_name: `${config.restaurantName} Reservations`,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            date: formData.date,
            time: formData.time,
            guests: formData.guests,
            seating: formData.seating,
            special_requests: formData.requests,
          }),
        });

        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to submit reservation.");
        }
      } else {
        // Simulated instant success for demo preview
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D4AF37", "#FDF0CD", "#E07A5F", "#ffffff"],
        });
      } catch {
        // ignore confetti errors
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "An error occurred while transmitting your reservation. Please call our concierge directly."
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
      requests: "",
      botcheck: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-2xl glass-panel border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.3)]">
              <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Reservation Confirmed!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#D4AF37] font-semibold">{formData.name}</span>. We have reserved your table for{" "}
              <span className="text-white font-medium">{formData.guests} guests</span> on{" "}
              <span className="text-white font-medium">{formData.date}</span> at{" "}
              <span className="text-white font-medium">{formData.time}</span>. A confirmation notification has been sent.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="gold-gradient-btn text-black font-semibold px-8 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Dining Concierge</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Reserve Your Experience
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Join us for an unforgettable Michelin-inspired culinary journey.
              </p>
            </div>

            {status === "error" && (
              <div className="mb-4 p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (hidden from real users) */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Lady Genevieve"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="guest@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:00">1:00 PM (Lunch)</option>
                      <option value="17:30">5:30 PM (Early Dinner)</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM (Prime)</option>
                      <option value="20:00">8:00 PM (Prime)</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:15">9:15 PM (Late)</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ (Private Event)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Seating Preference
                </label>
                <select
                  name="seating"
                  value={formData.seating}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="Main Dining Salon">Main Dining Salon (Romantic Velvet Banquettes)</option>
                  <option value="Chef's Counter">Chef's Open Counter (Interactive Tasting View)</option>
                  <option value="Subterranean Wine Vault">Subterranean Wine Vault (Private Reserve)</option>
                  <option value="Twilight Courtyard">Twilight Courtyard (Alfresco)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Dietary Restrictions & Special Occasions
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <textarea
                    name="requests"
                    rows="2"
                    placeholder="e.g. Anniversary dinner, gluten allergy, quiet table..."
                    value={formData.requests}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900/80 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full gold-gradient-btn text-black font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Reservation...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Table Reservation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
