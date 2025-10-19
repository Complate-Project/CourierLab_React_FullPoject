import React, { useEffect, useRef, useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ReviewSection = () => {
  const reviews = [
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        "I've been using QuickDeliver for all my deliveries. Same-day service and professional riders make it my first choice.",
    },
    {
      id: 3,
      name: 'Ayesha Rahman',
      role: 'Office Manager',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      rating: 4,
      comment:
        'Perfect for our corporate deliveries. The dedicated support and smooth coordination make it hassle-free every day.',
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Small Business Owner',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        'Competitive pricing and on-time service! My customers always receive updates and their packages safely.',
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Entrepreneur',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        'Absolutely love QuickDeliver! Easy to use, efficient, and trustworthy. Highly recommended.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        "I've been using QuickDeliver for all my deliveries. Same-day service and professional riders make it my first choice.",
    },
    {
      id: 3,
      name: 'Ayesha Rahman',
      role: 'Office Manager',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      rating: 4,
      comment:
        'Perfect for our corporate deliveries. The dedicated support and smooth coordination make it hassle-free every day.',
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Small Business Owner',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        'Competitive pricing and on-time service! My customers always receive updates and their packages safely.',
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Entrepreneur',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment:
        'Absolutely love QuickDeliver! Easy to use, efficient, and trustworthy. Highly recommended.',
    },
  ];

  // state & refs
  const trackRef = useRef(null); // inner flex track
  const containerRef = useRef(null); // viewport (overflow-hidden)
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0); // pixel step per card (card width + gap)
  const AUTO_MS = 2000; // auto play every 2 seconds
  const GAP_PX = 24; // Tailwind space-x-6 equals 1.5rem = 24px (used in code)

  // compute card width + gap
  useEffect(() => {
    const computeStep = () => {
      const track = trackRef.current;
      if (!track) return;
      const firstCard = track.querySelector('.review-card');
      if (!firstCard) return;
      const rect = firstCard.getBoundingClientRect();
      const step = Math.round(rect.width + GAP_PX);
      setCardStep(step);
    };

    computeStep();
    window.addEventListener('resize', computeStep);
    return () => window.removeEventListener('resize', computeStep);
  }, []);

  // clamp index to 0..reviews.length-1 (wrap-around)
  const wrapIndex = i => {
    const len = reviews.length;
    if (i < 0) return len - 1;
    if (i >= len) return 0;
    return i;
  };

  // next / prev handlers
  const goNext = () => setIndex(prev => wrapIndex(prev + 1));
  const goPrev = () => setIndex(prev => wrapIndex(prev - 1));

  // auto-play interval (2s)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => wrapIndex(prev + 1));
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  // apply transform to track based on index & cardStep
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // translateX should move track to left by index * step
    // but we want to keep it within bounds. We'll use modulo total width to loop visually.
    const step = cardStep || 0;
    const translateX = -(index * step);
    track.style.transform = `translateX(${translateX}px)`;
  }, [index, cardStep]);

  // helper to render stars
  const renderStars = rating =>
    Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
        </div>

        {/* viewport */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ paddingBottom: 4 }} // small bottom padding to avoid cropping shadow
        >
          {/* track */}
          <div
            ref={trackRef}
            className="flex items-stretch space-x-6 transition-transform duration-700 ease-in-out will-change-transform"
            style={{
              // initial transform - will be updated in effect
              transform: 'translateX(0px)',
            }}
          >
            {/* render all cards normally, but we append the reviews again to allow nicer wrap-around visual when fast */}
            {[...reviews, ...reviews].map((r, idx) => {
              // use class .review-card for measurement
              return (
                <div
                  key={idx}
                  className="review-card flex-shrink-0 w-72 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-16 h-16 rounded-full mb-3 object-cover"
                    />
                    <div className="flex justify-center mb-2">
                      {renderStars(r.rating)}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-3 line-clamp-3">
                      “{r.comment}”
                    </p>
                    <h4 className="text-base font-semibold text-gray-900">
                      {r.name}
                    </h4>
                    <p className="text-blue-600 text-xs">{r.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Nav buttons */}
          <div className="flex items-center gap-2 justify-end mt-2">
            <button
              aria-label="previous"
              onClick={goPrev}
              className="w-9 h-9 rounded-full bg-white shadow hover:shadow-md flex items-center justify-center transition"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              aria-label="next"
              onClick={goNext}
              className="w-9 h-9 rounded-full bg-white shadow hover:shadow-md flex items-center justify-center transition"
            >
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* custom CSS to hide scrollbar for cross-browser */}
        <style>{`
          /* hide scrollbar (Webkit) */
          .overflow-hidden .review-card::-webkit-scrollbar { display: none; }
          /* hide for the slider container */
          .overflow-hidden > div::-webkit-scrollbar { display: none; }
          /* hide scrollbar (Firefox) */
          .overflow-hidden > div { scrollbar-width: none; -ms-overflow-style: none; }
          /* ensure track doesn't wrap lines */
          .review-card { backface-visibility: hidden; }
        `}</style>
      </div>
    </section>
  );
};

export default ReviewSection;
