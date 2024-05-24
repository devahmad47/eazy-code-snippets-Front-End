import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const handleClick = () => {
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 1000);
  };
  return (
    <>
      <div class=" bg-gradient-to-b from-purple-100 to-indigo-100 lg:-mt-6 ">
        {/* hero 2 */}
        <div
          class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="pr-2  py-14 md:py-0 mt-16 lg:mt-16">
            <h1 class="text-3xl font-bold text-blue-900 xl:text-5xl lg:text-3xl">
              <span class="block w-full font-bold">Welcome to</span>FA Smart
              Tech & Solutions...
            </h1>
            <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Empower your business with cutting-edge technology solutions
              tailored to your business needs.
            </p>
            <div class="mt-4">
              <Link
                to="/appointment"
                onClick={handleClick}
                class={`${
                  isAnimate ? "animate__animated animate__rubberBand" : ""
                } px-5 py-3 shadow-xl text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group`}
              >
                <span>Request A Project</span>{" "}
              </Link>
            </div>
          </div>

          <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-16">
            <img
              id="heroImg1"
              class="transition-all rounded-full  animate-pulse duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
              alt="Awesome hero page"
              width="500"
              height="488"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
