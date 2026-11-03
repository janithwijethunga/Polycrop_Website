import { Subsystem } from '@/types';

export const subsystemsData: Subsystem[] = [
  {
    id: 'subsystem-1',
    slug: 'robotics-plant-tracking',
    category: 'ROBOTICS_NAVIGATION',
    title: 'Autonomous Robotics & RFID Plant Tracking',
    subtitle: 'Differential drive row navigation and vertical canopy gantry scanner',
    leadInvestigator: 'Peiris P.S.S. & Wijethunga T.W.M.J.C.',
    abstract: 'Replaces labor-intensive manual inspections with an autonomous 4WD mobile robot. The platform navigates polytunnel pathways using underside infrared sensors (lateral deviation ±1 cm), registers plants via base-mounted 13.56 MHz RFID tags, and traverses vertical foliage using a motorized lead-screw gantry.',
    hardwareStack: [
      { component: 'Microcontroller', specification: 'Espressif ESP32 32-bit Microcontroller' },
      { component: 'Chassis & Drive', specification: '4WD Custom Acrylic Chassis (30cm x 35cm x 70cm) with 4x DC Gear Motors' },
      { component: 'Motor Drivers', specification: '2x BTS7960 43A High-Current H-Bridge Drivers' },
      { component: 'Navigation Sensors', specification: 'Dual Analog Infrared Line-Tracking Sensors' },
      { component: 'Plant Identification', specification: 'MFRC522 13.56 MHz RFID Reader + Base Passive RFID Tags' },
      { component: 'Vertical Gantry', specification: '0.5m Threaded Rod + 0.75m Rail driven by NEMA 12 Stepper & A4988 Driver' },
      { component: 'Power Architecture', specification: '4S 18650 Li-ion 12V 5000mAh with Step-Down Buck Converters' }
    ],
    softwareStack: [
      { layer: 'Embedded Firmware', technology: 'C++ / FreeRTOS state machine (LINE_FOLLOW, STEPPER_SCAN, ACTUATION)' },
      { layer: 'Cloud Integration', technology: 'Firebase REST API & Firestore Event Listeners' },
      { layer: 'State Machine', technology: 'Deterministic event loop handling scan positions A, B, and C' }
    ],
    keyContributions: [
      '100% stop and identification accuracy at designated plant-base RFID tags during field validation trials.',
      'Maintained consistent ±1 cm lateral line-tracking deviation across 8-meter greenhouse test beds.',
      'Resolved vertical occlusion in tall cucumber vines using a multi-stop stepper gantry mechanism.'
    ],
    imagePath: '/images/subsystems/robotics-chassis.jpg'
  },
  {
    id: 'subsystem-2',
    slug: 'ai-pathology-targeted-spraying',
    category: 'COMPUTER_VISION_PATHOLOGY',
    title: 'Hybrid AI Pathology & Targeted Foliar Spraying',
    subtitle: 'YOLOv8 leaf region isolation and Mask R-CNN severity segmentation',
    leadInvestigator: 'Chandrasekara C.M.D.D.',
    abstract: 'Replaces indiscriminate blanket chemical spraying with targeted plant-level micro-dosing. A two-stage hybrid computer vision pipeline localizes leaves and segments foliar disease lesions, driving directional micro-pumps to spray Mancozeb for downy mildew or Hexaconazole for powdery mildew while routing water stress to mobile alerts.',
    hardwareStack: [
      { component: 'Chemical Delivery', specification: '2x 5V DC Diaphragm Liquid Pumps' },
      { component: 'Pump Driver', specification: 'L298N Dual H-Bridge Motor Driver' },
      { component: 'Nozzle Vectoring', specification: 'Micro Servo Pan/Tilt Directional Spray Nozzle' },
      { component: 'Optics', specification: 'Gantry-Mounted HD Optical Sensor (1280x720)' }
    ],
    softwareStack: [
      { layer: 'Leaf Isolation', technology: 'YOLOv8 Single-Pass Object Detection' },
      { layer: 'Pathology Segmentation', technology: 'Mask R-CNN Instance Segmentation' },
      { layer: 'Decision Logic', technology: 'Python 3.11 OpenCV severity index calculator: (Infected Pixels / Total Leaf Pixels) * 100' },
      { layer: 'Cloud Sync', technology: 'Firebase Realtime Event Dispatcher' }
    ],
    keyContributions: [
      'Demonstrated an approximate 80% reduction in chemical volume compared to blanket spraying.',
      'Achieved 96.97% overall accuracy across healthy leaves, downy mildew, powdery mildew, and water stress.',
      'Integrated confidence-based filtering to prevent accidental spraying under uncertain optical conditions.'
    ],
    imagePath: '/images/subsystems/ai-disease-detection.jpg'
  },
  {
    id: 'subsystem-3',
    slug: 'fruit-sizing-phenology',
    category: 'HARVEST_PHENOLOGY',
    title: 'Fruit Detection, Ripeness Sizing & Phenology Trigger',
    subtitle: 'Ultrasonic depth fusion fruit sizing and YOLOv8 flower stage detection',
    leadInvestigator: 'Thotahewa A.H.T.P.P.',
    abstract: 'Overcomes the challenge of green salad cucumber maturity estimation through geometric sensor fusion. The system combines YOLOv8 bounding boxes with ultrasonic depth measurements to determine real-world dimensions (15-16 cm length, 2.5-3.0 cm diameter), while a flower detection model automatically flags the onset of the flowering growth phase.',
    hardwareStack: [
      { component: 'Depth Ranging', specification: 'HC-SR04 Ultrasonic Distance Sensor' },
      { component: 'Image Acquisition', specification: 'High-Resolution Mobile Optical Sensor' },
      { component: 'Edge Processing', specification: 'External Python Inference Bridge' }
    ],
    softwareStack: [
      { layer: 'Fruit Detection', technology: 'YOLOv8 Object Detection Model (Trained on 891 polytunnel images)' },
      { layer: 'Flower Detection', technology: 'YOLOv8 Phenological Model (Trained on 798 Roboflow-annotated images)' },
      { layer: 'Sizing Algorithm', technology: 'Ultrasonic distance-assisted bounding box pixel-to-centimeter transformation' }
    ],
    keyContributions: [
      'Enabled non-destructive harvest estimation for salad cucumbers without relying on fruit color.',
      'Achieved an mAP@0.5 of 0.9697 and precision of 0.9190 for cucumber fruit localization.',
      'Provided an automated biological trigger via flower detection (0.941 mAP@0.5) to update fertigation profiles.'
    ],
    imagePath: '/images/subsystems/fruit-sizing-ultrasonic.jpg'
  },
  {
    id: 'subsystem-4',
    slug: 'fertigation-lora-telemetry',
    category: 'FERTIGATION_TELEMETRY',
    title: 'Precision Fertigation & LoRa Environmental Telemetry',
    subtitle: 'Soil NPK monitoring, automated 3-tub mixer, and dual-sensor anomaly verification',
    leadInvestigator: 'Wijethunga T.W.M.J.C. & Peiris P.S.S.',
    abstract: 'Delivers dynamic plant nutrition and robust greenhouse telemetry. Measures root-zone NPK values in real time, prepares stage-based nutrient batches using 3 solenoid pumps and precision load cells, and monitors greenhouse temperature and humidity over long-range LoRa links with automated sensor anomaly checking.',
    hardwareStack: [
      { component: 'Soil Sensing', specification: 'Industrial Optical Soil NPK Sensor Probe' },
      { component: 'Nutrient Dispensing', specification: '3x Solenoid Pumps + 3x Precision Strain-Gauge Load Cells' },
      { component: 'Mixing System', specification: 'Mixing Barrel with Motorized Mechanical Stirrer' },
      { component: 'Wireless Radio', specification: 'SX1278 LoRa Transceivers (433/868 MHz)' },
      { component: 'Local UI', specification: '0.96-inch I2C OLED Display' }
    ],
    softwareStack: [
      { layer: 'Firmware', technology: 'Arduino C++ Embedded Controller' },
      { layer: 'Anomaly Algorithm', technology: 'Threshold-based dual-sensor comparator (|T1 - T2|, |H1 - H2|)' },
      { layer: 'Cloud & UI', technology: 'Firebase Firestore & React Native Mobile App with Manual Overrides' }
    ],
    keyContributions: [
      'Automated transition between vegetative and flowering NPK recipes triggered by vision system inputs.',
      'Ensured dependable telemetry inside metal-frame, plastic-clad polytunnels where Wi-Fi degrades.',
      'Integrated automated anomaly rejection to prevent faulty sensor readings from skewing irrigation decisions.'
    ],
    imagePath: '/images/subsystems/automated-mixer-tubes.jpg'
  }
];