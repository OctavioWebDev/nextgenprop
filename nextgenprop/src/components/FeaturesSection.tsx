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
      <h3 className="text-2xl text-center text-gray-600 font-bold">{title}</h3>
      <p className="text-gray-600 p-6">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "/images/Maccord&Central/IMG_8277.JPG",
      title: "Property Restoration",
      description: "We provide expert property restoration services, ensuring that your commercial space is restored to its optimal condition after damage or wear, with attention to detail and high-quality craftsmanship."
    },
    {
      imageSrc: "/images/Maccord&Central/IMG_8491.JPG",
      title: "Property Expansion Services",
      description: "We specialize in property expansion, allowing you to adapt your space as your business grows. Our team ensures seamless integration of new spaces into existing properties."
    },
    {
      imageSrc: "/images/Maccord&Central/IMG_8279.JPG",
      title: "Facility Renovation and Upgrades",
      description: "Our renovation and upgrade services help enhance the functionality and appearance of your property, ensuring that it meets the evolving needs of your business."
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Our Services</h2>
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