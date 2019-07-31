import React from "react";
import facebook from "../images/facebookicon.png";
import instagram from "../images/instagram.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <p className="footertext"> &copy; A New Civilisation 2019 </p>
        <p className="footertext"> By: Torryn Saker </p>
        <p className="footertext">
          <img id="imgfacebookicon" src={facebook} alt="Logo" />
        </p>
        <p className="footertext">
          <img id="imgfacebookicon" src={instagram} alt="Logo" />
        </p>
      </div>
    </footer>
  );
}
