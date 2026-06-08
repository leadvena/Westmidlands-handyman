import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Clock, AlertTriangle } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../data";

interface ContactFormProps {
  initialService?: string;
  onClearInitialService?: () => void;
}

export default function ContactForm({ initialService, onClearInitialService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);

  // Auto-populate service from selections elsewhere in the page
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService
      }));
      // Smooth scroll to contact section
      const formSection = document.getElementById("contact");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [initialService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific error as they type
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    setGlobalError(null);
  };

  const validateClientSide = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please tell us your name (at least 2 characters).";
    }

    const cleanPhone = formData.phone.replace(/\s+/g, "");
    if (!formData.phone.trim() || cleanPhone.length < 9) {
      errors.phone = "Please enter a valid UK phone number so Phillip can call you.";
    }

    if (!formData.service) {
      errors.service = "Please choose a service from the list.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Please include a small description (at least 10 letters) so we know what tools to bring.";
    }

    return errors;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setGlobalError(null);
    setSuccessResponse(null);

    // Run client side validations
    const clientErrors = validateClientSide();
    if (Object.keys(clientErrors).length > 0) {
      setFormErrors(clientErrors);
      setGlobalError("Please fill out all required fields corrected.");
      return;
    }

    setLoading(true);

    try {
      // POSTing to actual Express server endpoint we configured in server.ts
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // If server returns validation feedback (400 validation error)
        if (data.errors) {
          setFormErrors(data.errors);
        }
        setGlobalError(data.message || "An error occurred on the server.");
      } else {
        // Successful booking!
        setSuccessResponse(data.message || "Thank you! Phillip will contact you shortly.");
        // Reset form
        setFormData({
          name: "",
          phone: "",
          service: "",
          message: ""
        });
        if (onClearInitialService) {
          onClearInitialService();
        }
      }
    } catch (err) {
      console.error("Transmission error:", err);
      setGlobalError("Failed to connect to the server due to network. Please make sure the server is healthy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 border-t border-slate-800 text-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF7A20] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A20] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Contact Trust assurances & direct details */}
        <div className="lg:col-span-5 space-y-8 self-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A20] bg-[#FF7A20]/10 px-3 py-1 rounded">
              Contact Handyman
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
              Get a Free Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Have a repair job? Ready to schedule standard maintenance? Complete the form, and Phillip will contact you with a transparent estimation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
              <div className="bg-[#FF7A20]/10 p-2.5 rounded-lg text-[#FF7A20] h-fit">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-medium">Direct Telephone call</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold hover:text-[#FF7A20] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
                <span className="block text-[11px] text-slate-500">Available Mon-Sat (ask for Phillip)</span>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
              <div className="bg-[#FF7A20]/10 p-2.5 rounded-lg text-[#FF7A20] h-fit">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-medium">Email Inquiries</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm sm:text-base font-bold hover:text-[#FF7A20] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
                <span className="block text-[11px] text-slate-500 font-mono">Quotes or Landlord Work Orders</span>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-850">
              <div className="bg-[#FF7A20]/10 p-2.5 rounded-lg text-[#FF7A20] h-fit">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-medium">Fast Turnaround Guarantee</span>
                <div className="text-xs sm:text-sm font-bold text-slate-200">
                  Most quotes returned within 2-4 business hours!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-4 border border-[#FF7A20]/20 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-[#FF7A20] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Fully Insured & Certified
            </h4>
            <p className="text-[11px] text-slate-400 leading-normal">
              For your peace of mind, we hold comprehensive Public Liability Insurance coverage for all carpentry, light plumbing, garden power-washing, and plaster repair visits in the UK.
            </p>
          </div>
        </div>

        {/* Right column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#0c1e36] border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold tracking-tight mb-4">Request Your Free Quotation</h3>
          
          {successResponse ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-xl space-y-4 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto animate-bounce" />
              <div className="space-y-2">
                <h4 className="font-extrabold text-white text-lg">Quotation Form Sent!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {successResponse}
                </p>
              </div>
              <p className="text-[11px] text-slate-400">
                Need immediate emergency response? Call Phillip on <a href={`tel:${BUSINESS_INFO.phone}`} className="underline font-bold text-[#FF7A20]">{BUSINESS_INFO.phone}</a>.
              </p>
              <button
                onClick={() => setSuccessResponse(null)}
                className="mt-4 bg-slate-800 hover:bg-slate-700 text-xs font-bold py-2.5 px-5 rounded cursor-pointer transition-colors"
              >
                Send Another Quote Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {globalError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{globalError}</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  placeholder="e.g. Nicola H."
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full text-sm py-2.5 px-4 rounded-lg bg-slate-900 border outline-none duration-150 ${
                    formErrors.name 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-slate-800 focus:border-[#FF7A20]"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-[11px] text-red-400 mt-1 font-semibold">{formErrors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="form-phone"
                  name="phone"
                  required
                  placeholder="e.g. 07432056767"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full text-sm py-2.5 px-4 rounded-lg bg-slate-900 border outline-none duration-150 ${
                    formErrors.phone 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-slate-800 focus:border-[#FF7A20]"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-[11px] text-red-400 mt-1 font-semibold">{formErrors.phone}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="form-service" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Handyman Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="form-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full text-sm py-2.5 px-4 rounded-lg bg-slate-900 border outline-none text-slate-200 duration-150 ${
                    formErrors.service 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-slate-800 focus:border-[#FF7A20]"
                  }`}
                >
                  <option value="">-- Choose from our list --</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Other / Custom Maintenance">Other / Custom Maintenance Repair</option>
                </select>
                {formErrors.service && (
                  <p className="text-[11px] text-red-400 mt-1 font-semibold">{formErrors.service}</p>
                )}
              </div>

              {/* Message Description */}
              <div>
                <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Describe the Job <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="e.g. Need help hanging 3 doors that stick after the carpet was laid. Solihull area."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full text-sm py-2.5 px-4 rounded-lg bg-slate-900 border outline-none duration-150 ${
                    formErrors.message 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-slate-800 focus:border-[#FF7A20]"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-red-400 mt-1 font-semibold">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-quota-button"
                disabled={loading}
                className="w-full bg-[#FF7A20] hover:bg-[#e56814] disabled:bg-slate-700 text-white font-bold uppercase tracking-wider py-4 rounded-lg shadow-lg shadow-[#FF7A20]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    <span>Sending quote request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Quote Inquiry</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
