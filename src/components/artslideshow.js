import React from "react";
import { Slide } from "react-slideshow-image";

import pic1 from "../images/art2.png";
import pic2 from "../images/art3.png.jpg";
import pic3 from "../images/art4.jpg";

const slideImages = [pic1, pic2, pic3];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div>
      <div className="header">
        <h1 className="h1"> "Art and Projects!" </h1>
      </div>
      <div className="sectionslideshow">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>Explore The Nation</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>3D Printing The Nation</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Drawings of The Nation</span>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
