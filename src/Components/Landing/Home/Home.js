import React from "react";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Product from "../Product/Product";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Product />
      <About />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
