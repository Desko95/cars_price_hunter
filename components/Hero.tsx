"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    // Handle scroll functionality or search action
  };

  return (
    <div className="hero flex items-center justify-between">
      {/* Left Input Section */}
      <div className="w-1/3 p-5">
        <div className="bg-gray-200 p-5 rounded-lg shadow-md">
          <input 
            type="text" 
            placeholder="Postcode" 
            className="border p-2 mb-3 rounded w-full"
          />
          <input 
            type="text" 
            placeholder="Range (miles)" 
            className="border p-2 mb-3 rounded w-full"
          />
          <input 
            type="text" 
            placeholder="Make" 
            className="border p-2 mb-3 rounded w-full"
          />
          <input 
            type="text" 
            placeholder="Model" 
            className="border p-2 mb-3 rounded w-full"
          />
          <div className="flex justify-between mb-3">
            <input 
              type="number" 
              placeholder="Min Price" 
              className="border p-2 rounded w-full mr-1"
            />
            <input 
              type="number" 
              placeholder="Max Price" 
              className="border p-2 rounded w-full ml-1"
            />
          </div>
          <CustomButton 
            title="Search" 
            containerStyles="bg-primary-blue text-white rounded-full mt-4 w-full" 
            handleClick={handleScroll} 
          />
        </div>
      </div>

      {/* Right Title and Subtitle Section */}
      <div className="flex-1 text-right pr-10">
        <h1 className="text-3xl font-bold mb-4">
          Find the Best Deals, Track the Best Prices
        </h1>
        <p className="mb-6">
          Stay Informed, Stay Ahead – Car Price Tracking Made Easy
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      {/* Right Image Section */}
      <div className="hero__image-container flex-1 relative">
        <div className="hero__image">
          <Image 
            src="/hero.png" 
            alt="hero" 
            fill 
            className="object-contain" 
          />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
