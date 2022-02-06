import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact form-group">
        <div className="contact-form-wrapper">
          <label htmlFor="">Your Name</label>
          <input type="text"/>
        </div>
        <div className="contact-form-wrapper">
          <label htmlFor="">Phone Number</label>
          <input type="text"/>
        </div>
        <div className="contact-form-wrapper">
          <label htmlFor="">Email</label>
          <input type="text"/>
        </div>
        <div className="contact-form-wrapper">
          <label htmlFor="">Subject</label>
          <input type="text"/>
        </div>
        <div className="contact-form-wrapper">
          <label htmlFor="">Your message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      

      </div>
    </>
  );
}
export default Contact;