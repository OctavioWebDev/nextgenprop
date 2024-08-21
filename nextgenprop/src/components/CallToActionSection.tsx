import Image from 'next/image';
import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="relative py-20">
      <Image
        src="/images/blake-wheeler-zBHU08hdzhY-unsplash.jpg"
        alt="Call to Action Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in-section">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Find Your Next Home?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          At Next Generation Properties, we're here to guide you every step of the way. Whether you're searching for your dream home, an investment property, or a place to grow your business, our team is committed to helping you find the perfect fit. With our faith-driven approach and dedication to excellence, you can trust that you're in good hands.
        </p>
        <Link href="/contact" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;

