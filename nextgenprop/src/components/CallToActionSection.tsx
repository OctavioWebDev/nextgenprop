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
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Build Your Next Project?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          At Next Generation Properties, we specialize in bringing your commercial construction visions to life. Whether you're planning a new build, a renovation, or an expansion, our experienced team is here to ensure your project is executed with precision and care. Let’s work together to create a lasting impact.
        </p>
        <Link href="/Contact" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Start Your Project Today
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;