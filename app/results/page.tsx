import React from 'react';
import { diseaseModelMetrics, detectionModelMetrics, systemMetrics } from '@/data/metricsData';
import { Badge } from '@/components/ui/Badge';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Empirical Verification</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Experimental Results & Performance Benchmarks
        </h1>
        <p className="text-slate-600 leading-relaxed text-sm">
          Field-tested in a commercial Sri Lankan cucumber polytunnel across 5 cultivation rows (8 m length, 150 cm row spacing, 70 cm inter-plant spacing)[cite: 100].
        </p>
      </div>

      {/* Physical System Performance */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Robotic Field Performance Benchmarks</h2>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
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
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
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
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">AI Pathology & Stress Classification Performance</h2>
          <p className="text-xs text-slate-500 mt-1">Evaluated on 1,970 cucumber leaf images collected under varying polytunnel lighting conditions[cite: 45].</p>
        </div>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
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
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
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
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">YOLOv8 Fruit & Flower Detection Metrics</h2>
          <p className="text-xs text-slate-500 mt-1">Fruit detection (891 images)[cite: 47] and flower detection (798 images)[cite: 48] models under polytunnel occlusion[cite: 100].</p>
        </div>
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
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
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
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

      {/* Research Limitations Section */}
      <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Identified Prototype Limitations</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <li className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Vertical Scanning Duration</strong>
            Multi-stop gantry movement requires 5–10 minutes per plant[cite: 100], which requires optimization for large commercial polytunnels[cite: 78, 100].
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">External Inference Dependency</strong>
            Deep learning models currently execute on an external Python server via Firebase[cite: 40, 78, 100], pointing to on-device edge AI boards as the next step[cite: 78, 100].
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Sensor Calibration Drift</strong>
            Optical NPK sensor readings and load-cell flow rates require periodic calibration to sustain continuous dosing accuracy[cite: 78, 100].
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-200">
            <strong className="text-slate-900 block mb-1">Lighting & Occlusion Edge Cases</strong>
            Extreme solar glare and heavily overlapping foliage occasionally reduce bounding-box recall for fruits and early foliar lesions[cite: 78, 100].
          </li>
        </ul>
      </section>
    </div>
  );
}