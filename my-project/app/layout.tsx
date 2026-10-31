import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Polycrop | IoT & Robotics Smart Polytunnel Research',
  description: 'An integrated IoT, robotics, and deep learning platform for precision cucumber disease detection, targeted spraying, and adaptive fertigation in Sri Lanka.',
  keywords: ['Smart Agriculture', 'Cucumber Cultivation', 'Agricultural Robotics', 'YOLOv8', 'Mask R-CNN', 'LoRa', 'SLIIT Research'],
  authors: [{ name: 'Janith Wijethunga' }, { name: 'P.S.S. Peiris' }, { name: 'C.M.D.D. Chandrasekara' }, { name: 'A.H.T.P.P. Thotahewa' }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FCFCFD] text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}