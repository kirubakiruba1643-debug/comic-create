import React, { useState } from 'react';
import { Cpu, Layers, Server, Sparkles, Check, ArrowRight } from 'lucide-react';
import { TIMELINE_MILESTONES, SITE_INFO } from '../data/siteData';

interface AboutOverviewProps {
  onOpenBooking: () => void;
}

export const AboutOverview: React.FC<AboutOverviewProps> = ({ onOpenBooking }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_MILESTONES.length - 1);

  const pillars = [
    {
      index: '01',
      icon: Cpu,
      title: 'Zero-Latency Engineering',
      description:
        'We design software around real-world network and device constraints. Leveraging React 19 concurrent features, streaming SSR, and edge compute, we eliminate layout shifts and main-thread stutters.',
      points: [
        'Sub-100ms user interaction response times',
        'Strict bundle splitting and tree-shaking budgets',
        'End-to-end typed contracts across client and server',
      ],
    },
    {
      index: '02',
      icon: Layers,
      title: 'Product-Led Ergonomics',
      description:
        'Software must feel effortless. We build modular, atomic design systems that align engineering with product strategy, guaranteeing accessible WCAG AA compliance across desktop and touchscreens.',
      points: [
        'Flawless responsive layouts down to 320px screens',
        'Accessible semantic markup and keyboard navigation',
        'Consistent design tokens and reusable component libraries',
      ],
    },
    {
      index: '03',
      icon: Server,
      title: 'Resilient Cloud Systems',
      description:
        'From high-throughput event processing to serverless edge functions, our cloud architectures are hardened against unexpected traffic surges and designed for predictable, transparent operation costs.',
      points: [
        'Automated CI/CD pipelines with zero-downtime rollouts',
        'Containerized microservices and automated scaling',
        'Defensive security, automated backups, and disaster recovery',
      ],
    },
  ];

  return (
    <section id="overview" className="py-20 lg:py-28 bg-neutral-900/60 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            Company Overview & Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display [text-wrap:balance]">
            Bridging Architectural Rigor and Exceptional User Experience
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {SITE_INFO.brandName} is a specialized digital engineering consultancy. We eliminate the friction between complex backend infrastructure and polished customer-facing applications, enabling product teams to scale without technical debt.
          </p>
        </div>

        {/* 3 Pillars Grid with Asymmetric Presence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="p-6 sm:p-8 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-semibold tracking-wider">
                      {pillar.index}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800/80 space-y-2.5">
                  {pillar.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Showcase & Strategic Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-neutral-950 p-8 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Our Collaboration Process
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Transparent, Sprint-Based Delivery with Continuous Previews
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We do not disappear into a black box for months. From Day One, clients receive access to an interactive staging sandbox where every feature, animation, and database migration is deployed continuously for direct review.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Bi-weekly sprint planning and recorded video walkthroughs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Direct Slack / Discord channels with senior lead engineers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>100% intellectual property transfer and documentation handover</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                <span>Discuss Your Technical Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <img
                src="/src/assets/images/engineering_collaboration_1790751082438.jpg"
                alt="Kiruba Digital engineering and design team collaboration"
                className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Product Discovery & Prototyping Lab</span>
                <span className="font-mono text-amber-400">Collaborative Sprint Cadence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Evolution Timeline */}
        <div className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
              Engineering Evolution
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              From Collective Roots to Global Delivery
            </h3>
          </div>

          {/* Interactive Milestone Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1.5 bg-neutral-950 rounded-xl border border-neutral-800 mb-8 max-w-3xl mx-auto">
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={m.year}
                  type="button"
                  onClick={() => setSelectedMilestone(idx)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-mono font-medium transition-all flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-800 text-amber-400 shadow-sm border border-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span className="font-bold text-sm">{m.year}</span>
                  <span className="text-[11px] truncate max-w-[120px]">{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Milestone Display Card */}
          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center">
            <div className="inline-block font-mono text-xs font-bold text-amber-400 mb-1">
              {TIMELINE_MILESTONES[selectedMilestone].year}
            </div>
            <h4 className="text-lg font-bold text-white mb-2 font-display">
              {TIMELINE_MILESTONES[selectedMilestone].title}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {TIMELINE_MILESTONES[selectedMilestone].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
