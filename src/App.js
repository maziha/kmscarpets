import "./App.css";
import React from "react";
import OurBlog from "./pages/blog";
import BlogOne from "./pages/blog1";
import BlogTwo from "./pages/blog2";
import BlogThree from "./pages/blog3";
import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurProducts from "./pages/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<OurProducts />} exact />
        <Route path="/blog" element={<OurBlog />} exact />
        <Route path="/blog1" element={<BlogOne />} exact />
        <Route path="/blog2" element={<BlogTwo />} exact />
        <Route path="/blog3" element={<BlogThree />} exact />
      </Routes>
    </Router>
  );
}

export default App;
