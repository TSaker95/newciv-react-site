import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/sidebar.js";
import symbol from "./images/symbolone.png";

function App() {
  return (
    <div>
      <SideBar />
      <Navbar />

      <div className="pagemargin">
        <div className="header">
          <h1> WELCOME TO A NEW CIVILISATION </h1>{" "}
        </div>

        <div className="section">
          <img className="homescreenimg " src={symbol} alt="Logo" />
        </div>
        <div className="section">
          <h1> Introduction </h1>
          <p>
            Welcome to the website of my book: A New Civilisation! Click the
            links above to explore the Universe of my story
          </p>
        </div>
        <div className="header">
          <h1> Follow my stuff </h1>{" "}
        </div>
        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
        <div className="section">
          <h1> What </h1>
        </div>

        <div className="section">
          <h1> What </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
