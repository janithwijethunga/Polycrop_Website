import React from 'react';

export const DecisionLogicTree: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-900">AI Pathology & Actuation Decision Engine</h3>
        <p className="text-xs text-slate-600 mt-1">
          Rule-based decision logic mapping YOLOv8 foliar localization and Mask R-CNN segmentation outputs to field actions[cite: 36, 100].
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">Class: Healthy</span>
          <p className="font-bold text-slate-900 mt-2">Zero Chemical Spray</p>
          <p className="text-slate-500 mt-1">Pump remains idle. Robot logs healthy foliar state to Firebase and proceeds to next plant[cite: 35, 43, 61].</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">Class: Downy Mildew</span>
          <p className="font-bold text-emerald-800 mt-2">Spray Mancozeb</p>
          <p className="text-slate-500 mt-1">Triggers Pump 1 for 10s via L298N driver[cite: 100]. Vectors nozzle toward infected leaf coordinate[cite: 35].</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">Class: Powdery Mildew</span>
          <p className="font-bold text-emerald-800 mt-2">Spray Hexaconazole</p>
          <p className="text-slate-500 mt-1">Triggers Pump 2 for 10s[cite: 100]. Applies localized micro-dose to segmented lesion area[cite: 100].</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">Class: Water Stress</span>
          <p className="font-bold text-amber-800 mt-2">Mobile Alert Only</p>
          <p className="text-slate-500 mt-1">No chemical applied. Pushes notification to React Native app to adjust drip fertigation[cite: 17, 31, 100].</p>
        </div>
      </div>
    </div>
  );
};