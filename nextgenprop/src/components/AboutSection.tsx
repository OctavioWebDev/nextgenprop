'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Next Generation Properties</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Next Generation Properties was founded in 2016 by Mario Dominguez, a devoted father and man of faith, with a vision to build a lasting legacy for his sons. Rooted in Christian values, our company is more than just a real estate business; it is a testament to the importance of family, faith, and passing on something meaningful to the next generation.
              </p>
              <p>
                At Next Generation Properties, we believe in serving our clients with integrity, commitment, and excellence. Our approach is guided by the principle that all work should be done as if for the Lord, and this philosophy permeates everything we do—from the properties we manage to the relationships we build.
              </p>
              <p>
                We are dedicated to providing high-quality real estate services while upholding the values that have been passed down through generations. Whether you're looking to buy, sell, or rent a property, we are here to guide you every step of the way with honesty, transparency, and a heart for service.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/117180611_10223613216338087_3212582951053983145_n.jpg"
              alt="Next Generation Properties Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
