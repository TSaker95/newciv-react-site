import React from "react";
import knight from "../images/knight.png";
import command from "../images/command.png";
import projects from "../images/network.png";
import movement from "../images/movement.png";
import science from "../images/Science.png";
import world from "../images/world.png";
import art from "../images/Artofthenation.png";

export default function Icons() {
  return (
    <div>
      <img className="imglinks" src={art} alt="Logo" />

      <img className="imglinks" src={projects} alt="Logo" />
      <img className="imglinks" src={movement} alt="Logo" />
      <img className="imglinks" src={science} alt="Logo" />
      <img className="imglinks" src={knight} alt="Logo" />
      <img className="imglinks" src={world} alt="Logo" />
      <img className="imglinks" src={command} alt="Logo" />
    </div>
  );
}
