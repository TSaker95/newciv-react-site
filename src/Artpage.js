import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";
import Slideshow from "./components/artslideshow.js";
import Artintro from "./components/artintro.js";
import Projectprints from "./components/3dobjects.js";
import Cosplay from "./components/cosplay.js";

function Art() {
  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="pagemarginart">
        <Slideshow />
        <Artintro />
        <Cosplay />
        <Projectprints />
      </div>

      <Footer />
    </div>
  );
}
export default Art;
