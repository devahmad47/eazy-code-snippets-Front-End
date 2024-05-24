import React from "react";
import react from "../assests/react.svg";
import mongodb from "../assests/mongodb.svg";
import express from "../assests/express.svg";
import node from "../assests/node.svg";
import dart from "../assests/dart.svg";
import flutterflow from "../assests/flutterflow.svg";
import flutter from "../assests/flutter.svg";
import github from "../assests/github.svg";
import figma from "../assests/figma.svg";
import sass from "../assests/sass.svg";
import typescript from "../assests/typescript.svg";
import css from "../assests/css.png";

const items = [
  { image: flutter },
  { image: flutterflow },
  { image: react },
  { image: mongodb },
  { image: express },
  { image: node },
  { image: dart },
  { image: github },
  { image: figma },
  { image: sass },
  { image: typescript },
  { image: css },
];

const Technology = () => {
  return (
    <>
      <div class="relative bg-gray-900 text-gray-900 mt-16 lg:mt-24">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
      </div>
      <section class="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="relative lg:py-10 py-20">
            <div className="container mx-auto">
              <div className="text-center">
                <div className="mb-3 lg:mb-0">
                  <h5 className="text-indigo-500 text-xl uppercase font-semibold lg:mb-1 mb-2">
                    Work On Technology
                  </h5>
                </div>
                <div className="mb-3 lg:mb-0">
                  <h1 class="mx-auto max-w-3xl lg:whitespace-nowrap font-display text-4xl font-bold tracking-normal text-white-300 text-white sm:text-5xl">
                    What we are working with
                    {""}
                  </h1>
                </div>
              </div>

              <div className="lg:grid md:grid justify-center items-center">
                <div className="hidden lg:py-12 md:pl-4 lg:pl-16 lg:flex lg:flex-wrap md:flex md:flex-wrap w-full gap-2 shrink-0 whitespace-nowrap">
                  {items.map((item, index) => (
                    <div key={index} className="h-full px-2.5">
                      <div className="relative w-[6rem] sm:w-[10rem] rounded-2xl px-2 py-6">
                        <div className="mt-auto flex items-center gap-2 group transition-all ease-in duration-200 hover:bg-[#676363] max-w-[150px] h-[151px]  justify-center ">
                          <img
                            src={item.image}
                            alt="nan"
                            className="h-9 w-9 rounded-full"
                            style={{ height: "100px", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marquee for smaller screens */}
              <div className="lg:hidden md:hidden py-12 animate-marquee flex w-full gap-2 shrink-0 whitespace-nowrap overflow-hidden">
                {items.map((item, index) => (
                  <div key={index} className="h-full px-2.5">
                    <div className="relative w-[3.5rem] sm:w-[3.5rem] rounded-2xl px-2 py-6">
                      <div className="mt-auto flex items-center gap-2">
                        <img
                          src={item.image}
                          alt="nan"
                          className="h-9 w-9 rounded-full"
                          style={{ height: "100px", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
