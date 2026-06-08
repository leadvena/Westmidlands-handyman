import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Hammer, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll class for sleek header tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "Gallery", href: "gallery" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Contact Ribbon bar on Desktop */}
      <div className="bg-[#091524] text-gray-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A20]" />
              Fully Insured Handyman Services
            </span>
            <span className="text-slate-500">|</span>
            <span>West Midlands Coverage Area</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#FF7A20] transition-colors font-medium">
              <Phone className="w-3 h-3 text-[#FF7A20]" />
              {BUSINESS_INFO.phone} (Phillip)
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#FF7A20] transition-colors">
              <Mail className="w-3 h-3 text-[#FF7A20]" />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Primary Navigation Header */}
      <nav className={`px-4 py-3 md:py-4 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0c1e36]/95 backdrop-blur-md shadow-lg border-b border-slate-800" 
          : "bg-[#0c1e36]/90 sm:bg-[#0c1e36]/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Title */}
          <button 
            id="nav-logo"
            onClick={() => handleLinkClick("home")} 
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="bg-[#FF7A20] p-1.5 rounded text-white shadow-md shadow-[#FF7A20]/20 group-hover:scale-105 transition-transform">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-bold text-white leading-tight uppercase tracking-wider">
                West Midlands
              </span>
              <span className="block text-[#FF7A20] text-xs font-semibold tracking-widest leading-none">
                HANDYMAN
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 font-medium text-gray-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    id={`nav-link-${link.href}`}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative py-1.5 text-sm uppercase tracking-wider cursor-pointer hover:text-white transition-colors block ${
                      activeSection === link.href 
                        ? "text-[#FF7A20] font-semibold" 
                        : "text-slate-300"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7A20]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              id="header-cta"
              onClick={() => handleLinkClick("contact")}
              className="bg-[#FF7A20] hover:bg-[#e56814] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Action Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              aria-label="Call Phillip"
              className="bg-slate-800 text-white p-2 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF7A20]" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1.5 rounded hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Overlay for Mobile Navigation */}
      <div className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className={`fixed right-0 top-0 h-full w-4/5 max-w-xs bg-[#0c1e36] p-6 shadow-2xl transition-transform duration-300 ease-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Hammer className="w-5 h-5 text-[#FF7A20]" />
              <span className="text-white font-bold text-sm tracking-wider uppercase">Menu</span>
            </div>
            <button 
              id="close-mobile-menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-400 p-1.5 hover:text-white hover:bg-slate-800 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links in Mobile Drawer */}
          <ul className="flex flex-col gap-4 font-semibold text-gray-200 text-sm uppercase tracking-wider mb-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  id={`mobile-nav-${link.href}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`w-full text-left py-2 px-3 rounded transition-colors ${
                    activeSection === link.href 
                      ? "text-white bg-[#FF7A20]" 
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Drawer Contact Details */}
          <div className="border-t border-slate-800 pt-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact Phillip</p>
            <div className="space-y-3">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-[#FF7A20] transition-colors">
                <Phone className="w-4 h-4 text-[#FF7A20]" />
                {BUSINESS_INFO.phone}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-[#FF7A20] transition-colors break-all">
                <Mail className="w-4 h-4 text-[#FF7A20]" />
                {BUSINESS_INFO.email}
              </a>
            </div>
            
            <button
              id="mobile-drawer-cta"
              onClick={() => handleLinkClick("contact")}
              className="w-full bg-[#FF7A20] hover:bg-[#e56814] text-white text-xs font-bold uppercase tracking-wider py-3 rounded shadow shadow-[#FF7A20]/20 text-center block"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
