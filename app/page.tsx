import React from 'react';
import Link from 'next/link';
import { systemMetrics } from '@/data/metricsData';
import { subsystemsData } from '@/data/subsystemsData';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { HeroSlideshow } from '@/components/ui/HeroSlideshow';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Full-Screen Hero Slideshow */}
      <HeroSlideshow>
        <div className="max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-100 space-y-6">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="green">SLIIT Special Honors Thesis 2026</Badge>
            <Badge variant="slate">Precision Protected Agriculture</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18]">
            Autonomous Robotics, Computer Vision, and Precision Fertigation for Polytunnels.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Polycrop is an integrated smart cucumber management ecosystem designed to eliminate blanket spraying[cite: 16],
            automate vertical canopy diagnosis[cite: 20], detect harvest-readiness[cite: 20], and dynamically adapt fertigation inside Sri Lankan greenhouses[cite: 20, 100].
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/subsystems"
              className="px-5 py-2.5 rounded-lg bg-emerald-700 text-white font-medium text-sm hover:bg-emerald-800 transition-colors shadow-sm"
            >
              Explore Subsystems
            </Link>
            <Link
              href="/results"
              className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              View Experimental Results
            </Link>
          </div>
        </div>
      </HeroSlideshow>

      {/* Field Performance Stat Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Field Validation</h2>
          <p className="text-2xl font-bold text-slate-900 mt-1">Verified Research Outcomes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemMetrics.map((metric, i) => (
            <StatCard key={i} {...metric} />
          ))}
        </div>
      </section>

      {/* Subsystem Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Modular Architecture</h2>
            <p className="text-2xl font-bold text-slate-900 mt-1">The 4 Core Research Components</p>
          </div>
          <Link href="/subsystems" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 mt-2 sm:mt-0">
            Full Subsystem Specifications &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subsystemsData.map((sub) => (
            <div key={sub.id} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="slate">{sub.category}</Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">{sub.title}</h3>
                <p className="text-xs text-emerald-700 font-medium mb-3">{sub.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{sub.abstract}</p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-slate-900 uppercase">Primary Deliverables:</p>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    {sub.keyContributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Lead: <span className="text-slate-700 font-medium">{sub.leadInvestigator}</span></span>
                <Link href={`/subsystems#${sub.slug}`} className="font-semibold text-emerald-700 hover:text-emerald-800">
                  Read Architecture &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}