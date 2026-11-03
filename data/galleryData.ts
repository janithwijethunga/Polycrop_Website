import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: '4WD Mobile Platform in Polytunnel Row',
    category: 'polytunnel',
    imagePath: '/images/gallery/trial-01.jpg',
    description: 'Differential-drive robotic rover tracking the path line between cucumber grow bags in a commercial greenhouse[cite: 100].'
  },
  {
    id: 'gal-2',
    title: 'Precision Spray Nozzle Actuation',
    category: 'robotics',
    imagePath: '/images/gallery/spray-nozzle-action.jpg',
    description: 'Targeted 5V DC micro-pump spraying fungicide onto a localized foliar region infected with powdery mildew[cite: 100].'
  },
  {
    id: 'gal-3',
    title: 'Foliar Infection Area Segmentation',
    category: 'ai',
    imagePath: '/images/gallery/leaf-segmentation-masks.jpg',
    description: 'Mask R-CNN instance segmentation isolating diseased leaf areas from healthy canopy tissue[cite: 100].'
  },
  {
    id: 'gal-4',
    title: 'Cucumber Ripeness Depth Estimation',
    category: 'ai',
    imagePath: '/images/subsystems/fruit-sizing-ultrasonic.jpg',
    description: 'YOLOv8 bounding box combined with ultrasonic distance data to calculate real-world cucumber dimensions[cite: 73, 100].'
  },
  {
    id: 'gal-5',
    title: 'Automated 3-Tub NPK Mixer System',
    category: 'polytunnel',
    imagePath: '/images/subsystems/automated-mixer-tubes.jpg',
    description: 'Automated dosing apparatus containing solenoid pumps and strain-gauge load cells for stage-based fertigation[cite: 37, 38, 75].'
  },
  {
    id: 'gal-6',
    title: 'Farmer Supervision Mobile App',
    category: 'mobile_app',
    imagePath: '/images/gallery/mobile-app-dashboard.jpg',
    description: 'React Native mobile application displaying real-time plant health statuses, environmental telemetry, and manual overrides[cite: 43, 64].'
  }
];