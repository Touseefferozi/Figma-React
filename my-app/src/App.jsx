import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Createblog from "./component/Createblog";
function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createblog" element={<Createblog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
