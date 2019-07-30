import React from "react";
import knight from "../images/knight.png";
import command from "../images/command.png";
import projects from "../images/network.png";
import movement from "../images/movement.png";
import science from "../images/Science.png";
import world from "../images/world.png";
import art from "../images/Artofthenation.png";

export default function Iconlist() {
  return (
    <div className="sectionhalf">
      <div className="iconsection">
        <p className="icontext">
          The Network: Discover the vast supercomputer that runs the nation
          itself!
        </p>
        <div>
          <img className="imgicons" src={projects} alt="Logo" />
        </div>
      </div>
      <div className="iconsection">
        <p className="icontext">
          The Movement: Before the Nation, there was the movement
        </p>
        <div>
          <img className="imgicons" src={movement} alt="Logo" />
        </div>
      </div>
      <div className="iconsection">
        <p className="icontext">
          The Science Union: "We are the Universe understanding itself"
        </p>
        <div>
          <img className="imgicons" src={science} alt="Logo" />
        </div>
      </div>
      <div className="iconsection">
        <p className="icontext">
          The Knight Program: The Nations Political and military elite
        </p>
        <div>
          <img className="imgicons" src={knight} alt="Logo" />
        </div>
      </div>
      <div className="iconsection">
        <p className="icontext">
          The World: The Geographic and Political system of The Nation
        </p>
        <div>
          <img className="imgicons" src={world} alt="Logo" />
        </div>
      </div>
      <div className="iconsection">
        <p className="icontext">C.O.M.M.A.N.D: "When it speaks, you listen"</p>
        <div>
          <img className="imgicons" src={command} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
// <div>
//   <img className="imglinks" src={art} alt="Logo" />
//   <img className="imglinks" src={projects} alt="Logo" />
//   <img className="imglinks" src={movement} alt="Logo" />
//   <img className="imglinks" src={science} alt="Logo" />
//   <img className="imglinks" src={knight} alt="Logo" />
//   <img className="imglinks" src={world} alt="Logo" />
//   <img className="imglinks" src={command} alt="Logo" />
// </div>
