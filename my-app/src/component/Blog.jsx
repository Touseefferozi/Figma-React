import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css"; // Ensure correct styles

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  // ✅ Delete Blog Function
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const updatedBlogs = blogs.filter((_, i) => i !== index);
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }
  };

  // ✅ Edit Blog Function
  const handleEdit = (index) => {
    navigate(`/editblog/${index}`); // Redirect to Edit Page
  };

  return (
    <>
      <Navbar />

      <center>
        <div className="blog-head">
          <Link to="/blog">OUR BLOGS</Link>
          <h2>Find all our blogs here</h2>
          <p>Explore a collection of high-quality blogs written by expert writers across various categories.</p>
        </div>
      </center>

      <div className="blogs-container">
        <h2>Latest Blogs</h2>
        {blogs.length === 0 ? (
          <p>No blogs available. Start writing one!</p>
        ) : (
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <img src={blog.image} alt="Blog Cover" className="blog-image" />
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>

                {/* Edit & Delete Buttons */}
                <div className="blog-actions">
                  <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="create-btn">
        <Link to="/createblog">CREATE A NEW BLOG</Link>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
