import React from "react";
import knight from "../images/knight.png";
import command from "../images/command.png";
import projects from "../images/network.png";
import movement from "../images/movement.png";
import science from "../images/Science.png";
import world from "../images/world.png";
import art from "../images/Artofthenation.png";

export default function Arthomepage() {
  return (
    <div className="sectionhalf">
      <h1> Art of The Nation</h1>
      <img className="imgart" src={art} alt="Logo" />
      <p id="p1" className="sectiontext">
        Check out my story related projects including: <br />
        - 3D Printing
        <br />
        - Drawings <br />- Cosplays
      </p>
    </div>
  );
}
