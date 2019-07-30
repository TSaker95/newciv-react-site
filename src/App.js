import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";
import symbol from "./images/symbolone.png";
import Slideshow from "./components/Slideshow.js";
import art from "./images/Artofthenation.png";

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
          <div className="sectionhalf">
            <h1> Art of The Nation</h1>
            <img className="imgart" src={art} alt="Logo" />
            <p className="sectiontext">
              Check out my story related projects including: <br />
              - 3D Printing
              <br />
              - Drawings <br />- Cosplays
            </p>
          </div>

          <div className="sectionhalf">
            <div className="section">
              <p className="sectiontext">
                The Network: Discover the vast supercomputer that runs the
                nation itself!
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
            <div className="section">
              <p className="sectiontext">
                The Movement: Before the Nation, there was the movement
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
            <div className="section">
              <p className="sectiontext">
                The Science Union: "We are the Universe understanding itself"
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
            <div className="section">
              <p className="sectiontext">
                The Knight Program: The Nations Political and military elite
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
            <div className="section">
              <p className="sectiontext">
                The World: The Geographic and Political system of The Nation
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
            <div className="section">
              <p className="sectiontext">
                C.O.M.M.A.N.D: "When it speaks, you listen"
              </p>
              <div className="section">
                <img className="imgart" src={art} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
