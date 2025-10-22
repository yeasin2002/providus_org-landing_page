"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/assets/logo2.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Join", href: "#why-join", id: "#why" },
    { name: "How It Works", href: "#how-it-works", id: "#how-it-works" },
    { name: "Stories", href: "#stories", id: "#stories" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Vision", href: "#vision", id: "vision" },
  ];

  return (
    <nav className="absolute top-4 w-full z-50 bg-transparent py-4">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo (Left) */}
          <div className="flex items-center">
            <div className="relative w-[111px] h-[111px]">
              <Image
                src={logo}
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-[18px] font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Right) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 ml-auto"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 pt-4 pb-6 space-y-3">
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
