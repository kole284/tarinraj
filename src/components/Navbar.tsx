"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#o-nama", label: "O nama" },
  { href: "#galerija", label: "Galerija" },
  { href: "#mapa", label: "Lokacija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#vrh"
          className={`text-2xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-[#1f5c3e]" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Tarin Raj
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#52b788] ${
                  scrolled ? "text-[#1a1a1a]" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Otvori meni"
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer ${
            scrolled ? "text-[#1f5c3e]" : "text-white"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#1a1a1a] font-medium text-base hover:text-[#2d7a52] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
