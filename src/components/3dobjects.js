import React from "react";
import City from "../images/city.png";
import City1 from "../images/city1.png";

export default function Projectsprints() {
  return (
    <div className="section">
      <div className="sectionhalf">
        <img className="imgs" src={City} alt="Logo" />
      </div>
      <div className="sectionhalf">
        <img className="imgs" src={City1} alt="Logo" />

        <div>
          <p id="p1" className="sectiontext">
            County Town Design: <br /> <br />
            This city design depicts a small urban center, with a population of
            around 1000. Connected by rail to other towns, this is one of 1000
            county towns per Region.
          </p>
        </div>
      </div>
    </div>
  );
}
