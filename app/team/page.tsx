import React from 'react';
import { teamMembers, academicSupervisors } from '@/data/teamData';
import { Badge } from '@/components/ui/Badge';

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Academic Investigators</Badge>
        <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Research Group & Supervisors</h1>
        <p className="text-slate-600 leading-relaxed text-sm">
          Department of Information Technology, Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT).
        </p>
      </div>

      {/* 4 Student Researchers */}
      <section className="space-y-8">
        <h2 className="text-xl font-bold text-slate-900">Student Researchers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-slate-950">{member.name}</h3>
                  {member.studentId && (
                    <span className="font-mono text-xs text-slate-400">{member.studentId}</span>
                  )}
                </div>
                <p className="text-xs font-semibold text-emerald-700 mb-1">{member.role}</p>
                <p className="text-xs font-medium text-slate-500 mb-4">{member.subsystemResponsibility}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{member.bio}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{member.affiliation}</span>
                <a href={`mailto:${member.socials.email}`} className="text-emerald-700 font-medium hover:underline">
                  {member.socials.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supervisors */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Academic Supervisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicSupervisors.map((sup) => (
            <div key={sup.name} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <h3 className="text-base font-bold text-slate-900">{sup.name}</h3>
              <p className="text-xs font-semibold text-emerald-800 mt-0.5">{sup.role}</p>
              <p className="text-xs text-slate-600 mt-2">{sup.department}</p>
              <p className="text-xs text-slate-500">{sup.institution}</p>
              <p className="text-xs font-mono text-slate-600 mt-3">{sup.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}