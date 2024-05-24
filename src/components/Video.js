import React from "react";

const Video = () => {
  return (
    <>
      <div class="h-auto w-auto bg-black">
        <div class="mx-auto max-w-7xl pt-16 sm:pt-24">
          <div class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div class="space-y-8">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <span class="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Our WorkSpace
                    </span>
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span class="sm:text-6xl"></span>FA SMART
                      <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        TECH
                      </span>
                      <br />& SOLUTIONS.
                    </h1>
                  </div>

                  <p class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    We invite you to step into the world of FA Smart Tech &
                    Solutions. Through captivating visuals and insightful
                    narratives, we showcase our dynamic team, collaborative work
                    culture, and innovative approach to software development.
                  </p>
                </div>
                <br />
                <div class="border-t border-gray-700"></div>
              </div>
            </div>

            <div class="flex items-center w-full col-span-6">
              <div class="px-6 h-96 sm:bottom-4 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div style={{ width: "100%", height: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <iframe
                      frameborder="0"
                      title="fasmart video"
                      allowfullscreen="1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                      id="widget2"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
