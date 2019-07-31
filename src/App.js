import React from "react";

import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";

import Slideshow from "./components/Slideshow.js";

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
              Welcome to the website of my book: 'A New Civilisation'. Here you
              can check out some of the book related art and projects I have
              made, as well as explore 'The Nation'. The new world order of the
              22nd century!
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

        <div className="header">
          <h1 className="h1"> Follow Me</h1>
        </div>
        <div className="section">
          <div className="sectiontext">
            <p>
              Checkout my Facebook page:
              <a href="https://www.facebook.com/ANewCivilisation/">
                "https://www.facebook.com/ANewCivilisation/"
              </a>
            </p>
            <p>
              Follow my Instagram:
              <a href="https://www.instagram.com/anewcivilisation/?hl=en">
                "https://www.instagram.com/anewcivilisation/?hl=en"
              </a>
            </p>
            <p>
              My Old Site:
              <a href="https://tsaker95.github.io/A_New_Civilisation/index.html">
                "https://tsaker95.github.io/A_New_Civilisation/index.html"
              </a>
            </p>
            <p>
              {" "}
              Follow me on linked in:{" "}
              <a href="https://www.linkedin.com/in/torryn-saker-319912b5/">
                "https://www.linkedin.com/in/torryn-saker-319912b5/"
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
