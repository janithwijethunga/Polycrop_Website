import React from 'react';
import { diseaseModelMetrics, detectionModelMetrics, systemMetrics } from '@/data/metricsData';
import { Badge } from '@/components/ui/Badge';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Empirical Verification</Badge>
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Experimental Results & Field Metrics</h1>
        <p className="text-slate-600 leading-relaxed text-sm">
          Validated in a commercial Sri Lankan cucumber polytunnel featuring five 8-meter rows with 150 cm row spacing and 70 cm inter-plant spacing.
        </p>
      </div>

      {/* Field System Performance */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Robotic Field Performance</h2>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="py-3.5 px-4">Evaluation Metric</th>
                <th className="py-3.5 px-4">Observed Value</th>
                <th className="py-3.5 px-4">Baseline Comparison</th>
                <th className="py-3.5 px-4">Practical Relevance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {systemMetrics.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{m.label}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">{m.value}</td>
                  <td className="py-3.5 px-4 text-slate-500 text-xs">{m.baseline}</td>
                  <td className="py-3.5 px-4 text-slate-600 text-xs">{m.significance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Disease and Stress Detection Results */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">AI Pathology & Stress Classification Performance</h2>
        <p className="text-xs text-slate-500">Tested on 1,970 cucumber leaf images under practical uneven polytunnel illumination.</p>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="py-3.5 px-4">Condition Class / Model Pipeline</th>
                <th className="py-3.5 px-4">Precision</th>
                <th className="py-3.5 px-4">Recall</th>
                <th className="py-3.5 px-4">F1-Score</th>
                <th className="py-3.5 px-4">Overall Accuracy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {diseaseModelMetrics.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{m.classOrModel}</td>
                  <td className="py-3.5 px-4 font-mono">{m.precision.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono">{m.recall.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono">{m.f1Score.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">{m.accuracyOrMap.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Object Detection Performance */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Fruit and Flower Detection Metrics (YOLOv8)</h2>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="py-3.5 px-4">Dataset & Scope</th>
                <th className="py-3.5 px-4">Precision</th>
                <th className="py-3.5 px-4">Recall</th>
                <th className="py-3.5 px-4">F1-Score</th>
                <th className="py-3.5 px-4">mAP@0.5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {detectionModelMetrics.map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">{m.classOrModel}</td>
                  <td className="py-3.5 px-4 font-mono">{m.precision.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono">{m.recall.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono">{m.f1Score.toFixed(4)}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">{m.accuracyOrMap.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}