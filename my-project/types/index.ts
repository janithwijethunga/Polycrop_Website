export type ModuleCategory = 
  | 'ROBOTICS_NAVIGATION'
  | 'COMPUTER_VISION_PATHOLOGY'
  | 'HARVEST_PHENOLOGY'
  | 'FERTIGATION_TELEMETRY';

export interface Subsystem {
  id: string;
  slug: string;
  category: ModuleCategory;
  title: string;
  subtitle: string;
  leadInvestigator: string;
  abstract: string;
  hardwareStack: { component: string; specification: string }[];
  softwareStack: { layer: string; technology: string }[];
  keyContributions: string[];
  imagePath: string;
}

export interface ResearchMetric {
  label: string;
  value: string;
  baseline: string;
  significance: string;
}

export interface ModelPerformance {
  classOrModel: string;
  precision: number;
  recall: number;
  f1Score: number;
  accuracyOrMap: number;
  metricType: 'Accuracy' | 'mAP@0.5';
}

export interface TeamMember {
  name: string;
  studentId?: string;
  role: string;
  subsystemResponsibility: string;
  affiliation: string;
  bio: string;
  imagePath: string;
  socials: {
    github?: string;
    linkedin?: string;
    email: string;
  };
}

export interface AcademicReference {
  id: number;
  authors: string;
  title: string;
  source: string;
  year: number;
  doi?: string;
}