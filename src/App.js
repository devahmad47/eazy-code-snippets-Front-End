import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "animate.css";
import Home from "./Layout/Home";
import Page404 from "./components/Page404";
import Appointment from "./components/Appointment";
import ContactForm from "./components/ContactForm";
import ProductDetails from "./components/ProductDetails";
import LayoutProducts from "./components/LayoutProducts";
import Hiring from "./components/Hiring";
import { productSuccess } from "./StoreRedux/productSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import WebProducts from "./components/WebProducts";
import Image from "./components/Image";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://eazy-code-snippets-server.vercel.app/api/product/get-all-products"
        );
        console.log("response", response);
        dispatch(productSuccess(response.data.products));
        // Assuming your response data is the array of products
      } catch (error) {
        throw new Error("failed to fetch products",error.message);
      }
    };
    fetchProducts();
  }, []);
  // Use useRef to access the DOM element
  const toTopButtonRef = useRef(null);

  // Add an effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > 500) {
        // If scroll position is greater than 500, show the button
        toTopButtonRef.current.classList.remove("hidden");
      } else {
        // Otherwise, hide the button
        toTopButtonRef.current.classList.add("hidden");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to scroll to the top of the page smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<LayoutProducts />} />
        <Route path="/Appointment/:productId?" element={<Appointment />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/webDetails" element={<WebProducts />} />
        <Route path="/texttoimg" element={<Image />} />
        <Route path="/productdetails/:_id" element={<ProductDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      <button
        ref={toTopButtonRef}
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
        </svg>
        <span className="sr-only">Go to top</span>
      </button>
    </div>
  );
}

export default App;
