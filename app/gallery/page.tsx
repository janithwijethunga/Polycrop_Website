'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/data/galleryData';
import { ImageModal } from '@/components/ui/ImageModal';
import { Badge } from '@/components/ui/Badge';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-3">
        <Badge variant="green">Visual Archive</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Field Trials, Hardware Prototypes & AI Inferences
        </h1>
        <p className="text-slate-600 leading-relaxed text-sm">
          A photo gallery documenting the physical build, electrical circuitry, deep learning segmentation masks, and Sri Lankan cucumber polytunnel deployments[cite: 10, 100].
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {[
          { key: 'all', label: 'All Artifacts' },
          { key: 'polytunnel', label: 'Polytunnel Trials' },
          { key: 'robotics', label: 'Robotics & Hardware' },
          { key: 'ai', label: 'AI Segmentation & Depth' },
          { key: 'mobile_app', label: 'Farmer Mobile App' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedCategory(tab.key)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedCategory === tab.key
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800 uppercase tracking-wider border border-slate-200">
                  {item.category.replace('_', ' ')}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <ImageModal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          imageSrc={activeImage.imagePath}
          altText={activeImage.title}
          title={activeImage.title}
          description={activeImage.description}
        />
      )}
    </div>
  );
}