'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "Next Generation Properties helped us find our dream home. Their personalized approach and faith-based guidance made all the difference.",
    name: "John & Sarah Smith",
    image: "/logos/NextGeneration/1.svg"
  },
  {
    text: "I've never worked with a more dedicated and honest real estate team. They truly put our family's needs first.",
    name: "Michael Johnson",
    image: "/logos/NextGeneration/1.svg"
  },
  {
    text: "The community-focused listings were exactly what we were looking for. We found not just a house, but a home in a wonderful neighborhood.",
    name: "Emily Davis",
    image: "/logos/NextGeneration/1.svg"
  }
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-xl italic mb-6 transition-opacity duration-500">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex flex-col items-center">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
