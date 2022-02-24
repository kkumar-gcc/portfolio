import "./header.css";
// import { useEffect } from "react";
import "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div>
        <div class="side_bar">
          <div class="title">
            <div class="logo">
               <a href="#">
                  <img src={"https://picsum.photos/180/240"} alt=""/>
               </a>
            
              
            </div>
            <div className="username">
              <span>Krishan </span>
            </div>
            
            {/* <label class=" button cancel" for="check">
              <i class="fas fa-times"></i>
            </label> */}
          </div>
          <ul>
            <li>
              <Link to="/">
                <ion-icon name="home-outline"></ion-icon> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <ion-icon name="person-outline"></ion-icon> About
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <ion-icon name="home-outline"></ion-icon> Resume
              </Link>
            </li>
            <li>
              <Link to="/work">
                <ion-icon name="home-outline"></ion-icon> Work
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <ion-icon name="home-outline"></ion-icon> Blog
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <ion-icon name="mail-open-outline"></ion-icon> Contact
              </Link>
            </li>
          </ul>
          <div class="media_icons">
            <a href="#">
              <ion-icon
                name="logo-facebook"
                style={{ color: "#3b5998" }}
              ></ion-icon>
            </a>
            <a href="#">
              <ion-icon
                name="logo-twitter"
                style={{ color: "#00acee" }}
              ></ion-icon>
            </a>
            <a href="#">
              <ion-icon
                name="logo-linkedin"
                style={{ color: "#0e76a8" }}
              ></ion-icon>
            </a>
            <a href="#">
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
}
export default Header;
