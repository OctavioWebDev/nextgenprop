import Image from 'next/image';
import Link from 'next/link';

const companyLogos = [
  { src: "/logos/NextGeneration/DominguezLogo2.png", alt: "Dominguez Properties", href: "https://dominguezprop.vercel.app/" },
  { src: "/logos/NextGeneration/INTEGRITY.LOGO-NB-small.png", alt: "Integrity Wall and Ceiling", href: "https://www.iwctoledo.com/", needsBackground: true },
  { src: "/logos/NextGeneration/1.svg", alt: "Next Generation Properties", href: "https://nextgenprop.vercel.app/" },
];

const LogoSection = () => {
  return (
    <div className="bg-white bg-opacity-10 py-8 rounded-lg">
      <div className="flex justify-center items-center space-x-12">
        {companyLogos.map((logo, index) => (
          <Link key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
            <div className={logo.needsBackground ? "bg-white p-2 rounded" : ""}>
              <Image src={logo.src} alt={logo.alt} width={150} height={50} className="hover:opacity-80 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;