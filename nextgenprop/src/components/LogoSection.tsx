'use client'

import Image from 'next/image';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./ui/Map'), { ssr: false });

const companyLogos = [
  { src: "/logos/NPGLogo002.png", alt: "Next Generation Properties", href: "https://nextgenprop.vercel.app/" },
];

const LogoSection = () => {
  // Approximate coordinates for 2857 Airport Hwy, Toledo, OH 43609
  const latitude = 41.6288;
  const longitude = -83.5850;

  return (
    <div className="bg-gray-700 py-8 rounded-lg">
      <div className="px-4 mb-8 space-y-6 md:space-y-0 md:flex md:space-x-6">
        <div className="bg-gray-600 p-4 rounded-lg md:w-1/2">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">Next Generation Properties</h3>
          <p className="text-white">2857 Airport Hwy</p>
          <p className="text-white">Toledo, OH 43609</p>
          <p className="text-white">Phone: (419) 381-1855</p>
          {/* <p className="text-white">Email: info@nextgenprop.com</p> */}
        </div>
        {/* Map */}
        <div className="bg-gray-600 p-4 rounded-lg md:w-1/2 h-48">
          <Map 
            center={[latitude, longitude]} 
            zoom={15} 
            markerPosition={[latitude, longitude]}
            popupText="Next Generation Properties<br/>2857 Airport Hwy, Toledo, OH 43609"
          />
        </div>
      </div>
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
