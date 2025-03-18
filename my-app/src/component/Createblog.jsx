import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { app } from "../Config/Firebase"; // Ensure correct path

// Initialize Firestore
const db = getFirestore(app);

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Technology");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    const id = `${title}-${Date.now()}`;

    // Create new blog object
    const newBlog = {
      id,
      title,
      content,
      category,
      date: new Date().toLocaleDateString(),
    };

    try {
      // Store in Firestore
      const blogRef = doc(db, "Blogs", id);
      await setDoc(blogRef, newBlog);

      alert("Blog created successfully!");

      // Clear form fields
      setTitle("");
      setContent("");
      setImage(null);
      setCategory("Technology");

      // Redirect to blog page
      navigate("/blog");
    } catch (error) {
      console.error("Error adding blog: ", error);
      alert("Failed to create blog!");
    }
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
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
