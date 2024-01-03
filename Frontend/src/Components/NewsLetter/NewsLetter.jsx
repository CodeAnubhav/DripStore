import React from "react";

const NewsLetter = () => {
  return (
    <div class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
      <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
        <img
          src="https://assets.bonkerscorner.com/uploads/2023/11/20122101/Bonkerscorner_squad-top_04.jpg"
          alt="newsletter"
          role="img"
          class="h-auto w-full xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-full rounded-full"
        />
      </div>
      <div class="w-full xl:w-1/2 xl:py-28">
        <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
          Subscribe
        </h1>
        <p class="text-base leading-normal text-gray-600 text-center xl:text-left">
          Subscribe for the notification of latest drop
        </p>
        <div class="flex items-stretch mt-12">
          <input
            class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
          />
          <button class="w-32 rounded-l-none hover:bg-gray-600 bg-black rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
