import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">P</div>
              <span className="font-bold text-slate-900 tracking-tight">POLYCROP RESEARCH PROJECT</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              A comprehensive IoT, robotics, and artificial intelligence ecosystem designed for cucumber polytunnels in Sri Lanka.
              Developed at the Department of Information Technology, Sri Lanka Institute of Information Technology (SLIIT).
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Project Modules</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/subsystems" className="hover:text-emerald-700">Differential Line Robot & RFID</Link></li>
              <li><Link href="/subsystems" className="hover:text-emerald-700">YOLOv8 + Mask R-CNN AI</Link></li>
              <li><Link href="/subsystems" className="hover:text-emerald-700">Fruit Ripeness & Depth Fusion</Link></li>
              <li><Link href="/subsystems" className="hover:text-emerald-700">NPK Mixing & LoRa Telemetry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">Supervision</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>Supervisor: Ms. Wishalya Tissera</li>
              <li>Co-Supervisor: Ms. Chathushki Chathumali</li>
              <li className="pt-2 text-slate-400">Published April 2026</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Polycrop Research Team (Peiris, Wijethunga, Chandrasekara, Thotahewa). SLIIT.</p>
          <p className="mt-2 sm:mt-0 font-mono">BSc (Hons) in IT Specializing in IT</p>
        </div>
      </div>
    </footer>
  );
};