import React from "react";
import { ShieldCheck, Sparkles, MapPin, BadgePercent, Hammer, CheckSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function About() {
  const values = [
    {
      title: "Approachable & Reliable",
      text: "No job is too small or insignificant. If it matters to you, it gets my full care and attention."
    },
    {
      title: "Fully Insured",
      text: "Equipped with comprehensive public liability insurance so your home is always in safe, trusted hands."
    },
    {
      title: "Clean & Tidy Finish",
      text: "I take pride in clear professional workmanship, protecting your carpets, and cleaning up thoroughly after the job."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image / Trust Badge Layout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" 
                alt="Phillip Handyman tools organized" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="text-white">
                  <span className="block text-xs font-semibold text-[#FF7A20] uppercase tracking-wider">Meet Phillip</span>
                  <span className="block text-base font-extrabold">Your Local Craftsman</span>
                </div>
                <div className="bg-[#FF7A20] text-white p-2 rounded-lg text-xs font-black shadow-md">
                  Est. 2018
                </div>
              </div>
            </div>

            {/* Quick trust assurances list check */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 text-center">
                <span className="block text-xl sm:text-2xl font-black text-[#0c1e36]">100%</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Insured Coverage</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 text-center">
                <span className="block text-xl sm:text-2xl font-black text-[#0c1e36]">No Job</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Too Small</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A20] bg-[#FF7A20]/10 px-3 py-1 rounded">
                About Our Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                Professional Handyman & Home Services in the West Midlands
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                As a fully qualified and deeply experienced local tradesman based in the West Midlands, I established this handyman business with a simple mission: **to provide trustworthy, high-quality, and approachable home maintenance services**. 
              </p>
              <p>
                Unlike larger building firms, I focus specifically on the small-to-medium household fixes that you don't have the time, skills, or specialized tools to deal with. From mounting heavy TV brackets, replacing kitchen faucets, and clearing blocked gutters, to restoring damaged garden fencing and hanging bedroom doors—I can handle it.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              {values.map((v) => (
                <div key={v.title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#FF7A20] shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wide leading-none">{v.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">{v.text}</p>
                </div>
              ))}
            </div>

            {/* Service Areas Tags list */}
            <div className="bg-[#0c1e36]/5 p-5 rounded-xl border border-slate-150">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0c1e36] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A20]" />
                Primary West Midlands Coverage Areas:
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <span 
                    key={area}
                    className="bg-white border border-slate-250 py-1 px-2.5 rounded text-slate-700 font-semibold text-[11px]"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <span className="block text-[10px] text-slate-400 mt-3 italic">
                Don't see your town on the list? If you reside in the wider West Midlands area, send a quick message and we will try our best to accommodate our routes.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
