import "./header.css";
import { useState } from "react";
// import "react-icons/fa";
import { ImBlogger } from "react-icons/im";
import { GoMailRead, GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CgToolbox } from "react-icons/cg";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <>
      <div>
        <div className="side_bar">
          <div className="title">
            <div className="logo">
              <a href="https://github.com/kkumar-gcc">
                <img src={"https://picsum.photos/180/240"} alt="" />
              </a>
            </div>
            <div className="username">
              <span>Krishan </span>
            </div>

            <div className="side_bar_toggle" onClick={handleNavCollapse}>
              <ion-icon
                name={`${isNavCollapsed ? "menu-outline" : "close-outline"}`}
              ></ion-icon>
            </div>
          </div>
          <ul className={`${isNavCollapsed ? "is_active" : ""}`}>
            <li>
              <Link to="/">
                <GoHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <IoPersonOutline /> About
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <BsFillFileBarGraphFill /> Resume
              </Link>
            </li>
            <li>
              <Link to="/work">
                <CgToolbox /> Work
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <ImBlogger /> Blog
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <GoMailRead /> Contact
              </Link>
            </li>
          </ul>
          <div
            className={`${
              isNavCollapsed ? "is_active" : ""
            } media_icons`}
          >
            <a href="https://github.com/kkumar-gcc">
              <ion-icon
                name="logo-facebook"
                style={{ color: "#3b5998" }}
              ></ion-icon>
            </a>
            <a href="https://github.com/kkumar-gcc">
              <ion-icon
                name="logo-twitter"
                style={{ color: "#00acee" }}
              ></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/krishan-kumar-601446211">
              <ion-icon
                name="logo-linkedin"
                style={{ color: "#0e76a8" }}
              ></ion-icon>
            </a>
            <a href="https://github.com/kkumar-gcc">
              <ion-icon
                name="logo-github"
                style={{ color: "#AD5C51" }}
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
