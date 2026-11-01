import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import LogoSection from '@/components/LogoSection';
import { getCachedPhotos } from '@/lib/gallery/cached';

export const metadata: Metadata = {
  title: 'Project Gallery | Next Generation Properties',
  description: 'Photos of commercial restoration, renovation and expansion projects by Next Generation Properties in Toledo, Ohio.',
};

export default async function GalleryPage() {
  const photos = await getCachedPhotos();
  return (
    <main className="bg-gray-700">
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-300 hover:text-white">&larr; Back to home</Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mt-6 mb-3">Project Gallery</h1>
          <p className="text-gray-200 text-center">Tap or point at a photo to see the project details.</p>
        </div>
      </section>
      <GalleryGrid photos={photos} />
      <div className="py-12 text-center">
        <Link href="/Contact" className="bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Start Your Project Today
        </Link>
      </div>
      <LogoSection />
    </main>
  );
}
