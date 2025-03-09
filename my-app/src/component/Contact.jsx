import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import FrameImage from "../Image/Frame.png";

function Contact() {
  return (
    <>
      <Navbar />

      <center>
        <div className="blog-head">
          <Link to="/blog">OUR CONTACT</Link>
          <h2>Get in Touch</h2>
          <p>
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
      </center>

      <div className="contact-container">
        <div className="contact-card">
          <img src={FrameImage} alt="Error" />
          <h5>Office</h5>
          <p>Victoria Street, London, UK</p>
        </div>

        <div className="contact-card">
          <img src={FrameImage} alt="Error" />
          <h5>Manage</h5>
          <p>Victoria Street, London, UK</p>
        </div>

        <div className="contact-card">
          <img src={FrameImage} alt="Error" />
          <h5>Phone</h5>
          <p>Victoria Street, London, UK</p>
        </div>
      </div>

      {/* close  */}

      {/* map start  */}

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126838.91138376498!2d-0.24168136815733273!3d51.52830801835502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b311a1d52df%3A0x2f19e16fce9ffb2c!2sLondon!5e0!3m2!1sen!2suk!4v1710000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* close  */}

      {/* form start  */}
      <div className="form-container">
        <h1>Get in Touch</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" required />
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Message</label>
            <textarea id="subject" name="subject" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
