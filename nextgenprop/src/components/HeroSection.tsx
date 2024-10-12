import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/glass-city-metropark-drone-2.jpg"
        alt="Next Generation Properties Hero"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 text-center text-black px-4 sm:px-6 lg:px-8">
        <Image
          src="/logos/NPGLogo002.png"
          alt="Next Generation Properties Logo"
          width={400}
          height={400}
          className="mx-auto"
        />
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
        Building a Legacy, One Project at a Time
        </h1>
        <p className="text-white text-xl font-extrabold sm:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
        At Next Generation Properties, we are dedicated to delivering commercial property maintenance services with integrity and excellence. Since our founding in 2016, our mission has been to provide high-quality service that creates a lasting legacy, rooted in Christian values and a commitment to our clients.        </p>
        <Link href="/Contact" className="bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
        Discover Our Services
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
