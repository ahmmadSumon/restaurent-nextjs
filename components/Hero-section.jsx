import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="hero md:h-[70vh] flex justify-center items-center relative overflow-hidden  bg-cover bg-center"  style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="hero-content flex flex-col gap-8 items-center justify-center px-4 md:px-20 lg:px-40"   >
        <div className="container flex flex-col md:flex-row justify-between items-center mt-2 py-4 space-y-8 md:space-y-0">
          
          {/* Left column (text content) */}
          <div
            className="w-full md:w-[40vw] relative bg-cover bg-center rounded-lg p-6"
            // Add your image path here
          >
            <div className="bg-opacity-60 py-6 rounded-lg">
              <h1 className="text-4xl md:text-7xl font-extrabold w-full">
                The best food experience in <span className='text-[#F14321]'> Parbatipur</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href="/menu" passHref>
                  <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"> Order Online</button>
                </Link>
                <Link href="/table" passHref>
                  <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"> Book a Table</button>
                </Link>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
