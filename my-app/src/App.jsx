import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={"/signup"} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
