import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container form-group">
        <div className='contact-title'><h1>Contact Me</h1></div>
        <div className='contact-content'>
          <div className='contact-left-container'>
            <p>Nevine Acotanza
              Chief Operating Officer

              I am available for freelance work. Connect with me via and call in to my account.Phone: +01234567890Email: admin@example.com
              FIND WITH ME</p>
          </div>
          <div className='contact-right-container'>
            <div className="contact-form-wrapper search">
              <input type="text" className='form_input' placeholder='YOUR NAME' />
              <div className="form_icon">
                <ion-icon name="person-outline"></ion-icon>
              </div>
            </div>
            <div className="contact-form-wrapper search">
              <input type="email" className='form_input' placeholder='YOUR EMAIL' />
              <div className="form_icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
            </div>
            <div className="contact-form-wrapper search">
              <input type="text" className='form_input' placeholder='YOUR SUBJECT' />
              <div className="form_icon">
                <ion-icon name="reader-outline"></ion-icon>
              </div>
            </div>

            <div className="contact-form-wrapper">
              
              <textarea name="" id="" cols="30" rows="30" className='form_input_area' placeholder='YOUR MESSAGE....'></textarea>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default Contact;