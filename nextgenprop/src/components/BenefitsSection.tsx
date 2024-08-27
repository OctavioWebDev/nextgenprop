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
      imageSrc: "/images/jesse-orrico-L94dWXNKwrY-unsplash.jpg",
      title: "Integrity",
      description: "We build our reputation on honesty and transparency. Every project is a promise to deliver what we’ve committed to, ensuring your trust is earned and valued at every step."
    },
    {
      imageSrc: "/images/45926897_10217805970360567_3330581532699000832_n.jpg",
      title: "Service",
      description: "We treat every project as if it were our own. Your vision is our mission, and we are dedicated to turning it into a reality with the utmost care and professionalism."
    },
    {
      imageSrc: "/images/cory-woodward-JUqmfHPJNE8-unsplash.jpg",
      title: "Quality",
      description: "Excellence is our standard. From the materials we choose to the craftsmanship we apply, every detail is handled with precision, ensuring your project stands strong for years to come."
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