import { AcademicSupervisor, TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    name: 'P.S.S. Peiris',
    studentId: 'IT22326386',
    role: 'Student Researcher',
    subsystemResponsibility: 'Autonomous Mobile Robotics, Differential Kinematics & Line Guidance Systems',
    affiliation: 'Department of Information Technology, SLIIT',
    bio: 'Researched mobile robotics mechanics, line tracking control systems, and automated vertical gantry scanning arrays for protected greenhouse agriculture[cite: 1, 100].',
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
    role: 'Student Researcher',
    subsystemResponsibility: 'Embedded Systems, LoRa Telemetry, Automated Fertigation & NPK Monitoring',
    affiliation: 'Department of Information Technology, SLIIT',
    bio: 'Researched real-time embedded hardware control on ESP32, soil macronutrient sensing, multi-solenoid nutrient mixing, and LoRa wireless sensor networks[cite: 1, 100].',
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
    role: 'Student Researcher',
    subsystemResponsibility: 'Deep Learning Vision, Mask R-CNN Pathology Segmentation & Precision Spraying',
    affiliation: 'Department of Information Technology, SLIIT',
    bio: 'Developed computer vision models for foliar disease detection, infection severity mask calculation, and closed-loop targeted fungicide actuation[cite: 1, 100].',
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
    role: 'Student Researcher',
    subsystemResponsibility: 'Ultrasonic Depth Sizing, Fruit Ripeness Estimation & YOLOv8 Phenology',
    affiliation: 'Department of Information Technology, SLIIT',
    bio: 'Researched spatial cucumber detection, ultrasonic-assisted geometric fruit sizing, and YOLOv8-based flower stage classification for fertigation switching[cite: 1, 100].',
    imagePath: '/images/team/thotahewa.jpg',
    socials: {
      email: 'it22892294@my.sliit.lk',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export const academicSupervisors: AcademicSupervisor[] = [
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
  },
  {
    name: 'Ms. J. Krishara',
    role: 'Academic Co-Author / Advisor',
    department: 'Department of Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    email: 'jenny.k@sliit.lk'
  }
];

export const thesisCitationBibTeX = `@mastersthesis{polycrop2026,
  author       = {Peiris, P. S. S. and Wijethunga, T. W. M. J. C. and Chandrasekara, C. M. D. D. and Thotahewa, A. H. T. P. P.},
  title        = {RFID-Based IoT Robot for Cucumber Plant Identification and Precision Spraying},
  school       = {Sri Lanka Institute of Information Technology (SLIIT)},
  year         = {2026},
  month        = {April},
  address      = {Malabe, Sri Lanka},
  note         = {Supervised by Ms. Wishalya Tissera and Ms. Chathushki Chathumali}
}`;