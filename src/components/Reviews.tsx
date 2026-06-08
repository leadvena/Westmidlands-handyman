import React from "react";
import { Star, MessageSquareQuote, Quote, ShieldCheck } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A20] bg-[#FF7A20]/10 px-3 py-1 rounded">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-930 tracking-tight mt-3">
            What Our Customers Say
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Read real, verified reviews from homeowners, landlords, and tenants in Sutton Coldfield, Solihull, and across the West Midlands.
          </p>
        </div>

        {/* Highlight Nicola H. Review prominently */}
        <div className="mb-12">
          <div className="bg-[#0c1e36] text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Absolute visual quote indicator */}
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 opacity-5 pointer-events-none">
              <Quote className="w-48 h-48" />
            </div>

            <div className="space-y-4 md:col-span-8 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-400 stroke-none" />
                ))}
                <span className="text-xs text-slate-400 font-semibold ml-2">(Verified customer)</span>
              </div>

              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-slate-200 italic">
                "{REVIEWS[0].text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF7A20] flex items-center justify-center font-black text-white text-sm">
                  NH
                </div>
                <div>
                  <span className="block font-bold text-slate-100">{REVIEWS[0].author}</span>
                  <span className="block text-xs text-slate-400">{REVIEWS[0].location}, West Midlands</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#091524] rounded-xl p-5 border border-slate-800 space-y-3 relative z-10 text-center sm:text-left self-stretch flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider text-[#FF7A20] font-bold">Featured Review Highlight</div>
              <h3 className="text-sm font-bold text-slate-200">Re-hang Interior Doors after carpets fitted</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Phillip resized, trimmed down, and safely re-hung three internal doors with perfect clearances.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-emerald-400 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Job Completed Successfully</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.slice(1).map((review) => {
            const initials = review.author.split(" ").map(w => w[0]).join("");
            return (
              <div 
                key={review.id} 
                className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:shadow hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-500 stroke-none" />
                    ))}
                  </div>

                  {/* Booking Review Body */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white text-xs">
                    {initials || "U"}
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 text-xs sm:text-sm">{review.author}</span>
                    <span className="block text-[10px] text-slate-500">{review.location} • Verified Helper Quote</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
