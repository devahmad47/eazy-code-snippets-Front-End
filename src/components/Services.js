import React from "react";
import nft from "../assests/nft .svg";
import doll from "../assests/doll.svg";
import dex from "../assests/dex.svg";
import cardpix2 from "../assests/cardpix2.webp";
import audit from "../assests/audit.svg";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
const services = [
  {
    img: nft,
    title: "Flutter Expertise",
    disc: "Harness the power of Flutter for seamless cross-platform app development.",
    btn: "Learn More",
  },
  {
    img: doll,
    title: "Flutter Flow Integration",
    disc: "Utilize Flutter Flow for rapid prototyping and app development acceleration.",
    btn: "Learn More",
  },
  {
    img: dex,
    title: "MERN Stack Proficiency",
    disc: "Leverage the power of MongoDB, Express.js, React, and Node.js for robust web applications.",
    btn: "Learn More",
  },
  {
    img: cardpix2,
    title: "Customized Solutions",
    disc: "Tailored software solutions crafted to match your unique business requirements.",
    btn: "Learn More",
  },
  {
    img: audit,
    title: "Agile Development",
    disc: "Embrace agile methodologies for efficient project management and timely deliveries.",
    btn: "Learn More",
  },
  {
    img: nft,
    title: "Quality Assurance",
    disc: "Stringent QA processes ensure flawless performance and exceptional user experiences.",
    btn: "Learn More",
  },
];
const Services = () => {
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
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
              We are just getting started!
            </h2>
            <p class="mb-4">
              Explore Our Comprehensive Range of Cutting-Edge Solutions and
              Expertise in Software Development and Technology Innovation.
            </p>
          </div>
          <div class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <>
              {services && services.length > 0
                ? services.map((item, index) => (
                    <div
                      className="md:bg-black bg-[#141414] cursor-pointer ease-in duration-300 hover:shadow-lg group p-4 rounded-3xl hover:shadow-primary-210 border-2 border-transparent hover:border-primary hover:border-white"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="mb-6">
                        <img
                          alt="blockchainpix1"
                          fetchpriority="high"
                          width="65"
                          height="65"
                          decoding="async"
                          data-nimg="1"
                          src={item.img}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-2xl mb-4">
                          {item.title}
                        </h5>
                      </div>
                      <div>
                        <p className="paragraf4 text-primary-300 mb-4">
                          {item.disc}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center group-hover:bg-purple-400 hover w-max group-hover:px-3 py-2 rounded-full">
                          <a
                            className="paragraf3 text-lg hover:font-semibold text-indigo-400 group-hover:ml-2 ease-in duration-300 group-hover:text-white whitespace-nowrap"
                            href="#contact"
                          >
                            {item.btn}
                          </a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            className="w-6 h-6 transition-colors duration-300 group-hover:stroke-[#fff]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
