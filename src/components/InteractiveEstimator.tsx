import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ScopeAddon {
  id: string;
  name: string;
  cost: number;
  description: string;
}

interface EstimatorProps {
  onApplyScopeToInquiry: (details: {
    platform: string;
    addons: string[];
    timeline: string;
    estimatedCost: string;
  }) => void;
}

export const InteractiveEstimator: React.FC<EstimatorProps> = ({ onApplyScopeToInquiry }) => {
  const platforms = [
    {
      id: 'custom-web',
      name: 'Custom Web Application',
      baseCost: 12000,
      weeks: 6,
      desc: 'Bespoke React 19 / TypeScript SPA with full API integration',
    },
    {
      id: 'enterprise-saas',
      name: 'Enterprise SaaS Dashboard',
      baseCost: 16000,
      weeks: 8,
      desc: 'Multi-tenant architecture, complex data grids, audit logs',
    },
    {
      id: 'headless-commerce',
      name: 'Headless E-Commerce',
      baseCost: 14000,
      weeks: 7,
      desc: 'Statically-cached product catalog, custom cart & checkout',
    },
    {
      id: 'design-perf',
      name: 'Design System & Vitals',
      baseCost: 8000,
      weeks: 4,
      desc: 'Tokenized UI component registry and Core Web Vitals refactor',
    },
  ];

  const addonsList: ScopeAddon[] = [
    {
      id: 'rbac-auth',
      name: 'Advanced RBAC & 1P OAuth',
      cost: 2500,
      description: 'Granular permissions, multi-role access control, session security',
    },
    {
      id: 'realtime-telemetry',
      name: 'Real-time WebSocket Engine',
      cost: 3500,
      description: 'Low-latency live data synchronization and streaming status',
    },
    {
      id: 'payments',
      name: 'Stripe Global Payment Gateway',
      cost: 2000,
      description: 'Recurring subscriptions, localized tax rates, invoices',
    },
    {
      id: 'cloud-infra',
      name: 'Automated CI/CD & Terraform',
      cost: 3000,
      description: 'Zero-downtime automated deployment pipelines on AWS/GCP',
    },
    {
      id: 'pwa-offline',
      name: 'Offline-First PWA Capabilities',
      cost: 1800,
      description: 'Service worker cache rules and offline document storage',
    },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['rbac-auth']);
  const [speedMultiplier, setSpeedMultiplier] = useState<'standard' | 'expedited'>('standard');

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform)!;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find((a) => a.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  const baseSum = currentPlatform.baseCost + addonsTotal;
  const finalCost = speedMultiplier === 'expedited' ? Math.round(baseSum * 1.3) : baseSum;
  const estimatedWeeks =
    speedMultiplier === 'expedited'
      ? Math.max(3, Math.round(currentPlatform.weeks * 0.65))
      : currentPlatform.weeks;

  const handleApply = () => {
    const addonNames = selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.name || id);
    onApplyScopeToInquiry({
      platform: currentPlatform.name,
      addons: addonNames,
      timeline: speedMultiplier === 'expedited' ? `${estimatedWeeks} Weeks (Expedited)` : `${estimatedWeeks} Weeks (Standard)`,
      estimatedCost: `$${finalCost.toLocaleString()}`,
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-neutral-900/40 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Engineering Scope Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
            Transparent Investment & Timeline Estimator
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-3">
            Configure your technical scope to receive an immediate realistic timeline and investment benchmark based on our production delivery metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Platform Selection */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-3">
                01. Core Architecture Scope
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((p) => {
                  const isSelected = selectedPlatform === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p.id)}
                      className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-850 border-amber-400 shadow-sm'
                          : 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white font-display">
                          {p.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-2">
                        {p.desc}
                      </p>
                      <div className="text-xs font-mono text-neutral-300">
                        Baseline: ${p.baseCost.toLocaleString()} · ~{p.weeks} wks
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-3">
                02. Specialized Technical Modules
              </div>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-neutral-850/90 border-amber-400/70'
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-neutral-950'
                              : 'border-neutral-600 bg-neutral-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">
                            {addon.name}
                          </div>
                          <div className="text-xs text-neutral-400">
                            {addon.description}
                          </div>
                        </div>
                      </div>
                      <div className="font-mono text-xs font-semibold text-neutral-300 ml-4 whitespace-nowrap">
                        +${addon.cost.toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Cadence */}
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-3">
                03. Delivery Cadence
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button
                  type="button"
                  onClick={() => setSpeedMultiplier('standard')}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                    speedMultiplier === 'standard'
                      ? 'bg-neutral-850 border-amber-400 text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <div className="text-xs font-bold font-display">Standard Cadence</div>
                  <div className="text-[11px] text-neutral-400">Standard 2-week sprints</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMultiplier('expedited')}
                  className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                    speedMultiplier === 'expedited'
                      ? 'bg-neutral-850 border-amber-400 text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <div className="text-xs font-bold font-display">Expedited Sprint (+30%)</div>
                  <div className="text-[11px] text-neutral-400">Dedicated lead pod</div>
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (Tabular Numbers & CTA) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Estimate Breakdown
                </span>
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  Transparent Pricing
                </span>
              </div>

              <div>
                <div className="text-xs text-neutral-400 mb-1">Target Platform</div>
                <div className="text-sm font-bold text-white font-display">
                  {currentPlatform.name}
                </div>
              </div>

              <div>
                <div className="text-xs text-neutral-400 mb-1">Selected Technical Modules</div>
                <div className="text-xs text-neutral-300 font-mono">
                  {selectedAddons.length > 0 ? (
                    <span>{selectedAddons.length} specialized modules included</span>
                  ) : (
                    <span>Core baseline only</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Estimated Timeline</div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">
                    ~{estimatedWeeks} wks
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Estimated Investment</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                    ${finalCost.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-400 leading-relaxed bg-neutral-950 p-3 rounded-lg border border-neutral-850">
                Includes full production source code ownership, automated CI/CD setup, WCAG AA compliance, and 30-day post-launch warranty.
              </div>

              <button
                type="button"
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
              >
                <span>Apply Scope to Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
