import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/ui/HeroSection';
import { systemMetrics, diseaseModelMetrics } from '@/data/metricsData';
import { subsystemsData } from '@/data/subsystemsData';
import { teamMembers } from '@/data/teamData';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. Redesigned Unified Hero Section & Slideshow */}
      <HeroSection />

      {/* 2. Key Empirical Highlights (KPI Ribbon) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800">Empirical Validation</h2>
            <p className="text-2xl font-bold text-slate-950 mt-1">Field-Demonstrated Research Benchmarks</p>
          </div>
          <p className="text-xs text-slate-500 max-w-md mt-2 md:mt-0">
            Validated in commercial cucumber polytunnels under real tropical microclimate conditions in Sri Lanka[cite: 100].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemMetrics.map((metric, i) => (
            <StatCard key={i} {...metric} />
          ))}
        </div>
      </section>

      {/* 3. Problem Statement & Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800">Agronomic Context</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Bridging the Gap from Blanket Spraying to Plant-Level Precision
            </p>
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Conventional greenhouse practices rely on visual walkthroughs and calendar schedules, creating high input costs and delayed disease response[cite: 5, 16].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Traditional Greenhouse Practices</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">&#10005;</span>
                  <span><strong>Blanket Spraying:</strong> Treats the whole tunnel indiscriminately, wasting ~80% of agrochemicals[cite: 16, 100].</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">&#10005;</span>
                  <span><strong>Visual Foliar Occlusion:</strong> Manual scouting misses powdery/downy mildew hidden in upper vertical canopies[cite: 16, 18].</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">&#10005;</span>
                  <span><strong>Static Fertigation:</strong> Fixed calendar recipes fail to align with sudden flowering transitions[cite: 16, 26, 75].</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider">Polycrop Integrated Ecosystem</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-700 font-bold">&#10003;</span>
                  <span><strong>Micro-Targeted Actuation:</strong> Directs Mancozeb or Hexaconazole solely to segmented diseased leaves[cite: 35, 66, 100].</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-700 font-bold">&#10003;</span>
                  <span><strong>Vertical Stepper Gantry:</strong> Multi-tier cameras capture full canopy height profiles for individual plant RFID IDs[cite: 14, 34, 100].</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-700 font-bold">&#10003;</span>
                  <span><strong>Adaptive Stage Switching:</strong> Flower vision models trigger automated 3-tub solenoid nutrient mixing[cite: 29, 37, 75, 100].</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Subsystems Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800">System Architecture</h2>
            <p className="text-2xl font-bold text-slate-950 mt-1">4 Interconnected Engineering Pillars</p>
          </div>
          <Link href="/subsystems" className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 mt-2 md:mt-0">
            View Complete Technical Specs &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subsystemsData.map((sub, idx) => (
            <div
              key={sub.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider">PILLAR 0{idx + 1}</span>
                  <Badge variant="slate">{sub.category}</Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">{sub.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sub.abstract}
                </p>

                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Key Deliverables:</p>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    {sub.keyContributions.slice(0, 2).map((item, cIdx) => (
                      <li key={cIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Lead: <strong className="text-slate-800">{sub.leadInvestigator}</strong></span>
                <Link
                  href={`/subsystems#${sub.slug}`}
                  className="font-semibold text-emerald-700 group-hover:text-emerald-900"
                >
                  Explore Pillar &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closed-Loop Decision Engine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">State Machine Logic</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Sense &rarr; Analyze &rarr; Decide &rarr; Act &rarr; Record</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every cucumber plant follows an autonomous closed-loop inspection pipeline executed through ESP32 firmware and Google Firebase synchronization[cite: 30, 32, 60].
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Line Navigation', desc: 'IR sensor differential drive keeps ±1 cm row tracking[cite: 100].' },
              { step: '02', title: 'RFID Localization', desc: '13.56 MHz tag query matches plant ID in cloud DB[cite: 33, 100].' },
              { step: '03', title: 'Gantry Scan', desc: 'NEMA stepper carriage captures 3-tier canopy imagery[cite: 45, 100].' },
              { step: '04', title: 'Dual-Stage AI', desc: 'YOLOv8 leaf isolation + Mask R-CNN severity segmentation[cite: 36, 100].' },
              { step: '05', title: 'Micro Actuation', desc: '10s targeted spray or mobile water-stress alert push[cite: 35, 66, 100].' },
            ].map((st, sIdx) => (
              <div key={sIdx} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold">{st.step}</span>
                <h4 className="text-sm font-bold text-slate-100">{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deep Learning Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800">Model Evaluation</h2>
              <p className="text-xl font-bold text-slate-950 mt-1">Hybrid Deep Learning Performance Overview</p>
            </div>
            <Link href="/results" className="text-xs font-semibold text-emerald-700 hover:text-emerald-900">
              View All 1,970 Image Test Metrics &rarr;
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-500">
                <tr>
                  <th className="py-3 px-4">Diagnostic Class</th>
                  <th className="py-3 px-4">Precision</th>
                  <th className="py-3 px-4">Recall</th>
                  <th className="py-3 px-4">F1-Score</th>
                  <th className="py-3 px-4">Overall Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {diseaseModelMetrics.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-sans font-semibold text-slate-900">{row.classOrModel}</td>
                    <td className="py-3 px-4 text-slate-600">{row.precision.toFixed(4)}</td>
                    <td className="py-3 px-4 text-slate-600">{row.recall.toFixed(4)}</td>
                    <td className="py-3 px-4 text-slate-600">{row.f1Score.toFixed(4)}</td>
                    <td className="py-3 px-4 font-bold text-emerald-700">{row.accuracyOrMap.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Research Team Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-800">Academic Group</h2>
            <p className="text-2xl font-bold text-slate-950 mt-1">Student Investigators & Supervision</p>
          </div>
          <Link href="/team" className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 mt-2 md:mt-0">
            View Profiles & Citations &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-2">
              <span className="text-[11px] font-mono text-slate-400">{member.studentId}</span>
              <h4 className="text-base font-bold text-slate-950">{member.name}</h4>
              <p className="text-xs text-emerald-700 font-semibold">{member.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed pt-1">{member.subsystemResponsibility}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}