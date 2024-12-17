import Image from "next/image";
import React from "react";

const ShopLocation = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto p-8 bg-transparent">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 p-6">
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
      </div>

      {/* Right Side: Embedded Google Map */}
      <div className="w-full md:w-1/2 h-80 md:h-[400px] p-4">
        {/* <iframe
          title="Shop Location"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Dinajpur,Bangladesh"
          allowFullScreen
        ></iframe> */}
        <Image width={1000} height={1000} src="/map.jpg" alt="map"/>
      </div>
    </section>
  );
};

export default ShopLocation;
