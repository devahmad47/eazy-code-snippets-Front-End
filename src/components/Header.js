import { useState } from "react";
import { Dialog } from "@headlessui/react";
import NetixSolwhitemode from "../assests/NetixSolwhitemode.svg";
import {
  FiHome,
  FiFolder,
  FiDollarSign,
  FiCheck,
  FiSettings,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSmartphone,
  FiMonitor,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", Link: "/home", icon: <FiHome className="h-5 w-5" /> },
    // {
    //   icon: <FiFolder className="h-5 w-5" />,
    //   name: "Features",
    //   Link: "/feature",
    //   submenu: [
    //     {
    //       name: "Delivery App",
    //       Link: "#",
    //       icon: <FiSettings className="h-5 w-5" />,
    //     },
    //     {
    //       name: "Website",
    //       Link: "#",
    //       icon: <FiSettings className="h-5 w-5" />,
    //     },
    //     {
    //       name: "Chef App",
    //       Link: "#",
    //       icon: <FiSettings className="h-5 w-5" />,
    //     },
    //     {
    //       name: "Table/Weather App",
    //       Link: "#",
    //       icon: <FiSettings className="h-5 w-5" />,
    //     },
    //   ],
    // },
    {
      name: "Products",
      Link: "/products",
      icon: <FiDollarSign className="h-5 w-5" />,
    },
    {
      icon: <FiSettings className="h-5 w-5" />,
      name: "Services",
      Link: "#",
      submenu: [
        {
          name: "Web",
          Link: "/webDetails",
          icon: <FiMonitor className="text-black h-5 w-5" />,
        },
        {
          name: "Mobile",
          Link: "/texttoimg",
          icon: <FiSmartphone className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative b-0 bg-gradient-to-b from-purple-100 to-indigo-100">
        <header
          className={`fixed top-0 z-50 shadow-2xl bg-[#ffffff] inset-x-0 mt-6 lg:ml-14 lg:mr-14 rounded-l-full rounded-r-full`}
        >
        

          <nav
            className="flex items-center justify-between p-4 lg:px-12"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 pl-8">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-16 w-auto" src={NetixSolwhitemode} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="group relative cursor-pointer py-2 ">
                      <div className="flex items-center">
                        <a
                          className="menu-hover py-2 text-lg font-bold text-black lg:mx-2"
                          href="/"
                        >
                          {item.name}
                        </a>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="invisible absolute z-50 flex px-6 rounded-full w-auto bg-gray-100 py-1  text-gray-800 shadow-xl group-hover:visible">
                        {item.submenu.map((subItem) => (
                          <Link
                            to={subItem.Link}
                            key={subItem.name}
                            className=" flex my-2 gap-2 block border-b  border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                          >
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.Link}
                      className="flex items-center text-lg font-bold leading-6 text-black"
                    >
                      <span className="ml-2 mt-4">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              {/* {cartItems.map((item) => (
                <>
                  <div className="bg-blue-300">
                    <FiShoppingCart />
                    <span>({item.quantity})</span>
                  </div>
                </>
              ))} */}
            </div>
            {/* {/* <div className="flex justify-end  gap-2"> */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/appointment"
                onClick={() => {}}
                className="px-4 shadow-2xl py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>
            <span>
              {" "}
              <div className="hidden lg:flex lg:ml-2 lg:flex-1 lg:justify-end">
                <Link
                  to="/contact-us"
                  onClick={() => {}}
                  className="px-4 shadow-2xl py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </span>
            {/* </div> */}
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src={NetixSolwhitemode} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <FiX className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name} className="">
                    {item.submenu ? (
                      <div className="group relative cursor-pointer py-2">
                        <div className="flex items-center justify-between space-x-5 bg-white px-4">
                          <Link
                            className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                            to={item.Link}
                            key={item.name}
                          >
                            {item.name}
                          </Link>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                          {item.submenu.map((subItem) => (
                            <Link
                              to={subItem.Link}
                              key={subItem.name}
                              className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.Link}
                        className="flex items-center px-4 py-2 text-sm leading-5 text-gray-900"
                      >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        {/* <Loginmodel isOpen={isOpen} setisOpen={setisOpen} /> */}
      </div>
    </>
  );
};

export default Navbar;
