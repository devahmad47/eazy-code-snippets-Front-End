import React, { useEffect, useState } from "react";
import previewsmall from "../assests/preview-small.jpg";
import { useSelector } from "react-redux";
import icon from "../assests/icon.png";
import {
  FiChevronDown,
  FiFile,
  FiFolder,
  FiShoppingCart,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { selectProduct } from "../StoreRedux/productSlice";

const Products = () => {
  const products = useSelector(selectProduct);
  const [title, setTitle] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(products);
  useEffect(() => {
    setSelectedProduct(products);
    // Update selectedProduct when products change
  }, [products]);
  const handleProduct = (value) => {
    setTitle(value);
    if (value === "All Products") {
      setSelectedProduct(products);
    } else {
      const data = products.filter((item) => item.categoryType === value);
      setSelectedProduct(data);
    }
  };

  // const homeProducts = selectedProduct.filter(
  //   (product) => product.mainPage === true
  // );

  return (
    <>
      <div className="">
        <div className="bg-purple-300">
          {/* feature items */}
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="border-b mb-5 flex justify-between text-sm">
              <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                <svg
                  className="h-6 mr-3"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 455.005 455.005"
                  style={{ enableBackground: "new 0 0 455.005 455.005" }}
                  xmlSpace="preserve"
                >
                  {/* SVG paths go here */}
                </svg>
                <a href="/" className="flex font-bold">
                  <span>
                    {" "}
                    <FiFile className="h-10 w-10 pb-2" />
                  </span>
                  <b>
                    {title}
                    {""}
                  </b>
                </a>
              </div>
              <span>
                <div className="relative">
                  <select
                    className="shadow appearance-none mt-2 border-4 border-indigo-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="products"
                    name="products"
                    onChange={(e) => handleProduct(e.target.value)}
                  >
                    <option value="All Products">All Products</option>
                    <option value="Enterprise Solutions">
                      Enterprise Solutions
                    </option>
                    <option value="Web Application">Web Application</option>
                    <option value="Utility Tools">Utility Tools</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <FiChevronDown className="text-gray-200" />
                  </div>
                </div>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* CARD 1 */}
              {selectedProduct.map((item, index) => (
                <div
                  key={index}
                  className="relative mb-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
                >
                  <Link
                    className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
                    to={`/productdetails/${item._id}`}
                  >
                    <img
                      className="h-48 object-cover w-full"
                      src={item.productImage1}
                      alt="product"
                    />
                    <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      {item.productName}
                    </span>
                  </Link>
                  <div className="mt-4 px-5 pb-5">
                    <a href="/">
                      <h5 className="text-md font-bold text-center tracking-tight text-slate-900">
                        {item.productDescription}{" "}
                      </h5>
                    </a>
                    <div className="mt-4 mb-5 flex items-center justify-between">
                      <p className="flex flex-row gap-2">
                        <span className="text-md border border-gray-300 rounded-md px-3 hover:bg-gray-200 py-2 text-slate-900">
                          <FiFolder />
                        </span>
                        <span className="text-md text-slate-900 border border-gray-300 rounded-md px-3 hover:bg-gray-200 py-2">
                          <FiThumbsUp />
                        </span>
                      </p>
                    </div>
                    <hr />
                    <div className="px-6 py-3 m-0 flex flex-row items-center justify-between bg-gray-100">
                      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <img className="h-4 w-4" alt="sds" src={icon} />
                        <span className="ml-1">{item.productName}</span>
                      </span>
                      <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <span className="ml-1 border border-gray-300 hover:bg-gray-300 px-2">
                          $39
                        </span>
                        <Link
                          to="/cart"
                          className="ml-1 border py-0.5 text-black border-gray-300 hover:bg-gray-300 px-2.5"
                        >
                          <FiShoppingCart />
                        </Link>
                      </span>
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
export default Products;
