import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../Config/Firebase"; // Ensure correct path

// Initialize Firestore
const db = getFirestore(app);

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("Technology");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double submission

    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    setIsSubmitting(true); // Disable further submissions
    const id = `${title.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}`;

    const newBlog = {
      id,
      title,
      content,
      category,
      imageUrl,
      date: new Date().toLocaleDateString(),
    };

    try {
      await setDoc(doc(db, "Blogs", id), newBlog);
      alert("Blog created successfully!");

      setTitle("");
      setContent("");
      setImageUrl("");
      setCategory("Technology");

      navigate("/blog");
    } catch (error) {
      console.error("Error adding blog: ", error);
      alert("Failed to create blog!");
    } finally {
      setIsSubmitting(false);
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
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {imageUrl && (
          <div className="form-group">
            <img src={imageUrl} alt="Blog" style={{ maxWidth: "200px" }} />
          </div>
        )}

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

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
