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
          <a href="https://www.facebook.com/ANewCivilisation/">
            <img id="imgfacebookicon" src={facebook} alt="Logo" />
          </a>
        </p>
        <p className="footertext">
          <a href="https://www.instagram.com/anewcivilisation/?hl=en">
            <img id="imgfacebookicon" src={instagram} alt="Logo" />
          </a>
        </p>
      </div>
    </footer>
  );
}
