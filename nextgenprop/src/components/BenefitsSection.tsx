import Image from 'next/image';

const BenefitCard = ({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) => (
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

const BenefitsSection = () => {
  const benefits = [
    {
      imageSrc: "/images/aaron-burden-I57ErM93uZQ-unsplash.jpg",
      title: "Integrity",
      description: "Our commitment to Christian values means that integrity is at the core of our construction projects. We believe in honest, transparent dealings with all our clients, ensuring that your experience with us is built on trust and reliability."
    },
    {
      imageSrc: "/images/45926897_10217805970360567_3330581532699000832_n.jpg",
      title: "Service",
      description: "As a family-operated business, we understand the importance of creating structures that stand the test of time. We treat every project with the same care and dedication as if we were building for our own family, ensuring that your vision becomes a reality."
    },
    {
      imageSrc: "/images/christian-lue-xr_j6zesBUE-unsplash.jpg",
      title: "Quality",
      description: "Founded by Mario Dominguez with the vision of passing on a lasting legacy, Next Generation Properties is dedicated to excellence in every aspect of our work. Our commitment to quality ensures that your construction project is completed to the highest standards, providing a strong foundation for future generations."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Why NGP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;