import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutOverview } from './components/AboutOverview';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ResourcesAndFAQ } from './components/ResourcesAndFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [appliedEstimate, setAppliedEstimate] = useState<{
    platform: string;
    addons: string[];
    timeline: string;
    estimatedCost: string;
  } | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyScope = (estimate: {
    platform: string;
    addons: string[];
    timeline: string;
    estimatedCost: string;
  }) => {
    setAppliedEstimate(estimate);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* About & Overview */}
        <AboutOverview onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Main Services & Capabilities */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* Interactive Scope & Cost Estimator */}
        <InteractiveEstimator onApplyScopeToInquiry={handleApplyScope} />

        {/* Quantified Case Studies & Social Proof */}
        <CaseStudiesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Technical Insights & Expandable FAQ */}
        <ResourcesAndFAQ />

        {/* Functional Contact & Inquiry Form */}
        <ContactSection
          initialService={selectedService}
          initialEstimate={appliedEstimate}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 15-Minute Discovery Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
