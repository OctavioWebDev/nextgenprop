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
                Founded in 2016 by Mario Dominguez, Next Generation Properties is a family-driven commercial construction company rooted in Christian values. Mario, a devoted father and man of faith, started the company with a vision to create a lasting legacy through quality construction that stands the test of time.
              </p>
              <p>
                At Next Generation Properties, our mission is to build more than just structures; we build trust, integrity, and excellence into every project. Guided by the belief that all work should be done with the highest standards of craftsmanship and commitment, we approach each project with a dedication to serving our clients' needs and exceeding their expectations.
              </p>
              <p>
                From concept to completion, we are dedicated to delivering commercial construction services that reflect our core values—honesty, transparency, and a deep respect for the communities we serve. Whether you're embarking on a new build, renovation, or expansion, we stand ready to guide you every step of the way with a commitment to quality and a heart for service.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/logos/NextGeneration/1.svg"
              alt="Next Generation Properties Logo"
              width={400}
              height={400}
              className="rounded-full bg-gray-600 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

