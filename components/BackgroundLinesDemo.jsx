import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center my-20 w-full flex-col px-4">
     <InfiniteMovingCardsDemo/>
    </BackgroundLines>)
  );
}
