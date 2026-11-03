'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  title: string;
  description?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  altText,
  title,
  description
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="relative w-full h-80 sm:h-96 md:h-[480px] bg-slate-100">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        <div className="p-6 bg-white border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
        </div>
      </div>
    </div>
  );
};