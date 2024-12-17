import React from "react";
import { Button } from "@/components/ui/button"; // Import from generated ShadCN UI components
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet component
import { Menu, ShoppingBag, Home, Globe,Bike } from "lucide-react"; // Icons from Lucide React
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 py-10  ">
      {/* Left Section - Desktop */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="flex items-center text-lg font-medium hover:text-gray-400">
          Home
        </a>
        <a href="/menu" className="flex items-center text-lg font-medium hover:text-gray-400">
          Menu
        </a>
        <a href="/contact" className="flex items-center text-lg font-medium hover:text-gray-400">
         Contact Us
        </a>
      </div>

      {/* Center Section - Logo */}
      <div className="text-2xl font-bold hover:text-gray-400">
        <a href="/">FOODIES</a>
      </div>
    
      {/* Right Section - Desktop */}
      <div className="hidden md:flex space-x-4 ">
        <Button   asChild>
          <a href="/order"><Bike className="w-5 h-5 mr-2"/>Order Online</a>
        </Button>
        <Button asChild>
          <a href="/order" className="flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Cart
          </a>
        </Button>
        <Button   asChild>
          <a href="/reservation">Reservation</a>
        </Button>
      </div>

      {/* Mobile Menu (Sheet) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="ghost">
  <TiThMenu  style={{ width: "30px", height: "30px" }}/> {/* This should set the icon size to 36px */}
</Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#001100] text-white w-64">
            <SheetHeader>
              <h2 className="text-lg font-bold">Menu</h2>
            </SheetHeader>
            <div className="flex flex-col mt-4 space-y-4">
              <a href="/" className="flex items-center text-lg font-medium hover:text-gray-400">
                <Home className="w-5 h-5 mr-2" />
                Home
              </a>
              <a href="/menu" className="flex items-center text-lg font-medium hover:text-gray-400">
                <Globe className="w-5 h-5 mr-2" />
                Explore
              </a>
              <a href="/order" className="flex items-center text-lg font-medium hover:text-gray-400">
                Order Online
              </a>
              <a href="/reservation" className="flex items-center text-lg font-medium hover:text-gray-400">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Cart
              </a>
              <a href="/reservation" className="flex items-center text-lg font-medium hover:text-gray-400">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Cart
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
