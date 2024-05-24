import React from "react";
import Products from "./Products";

const LayoutProducts = () => {
  return (
    <>
      <div className="">
        <div class="bg-gray-700">
          <div class="dark:bg-transparent">
            <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
              <div class="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1 class="text-2xl mt-24 lg:mt-12 md:text-xl lg:text-3xl xl:text-5xl text-center text-gray-800 dark:text-white font-black leading-10">
                  Explore Our Cutting-Edge{" "}
                  <span class="text-violet-800 dark:text-violet-500">
                    Product Suite for{" "}
                  </span>
                  Next-Generation Solutions.
                </h1>
                <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-lg sm:text-md">
                  Find Our Latest Products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default LayoutProducts;
