"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Join", href: "#why-join" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Stories", href: "#stories" },
    { name: "FAQ", href: "#faq" },
    { name: "Vision", href: "#vision" },
  ];

  return (
    <nav className="absolute top-4  z-50 w-full bg-transparent py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#000"
                  strokeWidth="1.5"
                />
                <path d="M12 6v12M8 10h8" stroke="#000" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="text-white">
              <div className="text-xs font-light tracking-wider">
                THE GLOBAL
              </div>
              <div className="text-sm font-semibold tracking-wide">
                CHURCH SUPPORT
              </div>
              <div className="text-sm font-semibold tracking-wide">
                ALLIANCE
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-yellow-400 transition-colors duration-200 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
