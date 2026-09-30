import React from 'react';
import { ArrowUp, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-850">
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors font-display inline-block"
            >
              {SITE_INFO.brandName}
            </a>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Bespoke full-stack web engineering, scalable cloud architectures, and conversion-focused systems for organizations that value performance and craft.
            </p>
            <div className="flex items-center gap-2 text-neutral-300 font-mono text-[11px]">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_INFO.email}</span>
            </div>
          </div>

          {/* Quick Nav Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
              Platform Sections
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview & Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities & Stack
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Scope & Cost Estimator
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Verified Case Studies
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Engineering Insights
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Certifications */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold">
              Engineering Governance
            </div>
            <div className="space-y-2 text-[11px] text-neutral-400 leading-relaxed">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>TypeScript Strict Mode & 100% Type Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WCAG 2.2 AA Accessibility Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated End-to-End Test Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Comprehensive IP & Source Code Transfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-neutral-400 text-center sm:text-left">
            © {new Date().getFullYear()} {SITE_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
