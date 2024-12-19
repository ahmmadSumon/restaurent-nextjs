"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReservationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  // Hook to track when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component comes into view
    threshold: 0.1, // Trigger when 20% of the component is in view
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show success message
  };

  const handleBookAnother = () => {
    setIsSubmitted(false); // Reset the form view
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="container mt-20 mx-auto py-5 px-4 md:px-0">
      <motion.h5
        className="text-white text-center py-5 font-semibold uppercase tracking-widest text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Reservation
      </motion.h5>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          // Attach the ref to trigger the animation when in view
          className="md:col-span-1"
          
         // Trigger animation when in view
          variants={containerVariants}
        >
          <div className="relative h-full">
            <Image
              src="/re.jpg"
              width={1000}
              height={1000}
              alt="Video Thumbnail"
              className="w-[800px] h-[600px] object-cover overflow-hidden"
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref} // Attach the ref to trigger the animation when in view
          className="md:col-span-1 bg-transparent flex items-center justify-center p-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger animation when in view
          variants={containerVariants}
          transition={{ delay: 0.3 }}
        >
          <div>
            {isSubmitted ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-white text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-gray-300 text-lg">
                  Your table is booked. Our team will contact you shortly.
                </p>
                <motion.button
                  onClick={handleBookAnother}
                  className="mt-4 bg-[#F14321] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300"
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  Book Another Table
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-white text-4xl font-bold mb-4">
                  Book A Table Online
                </h1>
                <form onSubmit={handleSubmit}>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="col-span-1">
                      <label htmlFor="name" className="block text-gray-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="email" className="block text-gray-400">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="datetime" className="block text-gray-400">
                        Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        id="datetime"
                        className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label htmlFor="select1" className="block text-gray-400">
                        No Of People
                      </label>
                      <select
                        id="select1"
                        className="form-select bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                        required
                      >
                        <option value="1">One Person</option>
                        <option value="2">Two People</option>
                        <option value="3">5-10 People</option>
                        <option value="4">More than 10 People</option>
                      </select>
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="message" className="block text-gray-400">
                        Special Request
                      </label>
                      <textarea
                        id="message"
                        className="form-textarea bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                        placeholder="Special Request"
                        rows={3}
                      ></textarea>
                    </div>
                    <motion.div
                      className="col-span-full"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.7, delay: 0.8 }}
                    >
                      <button
                        className="bg-[#F14321] text-white py-3 w-full rounded-lg hover:bg-opacity-90 transition duration-300"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationSection;
