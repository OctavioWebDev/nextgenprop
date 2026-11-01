import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import PhotoGalleryComponent from '@/components/photo-gallary';
import LogoSection from '../components/LogoSection';
import ServiceRequestHelper from '../components/ServiceRequestHelper';

interface Photo {
  id: string
  url: string
  description: string
}

const photoData: Photo[][] = [
  [
    {
      id: '1',
      url: '/images/BenchMark/20171106-183809-largejpg.jpg',
      description: 'Benchmark',
    },
    {
      id: '2',
      url: '/images/BenchMark/l.jpg',
      description: 'Benchmark',
    },
  ],
  [
    {
      id: '3',
      url: '/images/BenchMark/ls.jpg',
      description: 'Benchmark',
    },
    {
      id: '4',
      url: '/images/Maccord&Central/IMG_8277.JPG',
      description: 'McCord & Central',
    },
  ],
  [
    {
      id: '5',
      url: '/images/Maccord&Central/IMG_8279.JPG',
      description: 'McCord & Central',
    },
    {
      id: '6',
      url: '/images/Maccord&Central/IMG_8491.JPG',
      description: 'McCord & Central',
    },
    {
      id: '7',
      url: '/images/NagoyaPerrysburg/NAGOYA PERRYSBURG.jpg',
      description: 'Nagoya Perrysburg',
    },
    {
      id: '8',
      url: '/images/IMG_6491.png',
      description: 'Nagoya Perrysburg',
    },
  ],
]

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServiceRequestHelper />
      <TestimonialSection />
      <PhotoGalleryComponent photos={photoData} />
      <CallToActionSection />
      <LogoSection />
    </main>
  );
}