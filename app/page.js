import Footer from "@/components/Footer";
import Hero from "@/components/Hero-section";
import HomeDelivery from "@/components/HomeDelivery";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Menu from "@/components/Menu";
import Navbar from "@/components/Nav";
import Party from "@/components/Party";
import ReservationSection from "@/components/ReservationSection";
import ShopLocation from "@/components/ShopLocation";
import { TabsDemo } from "@/components/TabsDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     
      <Hero/>
      <Party/>
      <Menu/>
      <ReservationSection/>
      <WhyChooseUs/>
      <HomeDelivery/>
      <InfiniteMovingCardsDemo/>
      <ShopLocation/>
 
    </div>
  );
}
