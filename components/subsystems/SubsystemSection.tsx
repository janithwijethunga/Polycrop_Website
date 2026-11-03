import React from 'react';
import Image from 'next/image';
import { Subsystem } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface SubsystemSectionProps {
  subsystem: Subsystem;
}

export const SubsystemSection: React.FC<SubsystemSectionProps> = ({ subsystem }) => {
  return (
    <section id={subsystem.slug} className="scroll-mt-20 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <Badge variant="green">{subsystem.category}</Badge>
          <h2 className="text-2xl font-bold text-slate-950 mt-1.5">{subsystem.title}</h2>
          <p className="text-xs text-emerald-700 font-medium">{subsystem.subtitle}</p>
        </div>
        <div className="text-xs text-slate-500 sm:text-right">
          <span className="block text-slate-400 uppercase tracking-wider font-semibold">Lead Investigator</span>
          <span className="font-medium text-slate-800">{subsystem.leadInvestigator}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">{subsystem.abstract}</p>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Key Engineering Contributions</h4>
            <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
              {subsystem.keyContributions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Hardware Stack</h5>
              <ul className="space-y-1 text-xs text-slate-600 font-mono">
                {subsystem.hardwareStack.map((h, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-slate-800">{h.component}:</span> {h.specification}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Software Stack</h5>
              <ul className="space-y-1 text-xs text-slate-600 font-mono">
                {subsystem.softwareStack.map((s, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-slate-800">{s.layer}:</span> {s.technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <Image
              src={subsystem.imagePath}
              alt={subsystem.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};