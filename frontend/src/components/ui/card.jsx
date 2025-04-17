// src/components/ui/card.jsx
import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-2 ${className}`}>
      {children}
    </div>
  );
}
