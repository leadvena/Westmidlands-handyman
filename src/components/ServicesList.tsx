import React, { useState, useMemo } from "react";
import { 
  Search, 
  Hammer, 
  Paintbrush, 
  Droplet, 
  Trees, 
  Layers, 
  ChevronRight, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function ServicesList({ onServiceSelect }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Services", icon: HelpCircle },
    { id: "carpentry-assembly", label: "Carpentry & Assembly", icon: Hammer },
    { id: "repairs-decorating", label: "Repairs & Decorating", icon: Paintbrush },
    { id: "plumbing-heating", label: "Plumbing & Bathrooms", icon: Droplet },
    { id: "outdoor-garden", label: "Outdoor & Garden", icon: Trees },
    { id: "flooring-tiling", label: "Flooring & Tiling", icon: Layers }
  ];

  // Dynamic filter lists using search queries and categories
  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A20] bg-[#FF7A20]/10 px-3 py-1 rounded">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Handyman Services We Offer
          </h2>
          <p className="text-base text-slate-600 mt-3">
            No job is too small, from assembling small designer flat packs to comprehensive timber fencing repairs. Tap any service below to request an instant free quote.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search e.g. plaster, fence, flat pack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm py-2.5 pl-10 pr-4 bg-slate-100 rounded-lg outline-none border border-slate-200 focus:border-[#FF7A20] focus:ring-1 focus:ring-[#FF7A20] transition-all"
              />
            </div>

            {/* Total count badge */}
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest shrink-0">
              Showing {filteredServices.length} of {SERVICES.length} services
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer uppercase tracking-wider transition-all border whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "bg-[#0c1e36] text-white border-[#0c1e36] shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-[#FF7A20]/30 transition-all flex flex-col justify-between group relative"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Popular
                  </span>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0c1e36]/5 p-2 rounded-lg text-[#0c1e36]">
                      {service.category === "carpentry-assembly" && <Hammer className="w-4 h-4 text-[#FF7A20]" />}
                      {service.category === "repairs-decorating" && <Paintbrush className="w-4 h-4 text-[#FF7A20]" />}
                      {service.category === "plumbing-heating" && <Droplet className="w-4 h-4 text-[#FF7A20]" />}
                      {service.category === "outdoor-garden" && <Trees className="w-4 h-4 text-[#FF7A20]" />}
                      {service.category === "flooring-tiling" && <Layers className="w-4 h-4 text-[#FF7A20]" />}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {service.category.replace("-", " & ")}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-800 tracking-tight leading-tight group-hover:text-[#0c1e36] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#FF7A20] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 fill-current text-white" />
                    Free estimate
                  </span>
                  
                  <button
                    id={`request-quote-${service.id}`}
                    onClick={() => onServiceSelect(service.name)}
                    className="text-xs font-bold text-[#0c1e36] group-hover:text-[#FF7A20] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Select Service <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 max-w-md mx-auto bg-white p-8 rounded-xl border border-slate-200">
            <p className="text-slate-600 font-medium">No direct service matches your search query yet.</p>
            <p className="text-xs text-slate-400 mt-2">
              Don't worry! Phillip specializes in custom tasks. Use the contact form below or call directly to describe what you need repaired.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-bold text-[#FF7A20] uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick Footer Offer */}
        <div className="mt-12 sm:mt-16 bg-[#0c1e36] text-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold tracking-tight">Need help with custom handyman jobs not listed here?</h4>
            <p className="text-xs text-slate-300">
              No problem! Send Phillip a WhatsApp photo or message describing the job and we will get back to you with competitive options.
            </p>
          </div>
          <button
            id="services-custom-job-cta"
            onClick={() => onServiceSelect("Other / Custom Maintenance")}
            className="bg-[#FF7A20] hover:bg-[#e56814] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded shrink-0 cursor-pointer shadow transition-all"
          >
            Inquire About Custom Task
          </button>
        </div>

      </div>
    </section>
  );
}
