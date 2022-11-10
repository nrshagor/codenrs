import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import useSound from "use-sound";
import boopSfx from "./sound/bubble.mp3";
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
    <div>
      {/* <div className="navbar" data-aos="zoom-out" data-aos-duration="1500"> */}
      <div className="navbar">
        <div className="nav-logo">
          <h1>CODENRS </h1>
        </div>

        <div className="menuIcon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={clicked ? "navList1 active" : "navList1"}>
          <NavLink activeClassName="active" to="/">
            home
          </NavLink>
          <NavLink onClick={play} activeClassName="active" to="/home">
            home
          </NavLink>
          <NavLink onClick={play} activeClassName="active" to="/services">
            Services
          </NavLink>
          <NavLink activeClassName="active" to="/g">
            home
          </NavLink>
          <NavLink activeClassName="active" to="/home">
            home
          </NavLink>
          <div class="animation start-home"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
