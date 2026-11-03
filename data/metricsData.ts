import { ModelPerformance, ResearchMetric } from '@/types';

export const systemMetrics: ResearchMetric[] = [
  {
    label: 'Agrochemical Reduction',
    value: '80%',
    baseline: '100% (Conventional Blanket Spraying)',
    significance: 'Targeted micro-dosing applies fungicide only to segmented diseased foliar regions[cite: 100].'
  },
  {
    label: 'Plant Localization Accuracy',
    value: '100%',
    baseline: '70% - 90% (Standard dynamic RC522 specs)',
    significance: 'Integration of closed-loop line navigation and RFID interrupts ensures zero missed plants[cite: 100].'
  },
  {
    label: 'Line Tracking Deviation',
    value: '±1 cm',
    baseline: '±5 cm - 10 cm (Manual / Open-loop guidance)',
    significance: 'Differential drive closed-loop control keeps the robot centered in narrow polytunnel rows[cite: 100].'
  },
  {
    label: 'Continuous Operating Runtime',
    value: '2.0 Hours',
    baseline: '45 mins (Unregulated single-rail supplies)',
    significance: '4S 18650 Li-ion battery bank with isolated step-down buck converters powers drive, logic, and pumps[cite: 100].'
  }
];

export const diseaseModelMetrics: ModelPerformance[] = [
  {
    classOrModel: 'Downy Mildew (Foliar Fungal)',
    precision: 0.9000,
    recall: 0.9130,
    f1Score: 0.9065,
    accuracyOrMap: 0.9130,
    metricType: 'Accuracy'
  },
  {
    classOrModel: 'Powdery Mildew (Foliar Fungal)',
    precision: 0.9000,
    recall: 0.9091,
    f1Score: 0.9045,
    accuracyOrMap: 0.9091,
    metricType: 'Accuracy'
  },
  {
    classOrModel: 'Water Stress (Abiotic Stress)',
    precision: 0.9000,
    recall: 1.0000,
    f1Score: 0.9474,
    accuracyOrMap: 1.0000,
    metricType: 'Accuracy'
  },
  {
    classOrModel: 'Hybrid Pipeline (YOLOv8 + Mask R-CNN)',
    precision: 0.9190,
    recall: 0.9024,
    f1Score: 0.9106,
    accuracyOrMap: 0.9697,
    metricType: 'Accuracy'
  }
];

export const detectionModelMetrics: ModelPerformance[] = [
  {
    classOrModel: 'Cucumber Fruit Detection (891 images)',
    precision: 0.9190,
    recall: 0.9024,
    f1Score: 0.9106,
    accuracyOrMap: 0.9697,
    metricType: 'mAP@0.5'
  },
  {
    classOrModel: 'Cucumber Flower Detection (798 images)',
    precision: 0.9250,
    recall: 0.8860,
    f1Score: 0.9050,
    accuracyOrMap: 0.9410,
    metricType: 'mAP@0.5'
  }
];