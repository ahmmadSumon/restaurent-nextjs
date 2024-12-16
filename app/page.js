import Hero from "@/components/Hero-section";
import HomeDelivery from "@/components/HomeDelivery";
import Menu from "@/components/Menu";
import Navbar from "@/components/Nav";
import Party from "@/components/Party";
import ReservationSection from "@/components/ReservationSection";
import { TabsDemo } from "@/components/TabsDemo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Party/>
      <Menu/>
      <ReservationSection/>
      <WhyChooseUs/>
      <HomeDelivery/>
    </div>
  );
}
