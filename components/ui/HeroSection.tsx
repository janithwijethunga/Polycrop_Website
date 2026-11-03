'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface SlideItem {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
  statValue: string;
  statLabel: string;
}

const slides: SlideItem[] = [
  {
    id: 'robotics',
    tag: 'Autonomous Robotics',
    title: '4WD Row Navigation & Vertical Gantry',
    caption: 'Closed-loop IR differential tracking (±1 cm deviation) with motorized vertical canopy gantry.',
    image: '/images/hero/robot-polytunnel.jpg',
    statValue: '100%',
    statLabel: 'Plant Stop Accuracy'
  },
  {
    id: 'pathology',
    tag: 'Foliar Pathology AI',
    title: 'Hybrid YOLOv8 + Mask R-CNN',
    caption: 'Disease isolation & foliar severity indexing for targeted Mancozeb/Hexaconazole spraying.',
    image: '/images/hero/leaf-inspection.jpg',
    statValue: '80%',
    statLabel: 'Chemical Reduction'
  },
  {
    id: 'sizing',
    tag: 'Phenology & Yield',
    title: 'Fruit Depth Fusion & Ripeness',
    caption: 'Ultrasonic depth combined with pixel bounding boxes for non-destructive salad cucumber sizing.',
    image: '/images/subsystems/fruit-sizing-ultrasonic.jpg',
    statValue: '0.9697',
    statLabel: 'Detection mAP@0.5'
  },
  {
    id: 'fertigation',
    tag: 'Telemetry & Fertigation',
    title: 'Automated 3-Tub NPK Mixer',
    caption: 'Stage-driven nutrient dosing triggered by YOLOv8 flower detection and real-time root sensing.',
    image: '/images/hero/fertigation-system.jpg',
    statValue: 'LoRa RF',
    statLabel: 'Long-Range Link'
  }
];

export const HeroSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = slides[activeIdx];

  return (
    <section 
      className="relative bg-white border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[720px] items-stretch">
          
          {/* Left Column: Clean Editorial Hero Copy */}
          <div className="lg:col-span-6 py-12 lg:py-20 flex flex-col justify-between pr-0 lg:pr-10 z-10">
            <div className="space-y-6">
              {/* Institution / Academic Tag */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-900 tracking-wide">
                  SLIIT Special Honors Research 2026
                </span>
                <span className="text-emerald-400">|</span>
                <span className="text-xs font-mono text-emerald-700">Protected Ag</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Robotics, Deep Learning & Precision Fertigation for Polytunnels.
              </h1>

              {/* Research Synopsis */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Polycrop is an integrated smart greenhouse platform that eliminates blanket spraying, 
                diagnoses vertical foliar canopies using hybrid computer vision, and automates 
                stage-based nutrient delivery for Sri Lankan cucumber cultivation.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/subsystems"
                  className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow"
                >
                  Explore 4 Subsystems
                </Link>
                <Link
                  href="/results"
                  className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors"
                >
                  Field Validation Data
                </Link>
                <Link
                  href="/docs/polycrop-final-thesis.pdf"
                  target="_blank"
                  className="px-3 py-3 text-xs font-semibold text-slate-500 hover:text-emerald-800 transition-colors flex items-center space-x-1"
                >
                  <span>Thesis PDF</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Bottom Interactive Slide Switcher (Tab pills) */}
            <div className="pt-10 lg:pt-0">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                Subsystem Showcase
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`text-left p-2.5 rounded-lg border text-xs transition-all ${
                      idx === activeIdx
                        ? 'bg-emerald-50/70 border-emerald-400 text-emerald-950 font-semibold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                    }`}
                  >
                    <span className="block font-mono text-[10px] text-slate-400">0{idx + 1}</span>
                    <span className="truncate block mt-0.5">{s.tag}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Framed Viewport Slideshow */}
          <div className="lg:col-span-6 relative my-auto py-6 lg:py-10">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
              
              {/* Image Stack */}
              {slides.map((slide, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={idx === 0}
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 600px"
                    />
                    {/* Dark gradient base for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  </div>
                );
              })}

              {/* Floating Top Metric Pill */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-white/60 px-3.5 py-1.5 rounded-xl shadow-sm flex items-center space-x-2">
                <span className="text-base font-extrabold text-emerald-800 font-mono">
                  {current.statValue}
                </span>
                <span className="text-[11px] font-medium text-slate-600 border-l border-slate-200 pl-2">
                  {current.statLabel}
                </span>
              </div>

              {/* Slideshow Arrow Navigation */}
              <div className="absolute top-4 right-4 z-20 flex space-x-1.5">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs transition-colors"
                  aria-label="Previous slide"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev + 1) % slides.length)}
                  className="w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center text-xs transition-colors"
                  aria-label="Next slide"
                >
                  &#8594;
                </button>
              </div>

              {/* Bottom Information Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 font-semibold">
                  {current.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 font-normal leading-relaxed">
                  {current.caption}
                </p>

                {/* Progress Indicators */}
                <div className="pt-2 flex space-x-1.5">
                  {slides.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        dotIdx === activeIdx ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};