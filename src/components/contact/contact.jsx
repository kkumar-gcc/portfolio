import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container form-group">
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-content">
          <div className="contact-left-container">
            <h2>Hi let's have a chat.</h2>
            <ul className="contact_icons">
              <li>
                {" "}
                <a
                  href="https://github.com/kkumar-gcc "
                  style={{ color: "#3b5998" }}
                >
                  <ion-icon name="logo-facebook"></ion-icon>{" "}
                  <span style={{ color: "#3b5998" }}>Like me on Facebook</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/kkumar-gcc">
                  <ion-icon
                    name="logo-twitter"
                    style={{ color: "#00acee" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#00acee" }}>Follow me on Twitter</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.linkedin.com/in/krishan-kumar-601446211">
                  <ion-icon
                    name="logo-linkedin"
                    style={{ color: "#0e76a8" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#0e76a8" }}>
                    Connect with me on Linkedin
                  </span>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/kkumar-gcc">
                  <ion-icon
                    name="logo-github"
                    style={{ color: "#AD5C51" }}
                  ></ion-icon>{" "}
                  <span style={{ color: "#AD5C51" }}>
                    See my Github profile
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-right-container">
            <h5>* Send me a Email</h5>
            <form>
              <div className="contact-form-wrapper search">
                <input
                  type="text"
                  className="form_input"
                  placeholder="YOUR NAME"
                />
                <div className="form_icon">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
              </div>
              <div className="contact-form-wrapper search">
                <input
                  type="email"
                  className="form_input"
                  placeholder="YOUR EMAIL"
                />
                <div className="form_icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
              </div>
              <div className="contact-form-wrapper search">
                <input
                  type="text"
                  className="form_input"
                  placeholder="YOUR SUBJECT"
                />
                <div className="form_icon">
                  <ion-icon name="reader-outline"></ion-icon>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="30"
                  className="form_input_area"
                  placeholder="YOUR MESSAGE...."
                ></textarea>
              </div>
              <div className="contact-form-wrapper submit-form">
                <input
                  type="submit"
                  className="form_input_submit"
                  value={"Submit"}
                />
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
