import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";
import symbol from "./images/symbolone.png";
import Slideshow from "./components/Slideshow.js";
import art from "./images/Artofthenation.png";
import Iconlist from "./components/iconlist.js";
import Arthomepage from "./components/arthomepage.js";
function App() {
  return (
    <div>
      <SideBar />
      <Navbar />

      <div className="pagemargin">
        <div className="header">
          <h1 className="h1"> "Welcome To A New Civilisation" </h1>
        </div>

        <div className="sectionslideshow">
          <Slideshow />
        </div>
        <div className="section">
          <div className="sectiontext">
            <p>
              Introduction: <br /> <br /> Welcome to the website of my book: 'A
              New Civilisation'. Here you can check out some of the book related
              art and projects I have made, as well as explore 'The Nation'. The
              new world order of the 22nd century!
            </p>
          </div>
        </div>
        <div className="header">
          <h1 className="h1"> Explore The Nation </h1>
        </div>
        <div className="section">
          <Arthomepage />
          <Iconlist />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
