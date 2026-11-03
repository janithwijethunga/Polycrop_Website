'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface HeroSlide {
  src: string;
  alt: string;
  badge: string;
  caption: string;
}

const slides: HeroSlide[] = [
  {
    src: '/images/hero/robot-polytunnel.jpg',
    alt: 'Polycrop 4WD robot navigating polytunnel row',
    badge: 'Autonomous Robotics',
    caption: 'Closed-loop line navigation and vertical gantry profile scanning',
  },
  {
    src: '/images/hero/electronics-bay.jpg',
    alt: 'Internal electronics and dual motor drivers',
    badge: 'Embedded Control',
    caption: 'ESP32 control architecture with isolated buck converters',
  },
  {
    src: '/images/hero/leaf-inspection.jpg',
    alt: 'AI leaf disease diagnosis and segmentation',
    badge: 'Computer Vision',
    caption: 'Hybrid YOLOv8 + Mask R-CNN foliar severity segmentation',
  },
  {
    src: '/images/hero/fertigation-system.jpg',
    alt: 'Automated 3-tub NPK dosing mixer',
    badge: 'Precision Fertigation',
    caption: 'Load-cell measured 3-tub nutrient blending & LoRa telemetry',
  },
];

interface HeroSlideshowProps {
  children?: React.ReactNode;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full h-[calc(100vh-4rem)] min-h-[640px] max-h-[920px] overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center scale-105 transition-transform duration-[6000ms] ease-out"
              sizes="100vw"
            />
            {/* Vignette Gradients for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/30" />
          </div>
        );
      })}

      {/* Floating Foreground Content (Hero Text / Action Card) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {children}
      </div>

      {/* Bottom Information Bar & Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Active Slide Caption */}
          <div className="hidden sm:flex items-center space-x-3 text-white">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600/90 border border-emerald-400/30 backdrop-blur-sm">
              {slides[currentIndex].badge}
            </span>
            <p className="text-xs text-slate-200 drop-shadow-sm font-light">
              {slides[currentIndex].caption}
            </p>
          </div>

          {/* Indicators + Arrow Buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex space-x-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
              {slides.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex
                      ? 'w-6 bg-emerald-400'
                      : 'w-1.5 bg-white/40 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};