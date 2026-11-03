import React from 'react';
import { subsystemsData } from '@/data/subsystemsData';
import { SubsystemSection } from '@/components/subsystems/SubsystemSection';
import { DecisionLogicTree } from '@/components/subsystems/DecisionLogicTree';
import { Badge } from '@/components/ui/Badge';

export default function SubsystemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Engineering Modules</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Core Subsystems & Technical Specifications
        </h1>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          Detailed breakdown of the four individual research components comprising the Polycrop platform, including hardware bills of materials, firmware layers, and control flows[cite: 1, 14, 100].
        </p>
      </div>

      {/* Decision Engine Diagram */}
      <DecisionLogicTree />

      {/* The 4 Subsystems */}
      <div className="space-y-12">
        {subsystemsData.map((subsystem) => (
          <SubsystemSection key={subsystem.id} subsystem={subsystem} />
        ))}
      </div>
    </div>
  );
}