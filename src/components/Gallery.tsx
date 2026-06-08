import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { Eye, Hammer, Paintbrush, ArrowLeftRight } from "lucide-react";

export default function Gallery() {
  // Store toggled state of gallery item IDs in an array/object to support separate cards
  const [activeViews, setActiveViews] = useState<Record<string, "before" | "after">>(
    Object.fromEntries(GALLERY_ITEMS.map((item) => [item.id, "after"]))
  );

  const toggleView = (id: string, view: "before" | "after") => {
    setActiveViews((prev) => ({
      ...prev,
      [id]: view
    }));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7A20] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A20] bg-[#FF7A20]/10 px-3 py-1 rounded">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 mt-3 tracking-tight">
            Before & After Gallery
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
            See the real quality of our tradesman results. Use the toggle status buttons on any project card to view the transformation from raw challenge to polished fix.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => {
            const currentView = activeViews[item.id] || "after";
            
            return (
              <div 
                key={item.id} 
                className="bg-slate-850 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
              >
                {/* Image and overlay views */}
                <div className="relative aspect-4/3 bg-slate-950 overflow-hidden">
                  <img 
                    src={currentView === "before" ? item.beforeImg : item.afterImg} 
                    alt={`${item.title} - ${currentView}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  
                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-slate-900/90 text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow ${
                      currentView === "before" ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
                    }`}>
                      {currentView}
                    </span>
                  </div>

                  {/* Toggle button on top of the image */}
                  <div className="absolute bottom-3 right-3 flex bg-[#0c1e36]/90 p-0.5 rounded-lg border border-slate-700 shadow-lg select-none">
                    <button
                      onClick={() => toggleView(item.id, "before")}
                      className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase transition-all cursor-pointer ${
                        currentView === "before" 
                          ? "bg-slate-800 text-[#FF7A20]" 
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => toggleView(item.id, "after")}
                      className={`text-[10px] px-2.5 py-1 rounded font-bold uppercase transition-all cursor-pointer ${
                        currentView === "after" 
                          ? "bg-[#FF7A20] text-white" 
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* Card Title Content */}
                <div className="p-5 space-y-3 bg-slate-950">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-100 text-base tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-slate-500 flex items-center gap-1">
                      <ArrowLeftRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-400 leading-normal min-h-[36px]">
                    {item.description}
                  </p>

                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest pt-2 border-t border-slate-800 flex justify-between">
                    <span>West Midlands, UK</span>
                    <span className="text-[#FF7A20]">Completed</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Photo quote encouragement banner */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto rounded-xl p-6 sm:p-8 bg-slate-950 border border-slate-850 space-y-4">
          <Eye className="w-8 h-8 text-[#FF7A20] mx-auto" />
          <h3 className="text-lg sm:text-xl font-bold tracking-tight">Got a similar repair job?</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Send us a quick WhatsApp photo of your broken fence, plaster cracks, flat-pack box layout, or old leaking taps, and Phillip will send over a fast estimation.
          </p>
          <a
            href="https://wa.me/447432056767"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded shadow cursor-pointer transition-transform hover:-translate-y-0.5"
          >
            <span>Send Photo on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
