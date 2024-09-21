import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import PhotoGalleryComponent from '@/components/photo-gallary';
import LogoSection from '../components/LogoSection';

interface Photo {
  id: string
  url: string
  description: string
  date: Date
}

const photoData: Photo[][] = [
  [
    {
      id: '1',
      url: '/images/BenchMark/20171106-183809-largejpg.jpg',
      description: 'BenchMark',
      date: new Date('2023-05-01'),
    },
    {
      id: '2',
      url: '/images/BenchMark/l.jpg',
      description: 'BenchMark',
      date: new Date('2023-05-15'),
    },
  ],
  [
    {
      id: '3',
      url: '/images/BenchMark/ls.jpg',
      description: 'BenchMark',
      date: new Date('2023-06-01'),
    },
    {
      id: '4',
      url: '/images/Maccord&Central/IMG_8277.JPG',
      description: 'Maccord&Central',
      date: new Date('2023-06-15'),
    },
  ],
  [
    {
      id: '5',
      url: '/images/Maccord&Central/IMG_8279.JPG',
      description: 'Maccord&Central',
      date: new Date('2023-07-01'),
    },
    {
      id: '6',
      url: '/images/Maccord&Central/IMG_8491.JPG',
      description: 'Maccord&Central',
      date: new Date('2023-07-15'),
    },
    {
      id: '7',
      url: '/images/NagoyaPerrysburg/NAGOYA PERRYSBURG.jpg',
      description: 'NagoyaPerrysburg',
      date: new Date('2023-07-15'),
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
      <TestimonialSection />
      <PhotoGalleryComponent photos={photoData} />
      <CallToActionSection />
      <LogoSection />
    </main>
  );
}