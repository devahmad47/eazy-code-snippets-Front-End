import React from "react";

const WebProducts = () => {
  return (
    <>
      <div class="">
        <div class="dark:bg-transparent">
          <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 class="text-3xl mt-24 lg:mt-12 md:text-xl lg:text-5xl xl:text-6xl text-center text-black font-black leading-10">
                Mobile App
                <span class="text-violet-800 dark:text-violet-500">
                  <br />
                  Design{" "}
                </span>
                Service{" "}
              </h1>
              <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 dark:text-gray-400 font-semibold text-center text-lg sm:text-md">
                <span>Idea - D3 - Layout - Prototype</span>
              </p>
              <div className="flex gap-2 justify-center text-center items-center">
                <h1 className="text-3xl md:text-xl lg:text-5xl xl:text-6xl font-mono">
                  Start a Project
                </h1>
                <svg
                  className="h-24 w-16 -mt-"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>

              <div className="relative w-full h-full flex justify-end overflow-hidden">
                {/* :HERO IMAGE */}
                <img
                  src="https://webkul.design/wp-content/themes/webkul-design-2022/assets/images/mobile_app_design.png"
                  alt=""
                  className="absolute w-full h-full object-cover object-left sm:object-center opacity-70"
                />

                {/* :HERO MAIN CONTAINER */}
                <div className="relative py-28 xl:py-40 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">
                  {/* ::Hero title & text */}
                  <div className="mx-5 md:mx-0 p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
                    <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">
                      Mobile App Design, <br />
                      <span className="text-yellow-400 text-opacity-80">
                        Services
                      </span>{" "}
                      Functionality <br />
                      with Creativity!
                    </h1>
                    <p className="mt-3 text-gray-100 font-firacode">
                      Mobile app design service is a game-changer. Mobile impact
                      on firms today is both broad and deep. We help customers
                      develop mobile services that attract new clients, leads,
                      and supporters while also fostering long-term involvement.{" "}
                    </p>
                  </div>

                  {/* ::Hero button */}
                  <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                    <span className="relative -top-0.5 mr-2">Explore</span>
                    <img
                      src="https://fancytailwind.com/static/53e4540ef179fe51d5a02619660a1a92/arrow1.png"
                      alt=""
                      className="absolute left-32 w-20"
                    />
                  </button>

                  {/* ::Social media */}
                  <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                    {/* Twitter */}
                    <a href="#link" className="mx-3 transform hover:scale-110">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Linkedin */}
                    <a href="#link" className="mx-3 transform hover:scale-110">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    {/* Google + */}
                    <a href="#link" className="mx-3 transform hover:scale-110">
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        enableBackground="new 0 0 24 24"
                        height="512"
                        viewBox="0 0 24 24"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                        <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* :BOTTOM OPTIONS */}
                <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                  {/* ::Our Story */}
                  <a
                    href="#link"
                    className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
                  >
                    Our Story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </a>
                  {/* ::Our Shop */}
                  <a
                    href="#link"
                    className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
                  >
                    Our Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </a>
                  {/* ::Our Contact */}
                  <a
                    href="#link"
                    className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14"
                  >
                    Our Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <section id="features" class="container space-y-6 bg-slate-50 py-8 mx-auto md:py-12 lg:py-24">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Mobile App UX Design Strategy
</h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">The product or design can be made simple to use on any device and platform via a mobile app design service (App UI/UX Design).

</p>
    </div>
    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
        <div class="relative overflow-hidden rounded-lg border bg-background p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Useful</h3>
                    <p class="text-sm text-muted-foreground">Products meet the demands and criteria of the user.</p>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-background p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Useable</h3>
                    <p class="text-sm text-muted-foreground">The product or design must be as simple to use on any device and platform.
.</p>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-background p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal">
                    <line x1="21" y1="4" x2="14" y2="4"></line>
                    <line x1="10" y1="4" x2="3" y2="4"></line>
                    <line x1="21" y1="12" x2="12" y2="12"></line>
                    <line x1="8" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="20" x2="16" y2="20"></line>
                    <line x1="12" y1="20" x2="3" y2="20"></line>
                    <line x1="14" y1="2" x2="14" y2="6"></line>
                    <line x1="8" y1="10" x2="8" y2="14"></line>
                    <line x1="16" y1="18" x2="16" y2="22"></line>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Desirable</h3>
                    <p class="text-sm text-muted-foreground">The design should make the user feel good. Users want and expect your product should fulfill their need.
</p>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-background p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-input">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M2 15h10"></path>
                    <path d="m9 18 3-3-3-3"></path>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Findable</h3>
                    <p class="text-sm text-muted-foreground">Must be simple and allow the users to swiftly travel to any component of the system or website and its must match the real world also.</p>
                </div>
            </div>
        </div>
    </div>
</section>

          </div>
        </div>
      </div>
    </>
  );
};

export default WebProducts;
