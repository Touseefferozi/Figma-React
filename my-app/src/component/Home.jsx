import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import MaskGroup from "../Image/Mask-group.png";
import Container from "../Image/Container.png";
import ImagePlaceholder from "../Image/ImagePlaceholder.png";
import Card from "./Card";

// Firestore implementation

function Home() {


  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Add Data Button */}
    

      {/* Banner Section */}
      <div className="banner">
        <img className="Mask-image" src={MaskGroup} alt="Mask Group" />
        <div className="content">
          <span className="text-gray-500">Feature Post</span>
          <h2 className="text-xl font-bold">How AI Will Change the Future</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            voluptatibus maiores suscipit explicabo culpa? A minima ex, rerum id
            consequuntur quis qui molestias perspiciatis eligendi consequatur
            ullam doloremque nemo. Libero?
          </p>
          <Link to="/Blog">
            <button className="bg-white hover:bg-purple-600 text-black font-medium py-2 px-4 rounded mt-2">
              Read More
            </button>
          </Link>

          <div className="banner-img-1">
            <img className="container-image" src={Container} alt="Container" />
          </div>
        </div>
      </div>

      {/* Inner Banner Section */}
      <div className="inner-banner">
        <img className="placeholder-image" src={ImagePlaceholder} alt="Error" />
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <div className="text1">
          <span className="text-gray-500">Feature Post</span>
          <h2 className="text-xl font-bold">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className="text-gray-700">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses, and communities. Whether it’s
            publishing state-of-the-art research, building helpful products, or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <Link to="/Blog">
            <button className="bg-white hover:bg-purple-600 text-black font-medium py-2 px-4 rounded mt-2">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Recent Post Section */}
      <div className="main-head">
        <h2 className="text-2xl font-bold text-center my-4">Our Recent Post</h2>
      </div>
      <div className="flex justify-center mb-4">
        <Link to="/Blog">
          <button className="bg-white hover:bg-purple-600 text-black font-medium py-2 px-4 rounded">
            Read More
          </button>
        </Link>
      </div>

      {/* Main Card Section */}
      <div className="main-card">
        <img className="placeholder-image" src={ImagePlaceholder} alt="Error" />
      </div>

      <div className="main-card-txt">
        <span className="text-gray-500">Feature Post</span>
        <h2 className="text-xl font-bold">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="text-gray-700">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses, and communities. Whether it’s
          publishing state-of-the-art research, building helpful products, or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <Link to="/Blog">
          <button className="bg-white hover:bg-purple-600 text-black font-medium py-2 px-4 rounded mt-2">
            Read More
          </button>
        </Link>
      </div>

      {/* Card Container */}
      <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
