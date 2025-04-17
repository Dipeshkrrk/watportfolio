import React from "react";

const MarqueeText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#A855F7] py-6">
      <div className="animate-marquee text-[4rem] font-extrabold tracking-tighter text-black inline-block">
        <span className="mx-8 text-white">Ecom</span>
        <span className="mx-8 text-transparent stroke-white">Real Estate</span>
        <span className="mx-8 text-white">Construction</span>
        <span className="mx-8 text-transparent stroke-white">Ecom</span>
        <span className="mx-8 text-white">Real Estate</span>
        <span className="mx-8 text-transparent stroke-white">Clinic's</span>
        <span className="mx-8 text-white">Marketing</span>
        <span className="mx-8 text-transparent stroke-white">SAAS</span>
      </div>
    </div>
  );
};

export default MarqueeText;
