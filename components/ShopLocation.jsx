"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ShopLocation = () => {
  // Intersection observer hook to trigger animations
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Animation will trigger once when the element enters the view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="flex flex-col mb-16 md:flex-row items-center justify-center max-w-7xl mx-auto mt-20 p-8 bg-transparent">
      {/* Left Side: Text Content */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 p-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Visit Our Shop</h2>
        <p className="text-white mb-6 leading-relaxed">
          Come and enjoy our warm atmosphere and delicious offerings. Whether you're here for a quick coffee or a full meal, our shop is the perfect place to relax and recharge.
        </p>
        <p className="text-white font-medium">
          <span className="block mb-1">📍 Location:</span>
          123 Main Street, Dinajpur, Bangladesh
        </p>
        <p className="text-white font-medium mt-4">
          <span className="block mb-1">🕒 Hours:</span>
          Monday - Saturday: 8:00 AM - 10:00 PM<br />
          Sunday: Closed
        </p>
      </motion.div>

      {/* Right Side: Embedded Google Map (Animated) */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-80 md:h-[400px] p-4"
      >
        {/* Replace with actual Google Map iframe if needed */}
        <Image width={500} height={500} src="/images/fhg.png" alt="map" className="rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
};

export default ShopLocation;
