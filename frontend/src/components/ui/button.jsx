// src/components/ui/button.jsx
import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center font-medium rounded-2xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${className}`}
    >
      {children}
    </button>
  );
}
