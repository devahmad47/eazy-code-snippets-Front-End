import React from "react";
import { Link } from "react-router-dom";
import footerlog from "../assests/footer log.webp";
export const Footer = () => {
  return (
    <div className="relative mb-0 lg:p-16 m-2">
      <div className="w-full container mx-auto lg:py-2">
        <div
          className="relative lg:p-2 p-0 z-10"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="lg:p-8 py-10 lg:py-0 px-4 shadow-xl bg-black rounded-3xl container">
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:py-6">
              <div className="text-white">
                <div className="flex justify-center lg:justify-start mb-3">
                  <a href="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="165"
                      height="55"
                      decoding="async"
                      data-nimg="1"
                      src={footerlog} // Use dynamic source here, e.g., {footerlog}
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div className="mb-6">
                  <p className="paragraf4 text-[#989898] text-center lg:text-left">
                    © 2024 NetixSol Inc. All rights reserved.
                  </p>
                </div>
                <div className="mb-7 text-center lg:text-left">
                  <p className="paragraf2">Subscribe Now</p>
                </div>
                <form>
                  <div className="mb-6 lg:mb-0 flex items-center border-b-2 border-primary-50">
                    <input
                      placeholder="Email Address"
                      className="pb-2 focus:outline-none focus:ring-0 ring-0 outline-none bg-black text-white w-full"
                      type="email"
                      style={{ border: "none", outline: "none" }}
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_86_1016)">
                          <path
                            d="M19 12L13 18M19 12L13 6M19 12L5 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_86_1016">
                            <rect
                              width="24"
                              height="20"
                              fill="white"
                              transform="translate(20) rotate(90)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-white flex lg:flex-row flex-col lg:space-x-10 space-y-10 lg:space-y-0">
                <div className="text-left">
                  <ul>
                    <p className="paragraf2 lg:mb-7 mb-3">Services</p>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer hover:text-white text-primary-400 mb-1">
                        Tokenization
                      </li>
                    </a>
                    <a href="/dex">
                      <li className="paragraf4 text-primary-400 hover:text-white mb-1">
                        DEX Development
                      </li>
                    </a>
                    <a href="/defi">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        DEFI Development
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        NFT Development
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="text-left lg:text-left">
                  <ul>
                    <p className="paragraf2 lg:mb-7 mb-3">Industries</p>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        Remittance
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        Cryptocurrencies
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 hover:text-white text-primary-400 cursor-pointer mb-1">
                        DAO
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 hover:text-white text-primary-400 cursor-pointer mb-1">
                        Supply Chain
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="text-left lg:text-left">
                  <ul>
                    <p className="paragraf2 lg:mb-7 mb-3">Discover</p>
                    <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                      Courses
                    </li>
                    <a href="/portfolio">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        Case Studies
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        Events
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        Podcast &amp; Webinars
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="text-left lg:text-left">
                  <ul>
                    <p className="paragraf2 lg:mb-7 mb-3">Our Company</p>
                    <a href="/about">
                      <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                        About Us
                      </li>
                    </a>
                    <div className="flex space-x-4">
                      <a href="/hiring">
                        <li className="paragraf4 cursor-pointer text-primary-400 hover:text-white mb-1">
                          Careers
                        </li>
                      </a>
                      <Link to="/hiring" className="bg-[#03CC6F] animate-pulse rounded-full px-2 sm:px-3 cursor-pointer sm:rounded-lg">
                        Hiring
                      </Link>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-dashed mt-5 sm:mt-1 border-primary-500 flex lg:flex-row flex-col justify-between">
              <div className="flex justify-center space-x-10 py-4">
                <p className="paragraf4 text-gray-400">Privacy Policy</p>
                <p className="paragraf4 text-gray-400">Terms of Service</p>
              </div>
              {/* Additional code... */}
            </div>
          </div>
        </div>
      </div>
      {/* background img code... */}
      {/* <div className="absolute mx-auto -z-[9990] w-full flex justify-center bottom-0 left-0 right-0">
        <img
          alt="bg-img"
          loading="lazy"
          width="0"
          height="0"
          decoding="async"
          data-nimg="1"
          sizes="100vw"
          src={} // Use dynamic source here, e.g., {footerbg}
          style={{ color: "transparent", width: "100%", height: "auto" }}
        />
      </div> */}
    </div>
  );
};

export default Footer;
