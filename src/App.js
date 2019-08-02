import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Side from "./components/sidebar.js";
import Slideshow from "./components/Slideshow.js";
import Introparagraph from "./components/introparagraph";
import Iconlist from "./components/iconlist.js";
import Arthomepage from "./components/arthomepage.js";
import Follow from "./components/followme.js";

function App() {
  return (
    <div>
      <Side />
      <Navbar />
      <div className="pagemargin">
        <Slideshow />
        <Introparagraph />
        <div className="section">
          <Arthomepage />
          <Iconlist />
        </div>
        <Follow />
      </div>
      <Footer />
    </div>
  );
}
export default App;
