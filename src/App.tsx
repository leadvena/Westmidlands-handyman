/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { BUSINESS_INFO } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Dynamic Scroll Anchor Handler
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for fixed top navbar
      const navbarOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Listen to scrolling to automatically update active status bar items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "gallery", "about", "contact"];
      const scrollPosition = window.scrollY + 180; // trigger offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    // Give state a brief tick then scroll
    setTimeout(() => {
      handleScrollToSection("contact");
    }, 50);
  };

  // Structured Schema.org Markup for HomeAndConstructionBusiness, Plumber & GeneralContractor
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://midlands-handyman.example.org/#business",
        "name": BUSINESS_INFO.name,
        "telephone": BUSINESS_INFO.phone,
        "email": BUSINESS_INFO.email,
        "priceRange": "$$",
        "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800",
        "description": "Trustworthy and reliable local handyman services in Solihull, Sutton Coldfield, Birmingham and wider West Midlands, UK. No Job Too Small.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "West Midlands",
          "addressCountry": "GB"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "16:00"
          }
        ]
      },
      {
        "@type": "GeneralContractor",
        "@id": "https://midlands-handyman.example.org/#contractor",
        "name": BUSINESS_INFO.name,
        "telephone": BUSINESS_INFO.phone,
        "email": BUSINESS_INFO.email,
        "areaServed": BUSINESS_INFO.serviceAreas
      },
      {
        "@type": "Plumber",
        "@id": "https://midlands-handyman.example.org/#plumber",
        "name": `${BUSINESS_INFO.name} - Plumbing Repairs`,
        "telephone": BUSINESS_INFO.phone
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      
      {/* Schema LD+JSON injection */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} 
      />

      {/* Top Header navbar with custom section click tracking */}
      <Header activeSection={activeSection} onNavigate={handleScrollToSection} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onQuoteClick={() => handleScrollToSection("contact")} />

        {/* Dynamic 20+ Services Finder */}
        <ServicesList onServiceSelect={handleSelectService} />

        {/* Before and After Interactive Gallery */}
        <Gallery />

        {/* Verified Reviews Section (Nicola H, door-rehang, and more) */}
        <Reviews />

        {/* Trustworthy About section describing Phillip's service coverage */}
        <About />

        {/* Server-validated Contact & Quote Request Form */}
        <ContactForm 
          initialService={selectedService} 
          onClearInitialService={() => setSelectedService(undefined)} 
        />
      </main>

      {/* Quick Info footer & Maps */}
      <Footer />

      {/* Floating Call & WhatsApp Chat action triggers */}
      <WhatsAppButton />

    </div>
  );
}
