import React from "react";
import Contact from "./Contact";

const ContactForm = () => {
  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-2xl mt-24 lg:mt-12 md:text-xl lg:text-3xl xl:text-5xl text-center text-gray-800 dark:text-white font-black leading-10">
                Get in Touch{" "}
                <span className="text-violet-800 dark:text-violet-500">
                  For Exceptional{" "}
                </span>
                Service and Support.
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-lg sm:text-md">
               Feel free to contact for queries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactForm;
