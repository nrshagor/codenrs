import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Footer.css";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="sec aboutus">
            <h2>About myself</h2>
            <p> Hello dear. I am N R Shagor. A web developer</p>
            <ul className="ps-0 sci">
              <li>
                <a href="https://www.facebook.com/nrshagor" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nrshagor/" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/nrshagor" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nrshagor" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/NRSHAGOR" target="_blank">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Link</h2>
            <ul className="ps-0">
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClassName="active"
                  to="hero"
                  style={{
                    color: "white",
                    background: "#00000000",
                    boxShadow: "0 0 0 0 #00000000",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClassName="active"
                  to="Services"
                  style={{
                    color: "white",
                    background: "#00000000",
                    boxShadow: "0 0 0 0 #00000000",
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClassName="active"
                  to="Product"
                  style={{
                    color: "white",
                    background: "#00000000",
                    boxShadow: "0 0 0 0 #00000000",
                  }}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClassName="active"
                  to="About"
                  style={{
                    color: "white",
                    background: "#00000000",
                    boxShadow: "0 0 0 0 #00000000",
                  }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  activeClassName="active"
                  to="contact"
                  style={{
                    color: "white",
                    background: "#00000000",
                    boxShadow: "0 0 0 0 #00000000",
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-arrow-up" title="TOP"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="ps-0 info">
              <li>
                <span>
                  <i className="fas fa-map-signs"></i>
                </span>
                <span>585/1 Modhubag Moghbazar Dhaka</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-phone-square-alt"></i>
                </span>
                <p>
                  <a href="tel: +8801725885591">+880 1725-885591</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope-open-text"></i>
                </span>
                <p>
                  <a href="mailto:noorerabbishagor@gmail.com">
                    noorerabbishagor@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &copy; 2021-{date}{" "}
          <a href="https://nrshagor.com/" target="_blank">
            {" "}
            N R SHAGOR{" "}
          </a>
          All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
