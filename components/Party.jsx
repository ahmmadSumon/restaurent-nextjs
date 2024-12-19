"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Party = () => {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
    hover: { scale: 1.05, y: -4, transition: { duration: 0.3 } },
  };

  return (
    <div className="py-12">
      <motion.div
        className="flex flex-col justify-center items-center gap-3"
        initial="hidden"
        animate="visible"
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-xl"
          variants={textVariants}
        >
          You Bring the Party, We Bring the Food
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-center"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Skip basic and bring excitement to your next event with Chubby's Jamaican Catering. Our full service-menu can be customized for any event, available for pickup and delivery.
        </motion.p>

        {/* Animated Button */}
        <Link href="/menu">
          <motion.button
            className="bg-[#F14321] text-xl text-white px-4 py-3 rounded-xl transform transition-transform"
            variants={buttonVariants}
            whileHover="hover"
          >
            Order Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Party;
