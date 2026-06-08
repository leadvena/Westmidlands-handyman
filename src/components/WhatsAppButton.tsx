import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Small floating call icon for non-WhatsApp users */}
      <a 
        href={`tel:${BUSINESS_INFO.phone}`}
        className="bg-[#FF7A20] hover:bg-[#e56814] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center border border-slate-800"
        title="Call Phillip directly"
      >
        <PhoneCall className="w-5 h-5" />
      </a>

      {/* Main floating WhatsApp CTA */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba56] text-white py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 border border-slate-800 group"
        title="Chat with Phillip on WhatsApp"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 group-hover:opacity-0"></span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Chat with Phillip</span>
      </a>
    </div>
  );
}
