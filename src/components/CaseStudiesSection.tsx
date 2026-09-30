import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Quote, X } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/siteData';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-neutral-950 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Verified Technical Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Engineering Case Studies & Measurable Business Impact
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md">
            Real systems deployed into production environments. Verified performance metrics, user engagement gains, and architectural transformations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="p-7 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Zero-Pill Client & Industry */}
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
                  <span className="text-white font-semibold">{study.client}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{study.industry}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-amber-400 transition-colors">
                  {study.headline}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Key Metrics Grid - Tabular Figures */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-neutral-950 border border-neutral-850">
                  {study.keyMetrics.slice(0, 2).map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-400 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Attributable Testimonial Quote */}
                <div className="pt-4 border-t border-neutral-800/80 mb-6">
                  <Quote className="w-5 h-5 text-amber-400/60 mb-2" />
                  <p className="text-xs italic text-neutral-300 mb-3 leading-relaxed">
                    "{study.testimonial.quote}"
                  </p>
                  <div className="text-xs text-neutral-400">
                    <span className="font-semibold text-neutral-200">{study.testimonial.author}</span>
                    <span aria-hidden="true" className="mx-1 text-neutral-600">·</span>
                    <span>{study.testimonial.role}</span>
                  </div>
                </div>
              </div>

              {/* Deep Dive Modal Trigger */}
              <button
                type="button"
                onClick={() => setActiveModalStudy(study)}
                className="w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold text-neutral-300 bg-neutral-850 hover:bg-neutral-800 hover:text-white border border-neutral-750 transition-colors cursor-pointer"
              >
                <span>Read Full Technical Architecture</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Global Client Trust Strip */}
        <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-850 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-sm font-semibold text-white mb-1">
              Need a customized technical proposal for your platform?
            </div>
            <div className="text-xs text-neutral-400">
              We review specifications under mutual NDA and deliver an architectural roadmap within 48 hours.
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Architecture Discovery
          </button>
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
            onClick={() => setActiveModalStudy(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 z-10">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-amber-400 font-semibold">{activeModalStudy.client}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{activeModalStudy.industry}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>Deployment Year: {activeModalStudy.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {activeModalStudy.headline}
              </h3>

              {/* All Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                {activeModalStudy.keyMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-white">{m.label}</div>
                    <div className="text-[11px] text-neutral-400">{m.description}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    The Architectural Challenge
                  </h4>
                  <p>{activeModalStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Engineered Solution
                  </h4>
                  <p>{activeModalStudy.solution}</p>
                </div>
              </div>

              {/* Architecture Details */}
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                  Technical Implementation Highlights
                </h4>
                <div className="space-y-2">
                  {activeModalStudy.architectureDetails.map((detail) => (
                    <div key={detail} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-4 rounded-xl bg-neutral-850 border border-neutral-750">
                <p className="text-xs sm:text-sm italic text-neutral-200 mb-2">
                  "{activeModalStudy.testimonial.quote}"
                </p>
                <div className="text-xs text-neutral-400">
                  <span className="font-semibold text-white">
                    {activeModalStudy.testimonial.author}
                  </span>
                  <span aria-hidden="true" className="mx-1">·</span>
                  <span>{activeModalStudy.testimonial.role}</span>
                  <span aria-hidden="true" className="mx-1">·</span>
                  <span>{activeModalStudy.testimonial.company}</span>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalStudy(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  Schedule Technical Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
