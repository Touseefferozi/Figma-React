import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
import { getFirestore, collection, getDocs, addDoc   } from "firebase/firestore";
import { app } from "../Config/Firebase";

const db = getFirestore(app);         

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, "Blogs");
        const blogSnapshot = await getDocs(blogsCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // Optionally, set an error state to display an error message to the user
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Delete Blog Function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      // Implement delete functionality here (e.g., using Firebase's deleteDoc)
      // For now, just filter the blogs array
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);
    }
  };

  // ✅ Edit Blog Function
  const handleEdit = (index) => {
    navigate(`/editblog/${index}`); // Redirect to Edit Page
  };


    const makesubCollection = async  () => {
      await addDoc (collection(db, "Cities/Ramzan-1742299409416/Places"), {

        Name:"Jeeto Pakistan",
        des: "Kia HAi is Daby kay under",
        Date: Date.now(),

      });

        console.log(makesubCollection);
        

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
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                {blog.imageUrl && (
                  <img src={blog.imageUrl} alt="Blog Cover" className="blog-image" />
                )}
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>

                {/* Edit & Delete Buttons */}
                <div className="blog-actions">
                  <button className="edit-btn" onClick={() => handleEdit(blog.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
                  <button onClick={makesubCollection}>Sub Data</button>
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
