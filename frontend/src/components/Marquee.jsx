import React from "react";

const MarqueeText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#A855F7] py-6">
      <div className="animate-marquee text-[4rem] font-extrabold tracking-tighter text-black inline-block">
        <span className="mx-8 text-white">Marketing</span>
        <span className="mx-8 text-transparent stroke-white">Advertising</span>
        <span className="mx-8 text-white">Promotion</span>
        <span className="mx-8 text-transparent stroke-white">Marketing</span>
        <span className="mx-8 text-white">Advertising</span>
        <span className="mx-8 text-transparent stroke-white">Promotion</span>
        <span className="mx-8 text-white">Marketing</span>
        <span className="mx-8 text-transparent stroke-white">Advertising</span>
      </div>
    </div>
  );
};

export default MarqueeText;
