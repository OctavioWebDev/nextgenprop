import Image from 'next/image';

const companyLogos = [
  { src: "/logos/NPGLogo002.png", alt: "Next Generation Properties", href: "https://nextgenprop.vercel.app/" },
];

const LogoSection = () => {
  return (
    <div className="bg-gray-700 py-8 rounded-lg">
      <div className="flex justify-center items-center space-x-12">
        {companyLogos.map((logo, index) => (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
            <Image src={logo.src} alt={logo.alt} width={150} height={50} className="hover:opacity-80 transition-opacity" />
          </a>
        ))}
      </div>
      <div className="text-center mt-4 text-yellow-300">
        &copy; {new Date().getFullYear()} Next Generation Properties. All rights reserved.
      </div>
    </div>
  );
};

export default LogoSection;