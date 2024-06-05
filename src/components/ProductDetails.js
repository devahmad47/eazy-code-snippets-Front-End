import React, { useEffect, useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import { Link, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import {  selectProduct } from "../StoreRedux/productSlice";
import  jazzcash  from "../assests/jazzcash.svg"
const ProductDetails = () => {
  const products = useSelector(selectProduct);
  const [myProduct, setMyProducts] = useState(null);
  //   const [mainImage, setMainImage]=useState(1)
  //  const handleImage=(index)=>{
  //   setMainImage(index)
  //  }

  const [loading, setLoading] = useState(false);
  const { _id } = useParams();
  console.log("details====>>", products);

  useEffect(() => {
    setLoading(true);
    const product = products.find((item) => item._id === _id);
    console.log("product===>", product);
    setMyProducts(product);
  }, [products, _id]);
  console.log("myproduct", myProduct);
 

  return (
    <>
      <div class="bg-gray-700">
        <div class="dark:bg-transparent">
          <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-auto sm:w-auto lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 class="text-2xl mt-24 lg:mt-12 md:text-xl lg:text-5xl xl:text-6xl text-center text-[#ffff] font-black leading-10">
                Let's get connect{" "}
                <span class="text-violet-800 dark:text-violet-500">
                  Explore{" "}
                </span>
                our Products.
              </h1>
              <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-lg sm:text-md">
                Find Our Latest Products.
              </p>
            </div>
          </div>
        </div>
      </div>

      {myProduct ? (
        <>
          <section class="py-12 sm:py-16">
            <div class="container mx-auto px-4">
              <nav class="flex">
                <ol role="list" class="flex items-center">
                  <li class="text-left">
                    <div class="-m-1">
                      <Link
                        to={"/"}
                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </div>
                  </li>

                  <li class="text-left">
                    <div class="flex items-center">
                      <span class="mx-2 text-gray-400">/</span>
                      <div class="-m-1">
                        <Link
                          to={"/products"}
                          class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        >
                          {" "}
                          Products{" "}
                        </Link>
                      </div>
                    </div>
                  </li>
                </ol>
              </nav>

              <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div class="lg:col-span-3 lg:row-end-1">
                  <div class="lg:flex lg:items-start">
                    <div class="lg:order-2 lg:ml-5">
                      <div class="max-w-xl overflow-hidden rounded-lg">
                        <img
                          class="h-96 w-auto  object-cover"
                          src={myProduct.productImage1}
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                      <div class="flex flex-row items-start lg:flex-col">
                        <button
                          type="button"
                          class="flex-0 aspect-square mb-3 h-30 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                        >
                          <img
                            class="h-full w-full object-cover"
                            src={myProduct.productImage2}
                            alt=""
                          />
                        </button>
                        <button
                          type="button"
                          class="flex-0 aspect-square mb-3 h-30 overflow-hidden rounded-lg border-2 border-transparent text-center"
                        >
                          <img
                            class="h-full w-full object-cover"
                            src={myProduct.productImage3}
                            alt=""
                          />
                        </button>
                        <button
                          type="button"
                          class="flex-0 aspect-square mb-3 h-30 overflow-hidden rounded-lg border-2 border-transparent text-center"
                        >
                          <img
                            class="h-full w-full object-cover"
                            src={myProduct.productImage4}
                            alt=""
                          />
                        </button>
                        <button
                          type="button"
                          class="flex-0 aspect-square mb-3 h-3  0 overflow-hidden rounded-lg border-2 border-transparent text-center"
                        >
                          <img
                            class="h-full w-full object-cover"
                            src={myProduct.productImage5}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                    {myProduct.productName}
                  </h1>

                  <h2 class="mt-8 font-bold  text-gray-900">
                    {myProduct.projectType}
                  </h2>
                  <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                    <p>{myProduct.productDescription}</p>
                  </div>

                  <h2 class="mt-8 text-base font-bold text-gray-900">
                    Project URL
                  </h2>
                  <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                    <button
                      className="  text-blue-600 rounded-md "
                      href={myProduct.projectUrl}
                      target="_blank"
                    >
                      {myProduct.projectUrl}
                    </button>
                  </div>

                  <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                    <div class="flex items-end">
                      <h1 class="text-3xl font-bold">${myProduct.price}</h1>
                      <span class="text-base">/month</span>
                    </div>
                  
                    <Link 
                    to={`/Appointment/${myProduct._id}`}
                      type="button"                  
                      class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="shrink-0 mr-3 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                     Book Appointment
                    </Link>

                  </div>
                  <Link 
                    to="https://www.jazzcash.com.pk/shop/money-transfer-shop/"
                      type="button"                  
                      class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                    
                     Jazz Cash
                    </Link>
                  <ul class="mt-8 space-y-2">
                    <li class="flex items-center text-left text-sm font-medium text-gray-600">
                      <svg
                        class="mr-2 block h-5 w-5 align-middle text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          class=""
                        ></path>
                      </svg>
                      Contact to Hunt Product
                    </li>

                    <li class="flex items-center text-left text-sm font-medium text-gray-600">
                      <svg
                        class="mr-2 block h-5 w-5 align-middle text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          class=""
                        ></path>
                      </svg>
                      Cancel Anytime
                    </li>
                 
                  </ul>
                </div>

                <div class="lg:col-span-3">
                  <div class="border-b border-gray-300">
                    <nav class="flex gap-4"></nav>
                  </div>

                  <div class="mt-8 flow-root sm:mt-12">
                    <h1 class="text-3xl font-bold">Maintenance and Support:</h1>
                    <p class="mt-4">
                      Specify the plans for ongoing maintenance, updates, and
                      user support to address issues and introduce new features.
                    </p>
                    <h1 class="mt-8 text-3xl font-bold">
                      Legal and Compliance
                    </h1>
                    <p class="mt-4">
                      Address any legal requirements, such as data privacy
                      regulations, and compliance measures integrated into the
                      project.
                    </p>
                    <h1 class="mt-8 text-3xl font-bold">
                      Testing and Quality Assurance
                    </h1>
                    <p class="mt-4">
                      Detail the testing methodologies, tools, and procedures
                      used to ensure the reliability and quality of the
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>
          {loading === true ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm z-50">
              <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
              <img
                src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                alt="loader"
                className="rounded-full h-28 w-28"
              />
            </div>
          ) : (
            <div className="flex justify-center text-center mt-16 font-bold text-6xl">
              Products Not Found
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductDetails;
