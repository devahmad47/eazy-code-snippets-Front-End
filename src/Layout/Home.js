import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Contact from "../components/Contact";
import FeaturedClients from "../components/FeaturedClients";
import { Feedback } from "../components/Feedback";
import Video from "../components/Video";
import Products from "../components/Products";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Video />
      {/* <FeaturedClients /> */}
      <Feedback />
      <Technology />
      <Contact />
    </>
  );
};

export default Home;
