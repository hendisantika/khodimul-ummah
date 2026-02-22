"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#layanan", label: "Layanan" },
  { href: "#destinasi", label: "Destinasi" },
  { href: "#proses", label: "Proses" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <Image
              src="/khodimul-ummah.png"
              alt="Khodimul Ummah Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <div>
              <h1
                className={`text-lg font-bold leading-tight transition-colors ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                Khodimul Ummah
              </h1>
              <p
                className={`text-[10px] tracking-widest uppercase transition-colors ${
                  scrolled ? "text-secondary" : "text-secondary-light"
                }`}
              >
                Melayani dengan Amanah
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-white/10 ${
                  scrolled
                    ? "text-gray-700 hover:bg-primary/5 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="ml-4 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary-light hover:shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden rounded-lg p-2 transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg bg-secondary px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-secondary-light"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
