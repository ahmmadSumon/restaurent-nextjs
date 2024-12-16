"use client";
import { useState, useEffect } from "react";
import { foodItems, drinkItems } from "../data";
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TabsDemo() {
  // State to manage the active tab based on time
  const [activeTab, setActiveTab] = useState("breakfast");

  // Determine the active tab based on the current time
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 11) {
      setActiveTab("breakfast"); // Morning (5 AM to 10:59 AM)
    } else if (currentTime >= 11 && currentTime < 17) {
      setActiveTab("lunch"); // Midday (11 AM to 4:59 PM)
    } else if (currentTime >= 17 && currentTime < 22) {
      setActiveTab("dinner"); // Evening (5 PM to 9:59 PM)
    } else {
      setActiveTab("drinks"); // Night (10 PM to 4:59 AM)
    }
  }, []);

  // Tab definitions
  const tabs = [
    {
      title: "Breakfast",
      value: "breakfast",
      content: (
        <MenuTabContent
          title="Breakfast Items"
          items={foodItems.filter((item) => item.category === "Breakfast")}
        />
      ),
    },
    {
      title: "Lunch",
      value: "lunch",
      content: (
        <MenuTabContent
          title="Lunch Items"
          items={foodItems.filter((item) => item.category === "Lunch")}
        />
      ),
    },
    {
      title: "Dinner",
      value: "dinner",
      content: (
        <MenuTabContent
          title="Dinner Items"
          items={foodItems.filter((item) => item.category === "Dinner")}
        />
      ),
    },
    {
      title: "Drinks",
      value: "drinks",
      content: (
        <MenuTabContent title="Drinks" items={drinkItems} />
      ),
    },
  ];

  return (
    <div className="h-[40rem] md:h-[60rem] [perspective:1000px] relative flex flex-col max-w-8xl mx-auto w-full items-center justify-start my-10">
      <h1 className="text-center text-6xl font-extrabold flex justify-center items-center my-5">MENU</h1>
      {/* Tabs Component */}
      <Tabs tabs={tabs} defaultActiveTab={activeTab} />
    </div>
  );
}

// Component for Tab Content
const MenuTabContent = ({ title, items }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white 
      backdrop-filter backdrop-blur-lg bg-transparent shadow-2xl border border-white/20">
      <h2 className="text-center text-3xl mb-5">{title}</h2>
      <MenuCarousel items={items} />
    </div>
  );
};

// Carousel Component
const MenuCarousel = ({ items }) => {
  return (
    <Carousel opts={{ align: "center" }} className="w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-3">
              <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-baseline justify-baseline px-5 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="font-bold mt-2 text-white">{item.price}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
