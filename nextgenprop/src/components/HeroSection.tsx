import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-600">
      {/* <Image
        src="/hero-background.jpg"
        alt="Next Generation Properties Hero"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> */}
      <div className="z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <Image
          src="/logos/NextGeneration/1.svg"
          alt="Next Generation Properties Logo"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
        Building a Legacy, One Project at a Time
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
        At Next Generation Properties, we are dedicated to delivering commercial construction services with integrity and excellence. Founded in 2016 by Mario Dominguez, our mission is to create a lasting legacy for future generations, rooted in Christian values and family commitment.        </p>
        <Link href="/properties" className="bg-gray-800 hover:bg-gray-950 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
        Discover Our Services
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
