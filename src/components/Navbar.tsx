import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['overview', 'services', 'estimator', 'case-studies', 'resources', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Scope Estimator', href: '#estimator', id: 'estimator' },
    { label: 'Insights & FAQ', href: '#resources', id: 'resources' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Sticky Navigation conforming strictly to Top Bar Contract */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-neutral-800/80 shadow-md py-3'
            : 'bg-neutral-950/60 backdrop-blur-sm border-neutral-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors font-display"
            >
              {SITE_INFO.brandName}
            </a>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`transition-colors relative py-1 hover:text-white ${
                      isActive ? 'text-amber-400 font-semibold' : 'text-neutral-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-md transition-all cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Book 15-Min Call</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between p-3 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-100 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Book 15-Minute Discovery Call</span>
              </button>

              <div className="text-xs text-neutral-400 text-center pt-2">
                Direct Contact: <span className="text-neutral-200">{SITE_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
