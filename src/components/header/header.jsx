import "./header.css";
import { useEffect } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
function Header() {
  useEffect(() => {
    const toggle = document.querySelector(".toggle");
    const icon = document.querySelectorAll(".icon");
    // const nav = document.querySelector(".nav");
    console.log(toggle);
    toggle.onclick = (e) => {
      toggle.classList.toggle("active");
      icon.forEach((i) => {
        i.classList.toggle("active");
      });
    };
  });
  return (
    <>
      <Draggable defaultPosition={{ x: 40, y: 40 }}>
        <div className="menu draggable">
          <div className="toggle nav">
            {/* <ion-icon name="add-outline"></ion-icon> */}
            {/* <ion-icon name="options-outline"></ion-icon> */}
            <ion-icon name="snow-outline"></ion-icon>
          </div>
          <li className="icon" style={{ "--i": "0" }}>
            <Link to="/">
              <ion-icon name="home-outline"></ion-icon>
            </Link>
          </li>
          <li className="icon" style={{ "--i": "1" }}>
            <Link to="/blog">
              <ion-icon name="aperture-outline"></ion-icon>
            </Link>
          </li>
          {/* <li className="icon" style={{ "--i": "2" }}>
              <Link to="/contact">
             
                <ion-icon name="arrow-redo-outline" aria-label="heart-sharp"></ion-icon>
              </Link>
            </li> */}
          <li className="icon" style={{ "--i": "2" }}>
            <Link to="/about">
              <ion-icon name="person-outline"></ion-icon>
            </Link>
          </li>
          <li className="icon" style={{ "--i": "3" }}>
            <Link to="/resume">
              <ion-icon name="attach-outline"></ion-icon>
            </Link>
          </li>
          {/* <li className="icon" style={{ "--i": "5" }}>
              <Link to="/about">
                <ion-icon name="bluetooth-outline"></ion-icon>
              </Link>
            </li> */}
          <li className="icon" style={{ "--i": "4" }}>
            <Link to="/contact">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            </Link>
          </li>
          <li className="icon" style={{ "--i": "5" }}>
            <Link to="/work">
              <ion-icon name="school-outline"></ion-icon>
            </Link>
          </li>
        </div>
      </Draggable>
    </>
  );
}
export default Header;
