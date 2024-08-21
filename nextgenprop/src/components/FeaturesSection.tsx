import Image from 'next/image';

const FeatureCard = ({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={300}
      className="w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "/images/redd-f-sejLyCD2UQE-unsplash.jpg",
      title: "Custom Construction Solutions",
      description: "We offer tailored construction services that meet the unique needs of your commercial project. Whether you’re building a new facility or renovating an existing structure, we work closely with you to ensure your vision is brought to life with precision and care."
    },
    {
      imageSrc: "/images/thays-orrico-JaOOQIfRC5I-unsplash.jpg",
      title: "Community-Focused Listings",
      description: "We understand the importance of finding a home within a supportive and thriving community. That's why we prioritize properties in neighborhoods that foster a sense of belonging, safety, and shared values. We provide detailed insights into the local community, schools, and amenities to help you make an informed decision."
    },
    {
      imageSrc: "/images/tim-graf-ErO0E8wZaTA-unsplash.jpg",
      title: "Experienced Project Management",
      description: "With years of experience in commercial construction, our team provides comprehensive project management from start to finish. We handle every detail, ensuring that your project is completed on time, within budget, and to the highest standards."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Set Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
