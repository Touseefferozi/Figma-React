import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure high-quality CSS

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Technology"); // Default category
  const navigate = useNavigate(); // Hook for navigation

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convert image to Base64 for storage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Title, content, and an image are required!");
      return;
    }

    // Retrieve existing blogs or initialize an empty array
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Create new blog object
    const newBlog = {
      title,
      content,
      image,
      category,
      date: new Date().toLocaleDateString(),
    };

    // Update localStorage
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // Show success message
    alert("Blog created successfully!");

    // Clear form fields
    setTitle("");
    setContent("");
    setImage(null);
    setCategory("Technology");

    // Redirect to blog page
    navigate("/blog");
  };

  return (
    <div className="create-blog-container">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageUpload} required />
        </div>

        {image && (
          <div className="image-preview">
            <img src={image} alt="Blog Preview" />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* ✅ Removed onClick to prevent double execution */}
        <button type="submit" className="submit-button">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
