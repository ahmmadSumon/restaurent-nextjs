"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeDelivery = () => {
  // Intersection observer hook to trigger animations for text and image
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Animation will trigger once when the element enters the view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true, // Animation will trigger once when the element enters the view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div className="container mx-auto my-10 py-10 px-8 text-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 lg:pr-8">
        {/* Animate text section */}
        <motion.div
           // Set the duration of the animation to 1 second
          className="text-center lg:text-left"
        >
          <h5 className="font-secondary py-3 text-2xl font-normal uppercase tracking-widest text-[#F14321]">
            Home Delivery
          </h5>
          <h2 className="mb-5 text-4xl font-bold">Enjoy Our Delicious Food at Home</h2>
        </motion.div>

        {/* Animate description text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}  // Same as above, start with opacity 0 and slide up
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}  // Trigger animation on view
          transition={{ duration: 0.2, delay: textInView ? 0.1 : 0 }}  // Only delay if on desktop
          className="mb-6"
        >
          <p className="text-lg leading-relaxed">
            We are excited to offer home delivery services so you can enjoy our delicious food from the comfort of your own home. Our delivery service is fast, reliable, and ensures your food arrives hot and fresh.
          </p>
        </motion.div>

        {/* Animate Terms & Conditions */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}  // Initial state for opacity and sliding
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}  // Trigger when the element is in view
          transition={{ duration: 0.5, delay: textInView ? 0.4 : 0 }}  // Adjust delay based on view state
          className="mb-6"
        >
          <h3 className="text-2xl font-bold mb-3">Terms and Conditions</h3>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Delivery is available within a 10-mile radius of our restaurant.</li>
            <li>There is a minimum order amount of 500 TK for delivery.</li>
            <li>Delivery charges of 50 TK apply to all orders under 1000 TK.</li>
            <li>Delivery is free for orders above 1000 TK.</li>
            <li>Estimated delivery time is between 30-45 minutes depending on your location and order volume.</li>
            <li>We accept cash on delivery, credit/debit cards, and mobile payments.</li>
            <li>Please ensure someone is available to receive the order at the delivery address provided.</li>
            <li>Orders cannot be canceled once confirmed and dispatched.</li>
          </ul>
        </motion.div>

        {/* Animate button */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0 }}  // Start with opacity 0
          animate={{ opacity: textInView ? 1 : 0 }}  // Fade in when textInView is true
          transition={{ duration: 0.5, delay: textInView ? 0.6 : 0 }}  // Adjust delay for button
          className="text-center lg:text-left"
        >
          <Link href='/menu'>
            <button className="mt-4 px-6 py-3 bg-[#F14321] text-white rounded-lg hover:bg-red-600 transition duration-300">
              Order Now
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Animate image */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 50 }}  // Start with opacity 0 and slide in from the right (50px)
        animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 50 }}  // Fade and slide in from the right
        transition={{ duration: 0.5 }}  // Duration for the image animation
        className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
      >
        <Image
          src='/images/deli.png'
          height={800}
          width={800}
          alt="Delivery"
          className="rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HomeDelivery;
