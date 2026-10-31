import { AcademicReference, TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: 'P.S.S. Peiris',
    studentId: 'IT22326386',
    role: 'Co-Principal Researcher',
    subsystemResponsibility: 'Autonomous Mobile Robotics, Differential Kinematics & Line Guidance Systems',
    affiliation: 'Sri Lanka Institute of Information Technology (SLIIT)',
    bio: 'Specialized in robotics mechanics, sensor integration, and dynamic trajectory control in agricultural micro-environments.',
    imagePath: '/images/team/peiris.jpg',
    socials: {
      email: 'it22326386@my.sliit.lk',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'T.W.M.J.C. Wijethunga',
    studentId: 'IT22305978',
    role: 'Co-Principal Researcher',
    subsystemResponsibility: 'Embedded Systems, LoRa Telemetry, Automated Fertigation & NPK Monitoring',
    affiliation: 'Sri Lanka Institute of Information Technology (SLIIT)',
    bio: 'Focused on hardware-software architecture, embedded firmware on ESP32, wireless sensor networks, and cloud database pipelines.',
    imagePath: '/images/team/wijethunga.jpg',
    socials: {
      email: 'it22305978@my.sliit.lk',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'C.M.D.D. Chandrasekara',
    studentId: 'IT22925190',
    role: 'Co-Principal Researcher',
    subsystemResponsibility: 'Deep Learning Vision, Mask R-CNN Pathology Segmentation & Precision Spraying',
    affiliation: 'Sri Lanka Institute of Information Technology (SLIIT)',
    bio: 'Focused on plant disease diagnosis algorithms, dataset augmentation, foliar severity indexing, and actuator-vector control.',
    imagePath: '/images/team/chandrasekara.jpg',
    socials: {
      email: 'it22925190@my.sliit.lk',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'A.H.T.P.P. Thotahewa',
    studentId: 'IT22892294',
    role: 'Co-Principal Researcher',
    subsystemResponsibility: 'Ultrasonic Depth Sizing, Fruit Ripeness Estimation & YOLOv8 Phenology',
    affiliation: 'Sri Lanka Institute of Information Technology (SLIIT)',
    bio: 'Researched spatial object detection geometry, non-destructive fruit sizing models, and phenological stage-detection workflows.',
    imagePath: '/images/team/thotahewa.jpg',
    socials: {
      email: 'it22892294@my.sliit.lk',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const academicSupervisors = [
  {
    name: 'Ms. Wishalya Tissera',
    role: 'Primary Research Supervisor',
    department: 'Department of Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    email: 'wishalyatissera@gmail.com'
  },
  {
    name: 'Ms. Chathushki Chathumali',
    role: 'Research Co-Supervisor',
    department: 'Department of Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    email: 'chathushki.c@sliit.lk'
  }
];

export const academicReferences: AcademicReference[] = [
  {
    id: 1,
    authors: 'Jayathilaka, S. N. A., Adikaram, K. K. L. B., & Kumarasinghe, H. K. M. S.',
    title: 'Effectiveness of IoT based automation system for salad cucumber (Cucumis sativus) cultivation in protected house under Sri Lankan conditions',
    source: 'Tropical Agricultural Research and Extension, 23(3-4), 80-91',
    year: 2020,
    doi: '10.4038/tare.v23i3-4.5500'
  },
  {
    id: 2,
    authors: 'Jaliyagoda, N., et al.',
    title: 'Internet of Things (IoT) for smart agriculture: Assembling and assessment of a low-cost IoT system for polytunnels',
    source: 'PLOS ONE, 18(5), e0278440',
    year: 2023,
    doi: '10.1371/journal.pone.0278440'
  },
  {
    id: 3,
    authors: 'Ma, J., Du, K., Zheng, F., Zhang, L., Gong, Z., & Sun, Z.',
    title: 'A recognition method for cucumber diseases using leaf symptom images based on deep convolutional neural network',
    source: 'Computers and Electronics in Agriculture, 154, 18-24',
    year: 2018,
    doi: '10.1016/j.compag.2018.08.048'
  }
];