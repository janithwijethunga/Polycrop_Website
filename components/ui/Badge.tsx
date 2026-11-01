import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'slate' | 'amber';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'green' }) => {
  const styles = {
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    slate: 'bg-slate-50 text-slate-700 border-slate-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant]}`}>
      {children}
    </span>
  );
};