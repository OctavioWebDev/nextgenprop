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
      title: "Custom Construction Solutions",
      description: "We provide tailored construction services to meet the specific needs of your commercial project. From new builds to renovations, our team ensures that every detail aligns with your business objectives and vision."
    },
    {
      imageSrc: "/images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg",
      title: "Comprehensive Project Management",
      description: "Our experienced project managers oversee every phase of your construction project. We manage timelines, budgets, and quality control to ensure a smooth and successful completion."
    },
    {
      imageSrc: "/images/Maccord&Central/IMG_8279.JPG",
      title: "Facility Maintenance and Upgrades",
      description: "Beyond construction, we offer ongoing maintenance and upgrade services to keep your commercial facilities in top condition. Whether you need repairs, updates, or routine maintenance, we are here to support your business."
    },
    {
      imageSrc: "/images/Maccord&Central/IMG_8491.JPG",
      title: "Tenant Improvement Services",
      description: "We specialize in tenant improvements, providing custom build-outs and modifications to existing commercial spaces. Whether you're adapting a space for a new tenant or upgrading it to better suit your business needs, we deliver results that align with your vision."
    },
    {
      imageSrc: "/images/mediamodifier-I3HPUolh5hA-unsplash.jpg",
      title: "Pre-Construction Planning",
      description: "Our pre-construction services include site evaluation, budgeting, and planning to ensure your project is set up for success from the start. We work with you to anticipate challenges and develop strategies that keep your project on track."
    },
    {
      imageSrc: "/images/NagoyaPerrysburg/NAGOYA PERRYSBURG.jpg",
      title: "Design-Build Services",
      description: "We offer integrated design-build services, streamlining the construction process by combining the design and construction phases under one contract. This approach ensures cohesive project management, faster completion times, and cost savings for our clients."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
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