import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../Image/Logo1.png";
// import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="logo">
                <img src={Logo1} alt="Hero Image" />
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="navbar">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  {user ? (
                    <React.Fragment>
                      <li>
                        <Link
                          to="/home"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Contact"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <span className="text-gray-900 dark:text-black font ">
                          Welcome, {user.email}
                        </span>
                      </li>
                    </React.Fragment>
                  ) : (
                    <>
                      <li>
                        <Link
                          to="/home"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Contact"
                          className="text-gray-900 dark:text-white hover:underline"
                        >
                          Contact
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="nav-btn">
                <Link to="/contact">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
