import React from 'react';
import { GapComparisonTable } from '@/components/research/GapComparisonTable';
import { ArchitectureLayers } from '@/components/research/ArchitectureLayers';
import { Badge } from '@/components/ui/Badge';

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Academic Context & System Model</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Research Problem, Literature Gaps & Architecture
        </h1>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          Protected cucumber cultivation under tropical greenhouse microclimates demands continuous, plant-specific supervision.
          Polycrop bridges isolated smart farming technologies into a 5-layer sense-analyze-decide-act framework[cite: 14, 28].
        </p>
      </div>

      {/* Problem & Motivation */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Background & Agronomic Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
          <p>
            Cucumber (<em>Cucumis sativus L.</em>) is a high-value commercial crop in Sri Lanka[cite: 15, 100]. While polytunnels protect crops from rain and external pests[cite: 15],
            vertical vining plants develop dense foliar canopies up to 2 meters high[cite: 16, 18]. Pathogens such as Downy Mildew and Powdery Mildew manifest on leaves at variable heights,
            making human visual walkthroughs slow and prone to missed early-stage symptoms[cite: 16, 18, 100].
          </p>
          <p>
            When symptoms are manually spotted, growers resort to blanket chemical spraying, treating entire tunnels uniformly[cite: 16, 18].
            This practice wastes agrochemicals, elevates production costs, increases chemical runoff, and exposes workers to health hazards[cite: 16, 100].
            Polycrop addresses this by linking plant-level RFID tracking with automated vertical gantry inspection and targeted micro-nozzle spraying[cite: 14, 16, 35].
          </p>
        </div>
      </section>

      {/* Literature Gap Comparison */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Research Gap Analysis</h2>
          <p className="text-xs text-slate-500 mt-1">
            Contrasting conventional polytunnel operations and isolated IoT prototypes with the Polycrop integrated platform[cite: 16, 17].
          </p>
        </div>
        <GapComparisonTable />
      </section>

      {/* 5 Architectural Layers */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">The 5-Layer System Architecture</h2>
          <p className="text-xs text-slate-500 mt-1">
            Data flow from physical field components through sensing, deep learning inference, actuation, and cloud synchronization[cite: 28, 30].
          </p>
        </div>
        <ArchitectureLayers />
      </section>
    </div>
  );
}