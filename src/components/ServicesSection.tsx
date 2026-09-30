import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, DollarSign, Layers } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/siteData';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'cloud' | 'design' | 'performance'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'web', label: 'Web Engineering' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'design', label: 'UI/UX Systems' },
    { id: 'performance', label: 'Performance & SEO' },
  ] as const;

  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-950 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              Capabilities & Specialized Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Comprehensive Engineering for Mission-Critical Products
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md">
            Fixed-scope sprints, dedicated engineering pods, and architecture audits tailored to your growth stage.
          </p>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl mb-12 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-neutral-800 text-amber-400 font-semibold shadow-sm border border-neutral-700'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-9 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Zero-Pill Unboxed Category & Timeline */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-4">
                  <span className="text-amber-400 font-semibold">{service.categoryLabel}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-neutral-500" />
                    <span>{service.typicalTimeline}</span>
                  </span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-neutral-500" />
                    <span>{service.startingRange}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-display">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs uppercase tracking-wider font-mono text-neutral-400 mb-2">
                    Primary Deliverables
                  </div>
                  {service.keyDeliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack - Unboxed Text with Separators */}
                <div className="pt-4 border-t border-neutral-800/80 mb-6">
                  <div className="text-xs uppercase tracking-wider font-mono text-neutral-400 mb-2">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-400">
                    {service.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-300">{tech}</span>
                        {idx < service.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-xs font-semibold text-neutral-200 bg-neutral-850 hover:bg-neutral-800 hover:text-amber-400 border border-neutral-750 transition-colors cursor-pointer"
                >
                  <span>Select for Project Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight Callout with Showcase Image */}
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src="/src/assets/images/product_showcase_tech_1790751093777.jpg"
              alt="Kiruba Digital high-precision analytics dashboard"
              className="w-full h-64 object-cover object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Architectural Audit Program
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Have an Existing Codebase Suffering from Latency or Technical Debt?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We conduct targeted 2-week architectural refactor audits. You receive an executive summary, bundle profile breakdown, vulnerability scan, and actionable pull requests fixing your highest-impact bottlenecks.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectServiceForInquiry('2-Week Architecture & Performance Audit')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <span>Request Codebase Health Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
