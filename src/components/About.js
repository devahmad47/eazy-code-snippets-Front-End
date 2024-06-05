import React from "react";
import offerpix from "../assests/offerpix.webp";
const About = () => {
  return (
    <>
      <div class="div-to-animate flex pt-12 px-6 md:px-20  items-center justify-center bg-white  overflow-hidden">
        <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div class="w-full  md:w-1/2 flex justify-center md:justify-end ">
            <img src={offerpix} alt="ahmad" />
          </div>
          <div class="w-full md:w-1/2 lg:pr-32">
            <h1 className="relative text-center justify-center text-indigo-500 font-bold text-lg ">
              WHAT WE OFFER
            </h1>
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 md:leading-tight font-medium">
              There’s a better way to talk with your customers.
            </h2>
            <h3 class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              At FA Smart Tech & Solutions, we are dedicated to revolutionizing
              the digital landscape with innovative software solutions. With
              expertise in Flutter, Flutter Flow, and the MERN stack, we bring
              your ideas to life and transform them into powerful applications
              that drive growth and success.
            </h3>

            <div class="mt-10 lg:flex sm:flex-row justify-center md:justify-start hidden  md:block">
              <button class="relative mt-4 text-xl rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                Flutter
              </button>
              <button class="relative mt-4 text-xl whitespace-nowrap inline-block rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                Flutter Flow
              </button>
              <button class="relative mt-4 text-xl whitespace-nowrap inline-block rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                Web Development
              </button>
            </div>
            <div class="lg:flex sm:flex-row justify-center md:justify-start hidden  md:block">
              <button class="relative mt-4 text-xl rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                Desktop Apps
              </button>
              <button class="relative mt-4 text-xl whitespace-nowrap inline-block rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                CRM
              </button>
            </div>
            <div class="lg:flex sm:flex-row justify-center md:justify-start hidden md:block">
              <button class="relative mt-4 text-xl whitespace-nowrap rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                MERN Stack
              </button>
              <button class="relative mt-4 text-xl whitespace-nowrap inline-block rounded-lg border-2 hover:border-black hover:bg-white hover:text-black px-6 py-4 font-medium text-white bg-black">
                Android & IOS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container relative z-40 mx-auto bg-purple-400 mt-12">
        <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          <a href="/" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-portfolio-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black lg:text-lg md:text-base md:pt-6">
                portfolio
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-blog-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black lg:text-lg md:text-base md:pt-6">
                blog
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-ecommerce-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                ecommerce
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-startup-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                startup
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-business-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                business
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-lifestyle-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                lifestyle
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-landing-page-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                landing pages
              </p>
            </div>
          </a>

          <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
              <img
                src="https://redpixelthemes.com/assets/images/icon-health-white.svg"
                alt="alt icon"
                class="block mx-auto"
              />

              <p class="pt-4 text-sm font-medium capitalize font-body text-black  lg:text-lg md:text-base md:pt-6">
                health
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
