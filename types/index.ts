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

export interface AcademicSupervisor {
  name: string;
  role: string;
  department: string;
  institution: string;
  email: string;
}

export interface ResearchGapItem {
  area: string;
  traditional: string;
  limitation: string;
  polycropSolution: string;
}

export interface ArchitectureLayer {
  layer: string;
  components: string;
  function: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'robotics' | 'ai' | 'polytunnel' | 'mobile_app';
  imagePath: string;
  description: string;
}