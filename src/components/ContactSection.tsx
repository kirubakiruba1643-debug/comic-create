import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, Calendar } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: {
    platform: string;
    addons: string[];
    timeline: string;
    estimatedCost: string;
  } | null;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialEstimate,
  onOpenBooking,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Bespoke Web Applications & Portals',
    budget: '$10k - $25k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEstimate) {
      setFormData((prev) => ({
        ...prev,
        service: initialEstimate.platform,
        budget: initialEstimate.estimatedCost,
        message: `Estimated scope: ${initialEstimate.platform}\nIncluded modules: ${initialEstimate.addons.join(', ')}\nDelivery target: ${initialEstimate.timeline}\nEstimated benchmark: ${initialEstimate.estimatedCost}\n\nProject Overview:\n`,
      }));
    }
  }, [initialEstimate]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone.trim() && !/^[+()0-9\s-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number or leave blank.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide brief details about your project (at least 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real-world network submission feedback
    setTimeout(() => {
      const ticketId = `KD-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-neutral-950 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            Project Inquiries & Technical Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Let’s Build Something Exceptional Together
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-3">
            Whether you have a completed specification ready for sprint planning or require architectural discovery, we guarantee a detailed engineering response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-display">
                Direct Communications
              </h3>

              {/* Email Block with 1-Click Copy */}
              <div className="space-y-1">
                <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Primary Engineering Inbox</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-amber-400 transition-colors truncate"
                  >
                    {SITE_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[11px] text-emerald-400 font-mono">
                    ✓ Email address copied to clipboard
                  </div>
                )}
              </div>

              {/* Phone & Response Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Response SLA</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400">
                    {SITE_INFO.responseTime}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Operations</span>
                  </div>
                  <div className="text-xs font-semibold text-neutral-200">
                    Remote & Global Delivery
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 space-y-1">
                <div className="font-semibold text-neutral-200">Office Schedule:</div>
                <div>{SITE_INFO.officeHours}</div>
              </div>

              {/* Book instant meeting */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Book an Instant 15-Min Discovery Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
              {submittedTicket ? (
                /* Success State */
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Project Brief Received
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your technical brief has been assigned reference ticket:
                  </p>
                  <div className="inline-block px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-lg font-mono text-sm font-bold text-amber-400">
                    {submittedTicket}
                  </div>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto">
                    A senior engineer from Kiruba Digital will review your specifications and reply to <span className="text-neutral-200">{formData.email}</span> within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedTicket(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          service: 'Bespoke Web Applications & Portals',
                          budget: '$10k - $25k',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Submit Technical Brief
                    </span>
                    <span className="text-xs text-neutral-500">* Required fields</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      {errors.fullName && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Bespoke Web Applications & Portals">Bespoke Web Applications</option>
                        <option value="Enterprise SaaS Dashboard">Enterprise SaaS Dashboard</option>
                        <option value="Cloud Architecture & Microservices">Cloud Architecture & DevOps</option>
                        <option value="Product-Led UI/UX & Design Systems">UI/UX Systems & Design Tokens</option>
                        <option value="Web Vitals & Technical SEO Optimization">Core Web Vitals & SEO</option>
                        <option value="2-Week Architecture & Performance Audit">2-Week Architecture Audit</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Estimated Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['<$10k', '$10k - $25k', '$25k - $50k', '$50k+'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 text-xs font-mono rounded-lg border transition-colors cursor-pointer text-center ${
                            formData.budget === tier
                              ? 'bg-neutral-800 border-amber-400 text-amber-400 font-semibold'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Project Goals & Context *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the project goals, current challenges, target launch timeline, or key technical requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 text-xs bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-neutral-800 focus:border-amber-400'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 mt-1 text-[11px] text-rose-400">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 transition-colors shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating & Transmitting Brief...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Project Brief for Architecture Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
