import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Card from "./Card";
import Group23777522x from '../Image/Group23777522x.png'; // Ensure the path is correct

function Blog() {
  return (
    <>
      <Navbar />
      <center>
        <div className="blog-head">
          <Link to="/blog">OUR BLOGS</Link>
          <h2>Find our all blogs from here</h2>
          <p>
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along{" "}
          </p>
        </div>
        </center>


        <div className="card-containers">
          <Card
            username="How to build strong portfolio and get a Job in UI/UX"
            btntext="Click Me"
          />
          <Card
            username="8 Rules of Travelling In Sea You Need To Know"
            btntext="Click Me"
          />
          <Card
            username="How to build strong portfolio and get a Job in UI/UX"
            btntext="Click Me"
          />

          <Card
            username="8 Rules of Travelling In Sea You Need To Know"
            btntext="Click Me"
          />
          <Card
            username="How to build strong portfolio and get a Job in UI/UX"
            btntext="Click Me"
          />
          <Card
            username="8 Rules of Travelling In Sea You Need To Know"
            btntext="Click Me"
          />

<Card
            username="How to build strong portfolio and get a Job in UI/UX"
            btntext="Click Me"
          />
          <Card
            username="8 Rules of Travelling In Sea You Need To Know"
            btntext="Click Me"
          />
          <Card
            username="How to build strong portfolio and get a Job in UI/UX"
            btntext="Click Me"
          />

        </div>


      {/* close  */}
      <div className="container-fluid">
      <div className="group">
      <img src={Group23777522x} alt="Error" />
      </div>
      </div>
    





      <Footer />
    </>
  );
}

export default Blog;
