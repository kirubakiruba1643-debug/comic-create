import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Video } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('14:00 UTC');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('New Project Architecture');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const days = [
    { label: 'Tomorrow', date: 'Oct 1, 2026' },
    { label: 'Thursday', date: 'Oct 2, 2026' },
    { label: 'Friday', date: 'Oct 3, 2026' },
    { label: 'Next Monday', date: 'Oct 6, 2026' },
  ];

  const timeSlots = [
    '10:00 UTC',
    '11:30 UTC',
    '14:00 UTC',
    '15:30 UTC',
    '17:00 UTC',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and work email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid work email.');
      return;
    }

    setError('');
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10">
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Discovery Call Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto">
              We’ve scheduled your 15-minute technical discovery session for:
            </p>
            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg inline-block font-mono text-xs text-amber-400 font-semibold">
              {selectedDay} · {selectedTime}
            </div>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              A Google Meet invitation with an architectural preparation agenda has been sent to <strong className="text-neutral-200">{email}</strong>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                <Video className="w-3.5 h-3.5" />
                <span>Direct Technical Discovery</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Schedule a 15-Minute Technical Call
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Direct consultation with our lead technical architect to discuss your requirements, constraints, and project velocity.
              </p>
            </div>

            {/* Select Day */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                Select Business Day
              </label>
              <div className="grid grid-cols-2 gap-2">
                {days.map((d) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setSelectedDay(d.label)}
                    className={`p-2.5 rounded-lg text-left border transition-colors cursor-pointer ${
                      selectedDay === d.label
                        ? 'bg-neutral-800 border-amber-400 text-white'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold font-display">{d.label}</div>
                    <div className="text-[10px] text-neutral-500 font-mono">{d.date}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time Slot */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                Select Time Slot (UTC)
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
                      selectedTime === slot
                        ? 'bg-neutral-800 border-amber-400 text-amber-400 font-semibold'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Morgan Reed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  placeholder="morgan@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Call Topic */}
            <div>
              <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                Primary Discussion Focus
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
              >
                <option value="New Project Architecture">New Web Application Architecture</option>
                <option value="Existing Codebase Audit">Existing Codebase & Performance Audit</option>
                <option value="Cloud & Database Migration">Cloud & Database Migration</option>
                <option value="Dedicated Engineering Pod">Dedicated Engineering Pod Sprints</option>
              </select>
            </div>

            {error && (
              <div className="text-xs text-rose-400 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/30">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
            >
              Confirm 15-Minute Discovery Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
