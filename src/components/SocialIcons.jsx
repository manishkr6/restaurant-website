import React from "react";

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TripAdvisorIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="7" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="7" cy="12" r="1.5" />
      <circle cx="17" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="12" r="1.5" />
      <path d="M12 7c-4 0-7 2-7 5h14c0-3-3-5-7-5z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2l-2 3h4z" />
    </svg>
  );
}
