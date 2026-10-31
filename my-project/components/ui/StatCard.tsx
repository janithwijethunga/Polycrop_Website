import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  baseline: string;
  significance: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, baseline, significance }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{label}</p>
      <div className="flex items-baseline space-x-2 my-2">
        <span className="text-4xl font-bold tracking-tight text-emerald-700">{value}</span>
      </div>
      <p className="text-xs font-medium text-slate-400 mb-3">Baseline: {baseline}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{significance}</p>
    </div>
  );
};