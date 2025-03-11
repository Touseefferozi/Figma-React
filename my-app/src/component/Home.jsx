import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import MaskGroup from "../Image/Mask-group.png";
import Container from "../Image/Container.png";
import ImagePlaceholder from "../Image/ImagePlaceholder.png";
import Card from "./Card";

function Home() {
  return (
    <div>
      <Navbar />

      {/* image  */}

      <div className="banner">
        <img className="Mask-image" src={MaskGroup} alt="Mask Group" />
        <div className="content">
          <span>feature post</span>
          <h2>How AI Will Change the Futher</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            voluptatibus maiores suscipit explicabo culpa? A minima ex, rerum id
            consequuntur quis qui molestias perspiciatis eligendi consequatur
            ullam doloremque nemo. Libero?{" "}
          </p>
          <Link to="/Blog">
            <button className=" btn bg-White-500 hover:bg-purple-600 text-black font-medium py-2 px-4 rounded">
              Read More
            </button>
          </Link>

          <div className="banner-img-1">
            <img className="container-image" src={Container} alt="Container" />
          </div>
        </div>
      </div>

      {/* close  */}

      <div className="inner-banner">
        <img className="placeholder-image" src={ImagePlaceholder} alt="Error" />
      </div>

      <div className="tabs">
        <div className="text1">
          <span>feature post</span>
          <h2>
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p>
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <Link to="/Blog">
            <button className=" btn bg-White-500 hover:bg-purple-600 text-black font-medium py-2 px-4 rounded">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* close  */}

      <div className="main-head">
        <h2>Our Recent Post</h2>
      </div>
      <Link to="/Blog">
        <button className=" btns bg-White-500 hover:bg-purple-600 text-black font-medium py-2 px-4 rounded">
          Read More
        </button>
      </Link>

      {/* close  */}

      <div className="main-card">
        <img className="placeholder-image" src={ImagePlaceholder} alt="Error" />
      </div>

      <div className="main-card-txt">
        <span>feature post</span>
        <h2>
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p>
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <Link to="/Blog">
          <button className=" btn bg-White-500 hover:bg-purple-600 text-black font-medium py-2 px-4 rounded">
            Read More
          </button>
        </Link>
      </div>

      {/* close  */}

      <div className="card-container">
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
      </div>

      <Footer />
    </div>

    // close
  );
}

export default Home;
