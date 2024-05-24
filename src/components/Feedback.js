import React from "react";
const items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "Working with FA Smart Tech & Solutions has been a game-changer for our business. Their expertise in Flutter and the MERN stack has elevated our digital presence, resulting in increased efficiency and customer satisfaction.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "The team at FA Smart Tech & Solutions is exceptional. Their attention to detail, dedication, and technical proficiency are unparalleled. We highly recommend their services to anyone seeking top-notch software solutions.",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "We've partnered with numerous tech firms in the past, but FA Smart Tech & Solutions stands out from the crowd. Their professionalism and proactive approach make them a valuable asset to any project",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "Absolutely impressed with the level of expertise and dedication FA Smart Tech & Solutions brings to the table. Their attention to detail and commitment to delivering high-quality results are truly commendable.",
  },
];

export const Feedback = () => {
  return (
    <>
      <div class="flex md:mt-12 w-full flex-col items-center justify-center text-center px-4 py-24  bg-white">
        {/* bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 */}
        <h5 className="text-indigo-500 text-lg uppercase font-semibold lg:mb-1 mb-2">
          Our CLIENTS Say
        </h5>
        <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-300 dark:text-gray-900 sm:text-7xl">
          Feedback {""}
          <span class="relative whitespace-nowrap text-white-600 dark:text-gray-900">
            fuels{" "}
          </span>
          <span class="relative whitespace-nowrap text-purple-500 dark:text-purple-900">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-500 dark:fill-purple-500/80"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span class="relative">Champions</span>
          </span>
        </h1>
        <h2 class="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-900 leading-7">
          Revolutionize Insurance Operations with Our Advanced AI Tool,
          Enhancing Underwriting to Claims Processing.
        </h2>
        <div className="relative flex  w-full mt-6 bg-white items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden py-5">
            <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
              {[...items, ...items].map((item, index) => (
                <div key={index} className="h-full px-2.5">
                  <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-[#41295a] px-8 py-6">
                    <div className="pb-4 font-light text-white/75">
                      {item.body}
                    </div>

                    <div className="mt-auto flex items-center gap-4">
                      <img
                        src={item.image}
                        alt="as"
                        className="h-9 w-9 rounded-full"
                      />

                      <div className="flex flex-col text-sm">
                        <div className="text-white">{item.name}</div>

                        <div className="text-white/75">{item.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
