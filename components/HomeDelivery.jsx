"use client";
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

const HomeDelivery = () => {
  return (
    <div className="container mx-auto my-10 py-10 px-8  text-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 lg:pr-8">
        <div className="text-center lg:text-left animate-fadeInUp">
          <h5 className="font-secondary py-3 text-2xl font-normal uppercase tracking-widest text-[#F14321]">Home Delivery</h5>
          <h2 className="mb-5 text-4xl font-bold">Enjoy Our Delicious Food at Home</h2>
        </div>
        <div className="mb-6">
          <p className="text-lg leading-relaxed">
            We are excited to offer home delivery services so you can enjoy our delicious food from the comfort of your own home. Our delivery service is fast, reliable, and ensures your food arrives hot and fresh.
          </p>
        </div>
        <div className="mb-6">
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
        </div>
        <div className="text-center lg:text-left">
          <Link href='/menu'>
          <button className="mt-4 px-6 py-3 bg-[#F14321] text-white rounded-lg hover:bg-red-600 transition duration-300">
            Order Now
          </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <Image src='/images/deli.png' height={1000} width={1000} alt="Delivery" className="rounded-lg shadow-lg object-cover" />
      </div>
    </div>
  );
};

export default HomeDelivery;
