import { Subsystem } from '@/types';

export const subsystemsData: Subsystem[] = [
  {
    id: 'subsystem-1',
    slug: 'robotics-plant-tracking',
    category: 'ROBOTICS_NAVIGATION',
    title: 'Autonomous Navigation & RFID Plant Tracking',
    subtitle: 'Closed-loop line navigation and vertical canopy gantry scanner',
    leadInvestigator: 'Peiris P.S.S. & Wijethunga T.W.M.J.C.',
    abstract: 'Eliminates human manual inspections by employing a 4WD differential-drive robot that tracks polytunnel rows within ±1 cm deviation and captures multi-height vertical canopy profiles via a NEMA 12 stepper gantry.',
    hardwareStack: [
      { component: 'Microcontroller', specification: 'Espressif ESP32-WROOM-32' },
      { component: 'Drive Train', specification: '4x DC Gear Motors + 2x BTS7960 43A Drivers' },
      { component: 'Track Sensors', specification: 'Dual Analog Infrared Sensors (Differential Feedback)' },
      { component: 'Plant Identification', specification: 'MFRC522 13.56MHz RFID Reader + Passive Plant Base Tags' },
      { component: 'Vertical Gantry', specification: '0.5m Threaded Rod + 0.75m Guide + NEMA 12 Stepper (A4988 1/16 Microstepping)' },
      { component: 'Power Supply', specification: '4S 18650 Li-ion 12V 5000mAh + Isolated Step-Down Buck Converters' }
    ],
    softwareStack: [
      { layer: 'Firmware', technology: 'C++ / FreeRTOS / ESP-IDF' },
      { layer: 'Cloud Link', technology: 'Google Firebase Realtime REST / Firestore Webhooks' },
      { layer: 'Operator App', technology: 'React Native (iOS/Android) Remote Telemetry' }
    ],
    keyContributions: [
      '100% plant stop accuracy across all designated RFID tags during field validation trials.',
      'Maintained consistent ±1 cm lateral line tracking along 8-meter greenhouse test beds.',
      'Overcame tall vertical cucumber crop occlusion through automated 3-tier gantry image capture.'
    ],
    imagePath: '/images/hardware/robot-chassis.jpg'
  },
  {
    id: 'subsystem-2',
    slug: 'ai-pathology-targeted-spraying',
    category: 'COMPUTER_VISION_PATHOLOGY',
    title: 'Hybrid AI Pathology & Targeted Foliar Spraying',
    subtitle: 'YOLOv8 leaf region isolation and Mask R-CNN severity segmentation',
    leadInvestigator: 'Chandrasekara C.M.D.D.',
    abstract: 'Transforms traditional broad-spectrum blanket chemical spraying into plant-level micro-dosing by analyzing foliar health using a two-stage computer vision model and activating dual chemical pumps for specific fungal conditions.',
    hardwareStack: [
      { component: 'Chemical Pumps', specification: '2x 5V DC Diaphragm Liquid Pumps' },
      { component: 'Pump Driver', specification: 'L298N Dual H-Bridge Motor Controller' },
      { component: 'Actuator Vectoring', specification: 'Micro Servo Pan/Tilt Directional Nozzle' },
      { component: 'Imaging Unit', specification: 'Gantry-Mounted HD Optical Sensor (1280x720)' }
    ],
    softwareStack: [
      { layer: 'Leaf Isolation', technology: 'YOLOv8 Single-Pass Object Detection' },
      { layer: 'Pathology & Masking', technology: 'Mask R-CNN Instance Segmentation' },
      { layer: 'Chemical Logic Engine', technology: 'Python 3.11 / OpenCV / Decision Matrix' }
    ],
    keyContributions: [
      'Directly achieved an 80% reduction in agrochemical usage compared to blanket spraying.',
      'Achieved 96.97% overall classification accuracy across healthy, mildew, and stress classes.',
      'Eliminated unnecessary spraying by separating water stress alerts from fungal infections.'
    ],
    imagePath: '/images/ai/downy-mildew.jpg'
  },
  {
    id: 'subsystem-3',
    slug: 'fruit-sizing-phenology',
    category: 'HARVEST_PHENOLOGY',
    title: 'Computer Vision Fruit Sizing & Phenology Trigger',
    subtitle: 'Ultrasonic depth fusion fruit detection and YOLOv8 flower stage detection',
    leadInvestigator: 'Thotahewa A.H.T.P.P.',
    abstract: 'Delivers non-destructive harvest estimation by fusing YOLOv8 cucumber bounding box coordinates with ultrasonic depth sensor distance measurements, alongside automated flower detection for growth phase tracking.',
    hardwareStack: [
      { component: 'Distance Ranging', specification: 'HC-SR04 Ultrasonic Distance Sensor' },
      { component: 'Optics', specification: 'Mobile-integrated RGB Camera Module' },
      { component: 'Processing Core', specification: 'Edge AI Gateway Interface' }
    ],
    softwareStack: [
      { layer: 'Fruit Detection', technology: 'YOLOv8 Object Detection (Trained on 891 images)' },
      { layer: 'Flower Detection', technology: 'YOLOv8 Phenological Model (Trained on 798 images)' },
      { layer: 'Spatial Calculation', technology: 'Pixel-to-Centimeter Depth Projection Geometry' }
    ],
    keyContributions: [
      'Accurate harvest-ready classification for salad cucumbers (15-16 cm length, 2.5-3.0 cm diameter).',
      'YOLOv8 fruit detection achieved 0.9697 mAP@0.5 and 0.9190 precision under complex foliage.',
      'YOLOv8 flower detection model (0.941 mAP@0.5) acts as an automatic biological trigger for fertigation.'
    ],
    imagePath: '/images/ai/fruit-sizing.jpg'
  },
  {
    id: 'subsystem-4',
    slug: 'fertigation-lora-telemetry',
    category: 'FERTIGATION_TELEMETRY',
    title: 'Precision Fertigation & LoRa Environmental Telemetry',
    subtitle: 'Soil NPK sensing, automated 3-tub mixer, and dual-sensor anomaly detection',
    leadInvestigator: 'Wijethunga T.W.M.J.C. & Peiris P.S.S.',
    abstract: 'Enables responsive plant nutrition through real-time soil NPK monitoring and automated load-cell-based nutrient dispensing, while distributed LoRa sensor nodes detect ambient greenhouse microclimate anomalies.',
    hardwareStack: [
      { component: 'Soil Sensing', specification: 'Optical Soil NPK Industrial Sensor Probe' },
      { component: 'Nutrient Dispensing', specification: '3x Solenoid Pumps + 3x Precision Load Cells' },
      { component: 'Mixing Unit', specification: 'Motorized Mechanical Stirred Central Reservoir' },
      { component: 'Long-Range RF', specification: 'SX1278 LoRa Transceiver Nodes (433/868 MHz)' },
      { component: 'Local Display', specification: '0.96-inch I2C OLED Display Module' }
    ],
    softwareStack: [
      { layer: 'Embedded Node', technology: 'Arduino C / Low-Power Sleep Logic' },
      { layer: 'Anomaly Detection', technology: 'Dual-sensor threshold comparison (|T1 - T2|, |H1 - H2|)' },
      { layer: 'Control Integration', technology: 'Firebase Cloud Functions & React Native Dashboard' }
    ],
    keyContributions: [
      'Automated transition between vegetative and flowering NPK recipes triggered by vision system.',
      'High long-range radio stability inside metal/foil greenhouse tunnels where Wi-Fi drops out.',
      'Automated anomaly rejection prevents faulty sensor readings from skewing irrigation actions.'
    ],
    imagePath: '/images/fertigation/automated-mixer.jpg'
  }
];