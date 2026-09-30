import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SITE_INFO, CORE_STATS } from '../data/siteData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Zero-Pill Quiet Lead-in */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-4">
              <span>Full-Stack Engineering</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Cloud Architecture</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Web Vitals 100</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-display [text-wrap:balance]">
              Engineering Modern Digital Products with Relentless Craft
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              {SITE_INFO.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-lg hover:shadow-amber-500/20 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#case-studies"
                className="px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 rounded-md transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Client Case Studies</span>
              </a>
            </div>

            {/* Quality and Security Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 pt-6 border-t border-neutral-850">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>React 19 & TypeScript Strict Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise Security & Data Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sub-Second Core Web Vitals Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Scrim & Zero-Broken-Image Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_studio_workspace_1790751069080.jpg"
                alt="Kiruba Digital modern engineering studio workspace"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent pointer-events-none" />

              {/* In-Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                      Production Ready
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Bespoke Cloud & Web Systems
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400">Response SLA</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">
                      {SITE_INFO.responseTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Stats Row with Tabular Numbers */}
        <div className="mt-16 pt-12 border-t border-neutral-850 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CORE_STATS.map((stat) => (
            <div key={stat.label} className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-850">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-amber-400/90 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
