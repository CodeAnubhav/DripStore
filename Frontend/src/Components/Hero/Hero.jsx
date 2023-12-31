import React from "react";

const Hero = () => {
  return (
    <div className="relative font-sans">
      <img
        src="https://assets.bonkerscorner.com/uploads/2023/07/23231909/main_banner_web.jpg"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[400px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-5xl text-3xl font-bold mb-6">
          Explore the Latest Collection
        </h2>
        <a
          href="javascript:void(0)"
          className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Latest Collection
        </a>
      </div>
    </div>
  );
};

export default Hero;
