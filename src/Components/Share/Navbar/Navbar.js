import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import useSound from "use-sound";
import boopSfx from "./sound/bubble.mp3";
import { Link } from "react-scroll";
AOS.init();
const Navbar = () => {
  const [play] = useSound(boopSfx);
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }

    e.preventDefault();
  };
  return (
    <>
      {/* <div className="navbar" data-aos="zoom-out" data-aos-duration="1500"> */}
      <div className="navbar">
        <div className="nav-logo">
          <h1>
            <span className="cod">COD</span>
            <span className="e">E</span>
            <span className="nrs">NRS</span>
          </h1>
        </div>

        <div className="menuIcon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={clicked ? "navList1 active" : "navList1"}>
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={play}
            activeClassName="active"
            to="hero"
          >
            home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={play}
            activeClassName="active"
            to="Services"
          >
            Services
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={play}
            activeClassName="active"
            to="Product"
          >
            Product
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={play}
            activeClassName="active"
            to="About"
          >
            About
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={play}
            activeClassName="active"
            to="contact"
          >
            Contact
          </Link>

          <div class="animation start-home"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
