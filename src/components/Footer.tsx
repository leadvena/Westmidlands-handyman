import React from "react";
import { Phone, Mail, MapPin, Hammer, ExternalLink, Calendar, MessageSquare } from "lucide-react";
import { BUSINESS_INFO, OPENING_HOURS } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#091524] text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Top Footer Section: Contact Info / Hours / Map Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Col 1: Business Overview */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-[#FF7A20] p-1 rounded text-white">
              <Hammer className="w-4 h-4" />
            </div>
            <span className="font-extrabold uppercase text-base tracking-wider">
              West Midlands <span className="text-[#FF7A20]">Handyman</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Professional, dependable handyman and home improvements servicing homeowners, landlords, and offices in Solihull, Sutton Coldfield, Birmingham, and the wider West Midlands area. Fully public liability insured. No job too small.
          </p>

          <div className="space-y-2 text-xs pt-2">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#FF7A20] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#FF7A20] font-bold text-slate-200 transition-colors">
                {BUSINESS_INFO.phone} (Phillip)
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FF7A20] shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#FF7A20] text-slate-200 transition-colors break-all">
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF7A20] shrink-0" />
              <span className="text-slate-200">West Midlands region, UK</span>
            </div>
          </div>
        </div>

        {/* Col 2: Opening Hours */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-white font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#FF7A20]" />
            Opening Hours
          </h3>
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-850/60 overflow-hidden">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="pb-2">Day</th>
                  <th className="pb-2 text-right">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 text-slate-300">
                {OPENING_HOURS.map((oh) => (
                  <tr key={oh.day} className="hover:bg-slate-900/30">
                    <td className="py-2.5 font-medium">{oh.day}</td>
                    <td className="py-2.5 text-right font-mono text-[11px]">
                      {oh.status === "closed" ? (
                        <span className="text-red-400 font-bold">Closed</span>
                      ) : oh.status === "limited" ? (
                        <span className="text-amber-400 font-bold">Appointment Only</span>
                      ) : (
                        <span>{oh.hours}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Col 3: Map Embedded coverage area */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-white font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FF7A20]" />
            Areas We Service Map
          </h3>
          
          {/* Custom optimized Google Maps coverage frame */}
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-850 shadow-inner bg-slate-950">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155359.50974577884!2d-2.1009117865243384!3d52.48301548174246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca0da233a7f80457!2sWest%20Midlands%2C%20UK!5e0!3m2!1sen!2suas!4v1700000000000!5m2!1sen!2suas" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
              allowFullScreen={false} 
              loading="lazy" 
              title="West Midlands coverage map for Handyman Phillip"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
          <span className="block text-[10px] text-slate-500 leading-normal italic text-right">
            Providing high-quality home visits across key West Midlands communities.
          </span>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="bg-slate-950/80 py-6 px-4 border-t border-slate-850 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-center sm:text-left">
          
          <div className="space-y-1">
            <p>© {currentYear} {BUSINESS_INFO.name}. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600">
              Metatags and local SEO optimized for UK Search queries. Structured data Schema matches Plumber & GeneralContractor.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-semibold">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-400 hover:text-[#FF7A20] transition-colors flex items-center gap-1">
              Call Phillip
            </a>
            <span className="text-slate-800">|</span>
            <a href="https://wa.me/447432056767" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors flex items-center gap-1">
              WhatsApp Quick Chat
            </a>
            <span className="text-slate-800">|</span>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-400 hover:text-[#FF7A20] transition-colors flex items-center gap-1">
              Email Help
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
