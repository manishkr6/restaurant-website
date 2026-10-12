import React, { useState } from "react";
import { config } from "../config";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMsg = encodeURIComponent(config.whatsappPrefilledMessage);
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center">
      {/* Tooltip */}
      <div
        className={`absolute left-16 bg-[#141A23] border border-[#25D366]/40 text-neutral-200 text-xs px-3.5 py-2 rounded-xl shadow-2xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <span className="font-semibold text-[#25D366]">Chat with Concierge</span>
        <div className="text-[10px] text-neutral-400">Instant reservations & questions</div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_0_24px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping [animation-duration:3s]" />
        <MessageCircle className="w-6 h-6 relative z-10 fill-white stroke-none" />
      </a>
    </div>
  );
}
