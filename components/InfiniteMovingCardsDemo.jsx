"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (
    <div className="mt-40 ">
        <h2 className="text-center text-2xl md:text-5xl font-bold">Whats ours customers says</h2>
            <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
    </div>)
  );
}

const testimonials = [
    {
      quote:
        "The food was absolutely exquisite! From the first bite to the last, every dish was a delightful experience. I’ll definitely be coming back for more.",
      name: "Emily Carter",
      title: "Food Critic, Dine & Delight Magazine",
    },
    {
      quote:
        "An outstanding dining experience! The atmosphere was cozy, and the service was impeccable. Highly recommended for food lovers.",
      name: "James Parker",
      title: "Local Guide",
    },
    {
      quote:
        "I had the best meal of my life here. The flavors were rich, fresh, and perfectly balanced. This restaurant is a hidden gem!",
      name: "Sophia Martinez",
      title: "Chef & Food Enthusiast",
    },
    {
      quote:
        "From the moment we walked in, the ambiance was inviting. The staff were incredibly attentive, and the food was divine. Five stars all the way!",
      name: "Oliver Bennett",
      title: "Travel Blogger",
    },
    {
      quote:
        "If you’re looking for a place with fantastic food and an unforgettable dining experience, this is it. Every dish tells a story, and it’s a delicious one!",
      name: "Isabella Thompson",
      title: "Food Blogger",
    },
  ];
  