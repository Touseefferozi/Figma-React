import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog";

import Home from "./component/Home";    // Rename to Home
import Contact from "./component/Contact";



function App() {
  return (
    <Router>
      {/* Navbar should be inside Router */}
      {/* <Navbar /> */}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      {/* Footer should remain outside Routes */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
