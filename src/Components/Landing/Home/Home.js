import React from "react";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
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
      <Footer />
    </div>
  );
};

export default Home;
