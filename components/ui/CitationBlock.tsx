'use client';

import React, { useState } from 'react';

interface CitationBlockProps {
  bibtex: string;
}

export const CitationBlock: React.FC<CitationBlockProps> = ({ bibtex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 text-slate-200">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-slate-800 text-xs">
        <span className="font-mono text-slate-400">polycrop-thesis.bib</span>
        <button
          onClick={handleCopy}
          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-emerald-700 text-slate-200 text-xs font-medium transition-colors"
        >
          {copied ? 'Copied to Clipboard!' : 'Copy BibTeX'}
        </button>
      </div>
      <pre className="p-4 text-xs font-mono overflow-x-auto text-emerald-400/90 leading-relaxed">
        {bibtex}
      </pre>
    </div>
  );
};