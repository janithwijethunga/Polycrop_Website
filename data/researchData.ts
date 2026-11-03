import { ArchitectureLayer, ResearchGapItem } from '@/types';

export const researchGapComparison: ResearchGapItem[] = [
  {
    area: 'Plant Identification',
    traditional: 'No plant-level tracking across rows',
    limitation: 'Historical scan and spray data cannot be mapped to individual plants',
    polycropSolution: '13.56 MHz RFID tags mapped to a unique digital plant ID in Firebase Firestore'
  },
  {
    area: 'Disease Detection & Action',
    traditional: 'Manual visual inspection followed by blanket spraying',
    limitation: 'Delayed symptom detection; high agrochemical waste and soil toxicity',
    polycropSolution: 'YOLOv8 leaf localization + Mask R-CNN foliar segmentation activating targeted dual micro-pumps'
  },
  {
    area: 'Foliar Stress vs Disease',
    traditional: 'Treated together using uniform chemical spraying',
    limitation: 'Fungicides are sprayed on non-fungal water-stressed plants, wasting chemical inputs',
    polycropSolution: 'Rule-based decision tree that separates water stress (farmer alert) from fungal mildews (targeted spray)'
  },
  {
    area: 'Cucumber Ripeness',
    traditional: 'Manual inspection based on visual color cues',
    limitation: 'Salad cucumbers remain green throughout maturity; subjective judgment leads to poor harvest timing',
    polycropSolution: 'YOLOv8 bounding box sizing fused with ultrasonic depth measurements (15-16 cm length, 2.5-3.0 cm diameter)'
  },
  {
    area: 'Fertigation & Nutrition',
    traditional: 'Rigid calendar-based fertilizer schedules',
    limitation: 'Does not respond to dynamic root-zone depletion or physiological plant phase changes',
    polycropSolution: 'Industrial soil NPK probe, 3-tub solenoid mixing, and YOLOv8 flower detection as an automatic stage trigger'
  },
  {
    area: 'Environmental Telemetry',
    traditional: 'Wi-Fi/Bluetooth sensors or manual greenhouse loggers',
    limitation: 'Unreliable Wi-Fi penetration through plastic sheets and humid polytunnel foliage',
    polycropSolution: 'SX1278 LoRa long-range transceivers coupled with dual-sensor anomaly verification (|T1 - T2|, |H1 - H2|)'
  }
];

export const systemArchitectureLayers: ArchitectureLayer[] = [
  {
    layer: 'Field Layer',
    components: 'Polytunnel rows (8m), cucumber grow bags, passive 13.56 MHz RFID tags, and drip irrigation lines',
    function: 'Represents the physical cultivation environment and localized sensing landmarks inside the polytunnel'
  },
  {
    layer: 'Sensing & Acquisition Layer',
    components: 'MFRC522 RFID reader, mobile optical camera, optical soil NPK probe, HC-SR04 ultrasonic sensor, dual DHT22 nodes',
    function: 'Collects high-resolution foliar imagery, plant identifiers, distance metrics, and environmental telemetry'
  },
  {
    layer: 'Processing & Decision Layer',
    components: 'YOLOv8 object detector, Mask R-CNN segmentation model, rule-based spraying logic, and dual-sensor anomaly filter',
    function: 'Performs leaf isolation, computes disease infection severity percentage, filters false readings, and triggers actuation states'
  },
  {
    layer: 'Actuation Layer',
    components: '2x 5V DC chemical pumps, L298N driver, directional servo nozzle, 3x solenoid pumps, 3x load cells, mechanical stirrer',
    function: 'Executes targeted foliar fungicide micro-dosing and stage-based NPK liquid nutrient blending into drip lines'
  },
  {
    layer: 'Cloud & Mobile Layer',
    components: 'Google Firebase Cloud Firestore, Realtime Database, and React Native mobile application',
    function: 'Maintains real-time plant state trees, synchronizes sensor telemetry, and provides a farmer monitoring and manual override dashboard'
  }
];