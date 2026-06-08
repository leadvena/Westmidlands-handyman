import React from "react";
import { Hammer, CheckCircle2, ShieldAlert, BadgeInfo, CalendarDays } from "lucide-react";
import { BUSINESS_INFO } from "../data";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const highlights = [
    "No Job Too Small",
    "Fully Public Liability Insured",
    "Prompt & Trustworthy Local Service",
    "Transparent Free Estimates"
  ];

  const quickStats = [
    { label: "Phone", val: BUSINESS_INFO.phone },
    { label: "Operator", val: BUSINESS_INFO.owner },
    { label: "Pricing", val: "Competitive Rates" }
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32 bg-[#0c1e36] text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop"
          alt="Handyman Working background pattern" 
          className="w-full h-full object-cover float-right"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1e36] via-[#0c1e36]/90 to-[#0c1e36]/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Text and Core Details */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF7A20]/10 border border-[#FF7A20]/30 text-[#FF7A20] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Hammer className="w-3.5 h-3.5" />
              West Midlands Area Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-100">
              West Midlands<br/>
              <span className="text-[#FF7A20] text-6xl sm:text-7xl">Handyman</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold italic text-slate-300 mt-3 border-l-4 border-[#FF7A20] pl-3">
              "{BUSINESS_INFO.tagline}"
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Hi, I'm Phillip. I offer top-quality, professional handyman and home maintenance services across the West Midlands. Whether it's repairing storm-damaged fencing, patch plastering, mounting TVs, mounting shelving, re-siliconing baths, hanging doors, or flat-pack assembly—I'm your guy. 
          </p>

          {/* Key Bullet List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A20] shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Action Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              id="hero-get-quote-cta"
              onClick={onQuoteClick}
              className="bg-[#FF7A20] hover:bg-[#e56814] text-white font-bold uppercase tracking-wider py-4 px-8 rounded shadow-lg shadow-[#FF7A20]/20 hover:shadow-xl transition-all cursor-pointer text-center text-sm"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="border border-slate-700 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-900/70 text-slate-200 font-bold uppercase tracking-wider py-4 px-8 rounded transition-all text-center text-sm flex items-center justify-center gap-2"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        {/* Right Side: Trust Card Banner */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#10233c] to-[#0c1e36] border border-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7A20] opacity-5 rounded-bl-full z-0 pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs uppercase font-semibold text-[#FF7A20] tracking-wider block">Local Handyman Services</span>
              <p className="text-xl font-bold text-white mt-1">Book a Handyman</p>
            </div>

            <div className="space-y-4">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center text-sm py-1 border-b border-slate-800/60 pb-2">
                  <span className="text-slate-400 font-medium">{stat.label}</span>
                  <span className="text-slate-100 font-bold font-mono">{stat.val}</span>
                </div>
              ))}
            </div>

            {/* Quick trust assurances */}
            <div className="bg-[#091524] rounded-lg p-4 border border-slate-800 space-y-2">
              <span className="text-[#FF7A20] text-xs font-bold uppercase tracking-widest block">No job too small</span>
              <p className="text-xs text-slate-400 leading-normal">
                Serving home-owners, landlords, and offices with friendly, reliable workmanship. Multi-skilled in carpentry, basic plumbing, tiling, and garden tasks.
              </p>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-medium bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg">
              <CalendarDays className="w-4 h-4 shrink-0" />
              <span>Available Monday to Saturday. Fully Insured.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
