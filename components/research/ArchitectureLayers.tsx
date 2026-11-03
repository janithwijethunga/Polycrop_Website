import React from 'react';
import { systemArchitectureLayers } from '@/data/researchData';
import { Badge } from '@/components/ui/Badge';

export const ArchitectureLayers: React.FC = () => {
  return (
    <div className="space-y-4">
      {systemArchitectureLayers.map((layer, idx) => (
        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-emerald-300 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <span>{layer.layer}</span>
            </h3>
            <Badge variant="green">Layer {idx + 1}</Badge>
          </div>
          <p className="text-xs font-mono text-emerald-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100 mb-2">
            <strong className="text-slate-700">Components: </strong>{layer.components}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {layer.function}
          </p>
        </div>
      ))}
    </div>
  );
};