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
    <section ref={sectionRef} className="py-16 bg-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Next Generation Properties</h2>
            <div className="space-y-4 text-white">
              <p>
              Next Generation Properties is a commercial property maintenance company offering a wide range of services, including restoration, mitigation, remodeling, and repair. Founded in 2016, our company is rooted in Christian values, with a mission to build more than just structures—we build trust, integrity, and excellence into every project.              </p>
              <p>
              At Next Generation Properties, we believe that all work should meet the highest standards of craftsmanship and commitment. We approach each project with a dedication to serving our clients' needs and exceeding their expectations.              </p>
              <p>
              Whether you're in need of property restoration, renovation, or expansion, we are dedicated to delivering quality services that reflect our core values—honesty, transparency, and respect for the communities we serve. From concept to completion, we stand ready to guide you through every step of the process with a commitment to excellence.              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/logos/NPGLogo002.png"
              alt="Next Generation Properties Logo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

