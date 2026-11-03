import React from 'react';
import { researchGapComparison } from '@/data/researchData';

export const GapComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-500">
          <tr>
            <th className="py-3.5 px-4">Research Focus Area</th>
            <th className="py-3.5 px-4">Traditional Greenhouse Practice</th>
            <th className="py-3.5 px-4">Identified Operational Gap</th>
            <th className="py-3.5 px-4">Polycrop Solution</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {researchGapComparison.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="py-3.5 px-4 font-semibold text-slate-900">{row.area}</td>
              <td className="py-3.5 px-4 text-slate-600 text-xs">{row.traditional}</td>
              <td className="py-3.5 px-4 text-amber-700 text-xs">{row.limitation}</td>
              <td className="py-3.5 px-4 text-emerald-800 font-medium text-xs bg-emerald-50/30">
                {row.polycropSolution}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};