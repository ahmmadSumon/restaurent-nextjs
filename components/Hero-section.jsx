"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
    },
    hover: { scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' },
  };

  return (
    <section
      className="hero md:h-[70vh] mt-20 flex justify-center items-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/bg.jpg)' }}
    >
      <motion.div
        className="hero-content flex flex-col gap-8 items-center justify-center px-4 md:px-20 lg:px-40"
        initial="hidden"
        animate="visible"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center mt-2 py-4 space-y-8 md:space-y-0">
          {/* Left column (text content) */}
          <motion.div
            className="w-full md:w-[40vw] relative bg-cover bg-center rounded-lg p-6"
            variants={textVariants}
          >
            <div className="bg-opacity-60 py-6 rounded-lg">
              <motion.h1
                className="text-4xl md:text-7xl font-extrabold w-full"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                The best food experience in{' '}
                <span className="text-[#F14321]">Parbatipur</span>
              </motion.h1>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link href="/menu" passHref>
                    <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300">
                      Order Online
                    </button>
                  </Link>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link href="/reservation" passHref>
                    <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300">
                      Book a Table
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
