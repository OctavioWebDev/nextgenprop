'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const scriptures = [
  {
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
    reference: "Colossians 3:23",
    image: "/logos/NextGeneration/1.svg"
  },
  {
    text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    reference: "Galatians 6:9",
    image: "/logos/NextGeneration/1.svg"
  },
  {
    text: "The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.",
    reference: "Proverbs 21:5",
    image: "/logos/NextGeneration/1.svg"
  }
];

const ScriptureSection = () => {
  const [currentScripture, setCurrentScripture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScripture((prev) => (prev + 1) % scriptures.length);
    }, 5000); // Change scripture every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">The Word Of God</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-xl italic text-white mb-6 transition-opacity duration-500">
              "{scriptures[currentScripture].text}"
            </p>
            <div className="flex flex-col items-center">
              <Image
                src={scriptures[currentScripture].image}
                alt="Next Generation Properties Logo"
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <p className="font-semibold text-white">{scriptures[currentScripture].reference}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptureSection;