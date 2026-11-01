import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import Link from 'next/link';
import PhotoGalleryComponent from '@/components/photo-gallary';
import { getCachedPhotos } from '@/lib/gallery/cached';
import type { GalleryPhoto } from '@/lib/gallery/types';
import LogoSection from '../components/LogoSection';

// Also picks up gallery changes on its own every hour (see lib/gallery/cached.ts).
export const revalidate = 3600;

// The home strip shows the newest photos, dealt across its three flipping tiles.
function groupForStrip(photos: GalleryPhoto[], tiles = 3, perTile = 3): GalleryPhoto[][] {
  const groups: GalleryPhoto[][] = Array.from({ length: tiles }, () => []);
  photos.slice(0, tiles * perTile).forEach((photo, i) => groups[i % tiles].push(photo));
  return groups.filter((g) => g.length > 0);
}

export default async function Home() {
  const photos = await getCachedPhotos();
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <PhotoGalleryComponent photos={groupForStrip(photos)} />
      <div className="bg-gray-700 py-8 text-center">
        <Link href="/gallery" className="bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          See All Project Photos
        </Link>
      </div>
      <CallToActionSection />
      <LogoSection />
    </main>
  );
}