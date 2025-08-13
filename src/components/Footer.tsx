import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Pedro Sydenstricker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};