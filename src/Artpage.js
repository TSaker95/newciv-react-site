import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";
import Slideshow from "./components/artslideshow.js";

function Art() {
  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="pagemarginart">
        <Slideshow />
      </div>
      <Footer />
    </div>
  );
}
export default Art;
