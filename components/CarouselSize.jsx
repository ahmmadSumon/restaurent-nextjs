"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function CarouselWithSixItems() {
  const items = Array.from({ length: 12 }); // Example with 12 items (you can replace this with your data)

  return (
    <div className="flex items-center justify-center h-screen">
      <Carousel
        opts={{
          align: "start", // Align items at the start
          containScroll: "trim", // Prevent scrolling outside the bounds
        }}
        className="w-full "
      >
        <CarouselContent>
          {items.map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 flex-grow-0 flex-shrink-0 px-2" // Set width to 1/6 of the container
            >
              <div className="p-4 text-center bg-gray-200 rounded-md ">
                <h2 className="text-xl font-bold">Item {index + 1}</h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
