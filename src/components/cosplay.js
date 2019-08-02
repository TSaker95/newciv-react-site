import React from "react";
import Cosplay1 from "../images/cosplay1.jpg";
import Cosplay2 from "../images/cosplay2.jpg";
import Cosplay3 from "../images/cosplay3.jpg";
import Cosplay4 from "../images/cosplay4.jpg";

export default function Cosplay() {
  return (
    <div>
      <div className="header">
        <h1 className="h1"> Cosplay Projects </h1>
      </div>
      <div className="section">
        <div className="artsectiontext">
          <p>
            Its one thing to make drawings and 3D prints, its another thing to
            become a character from my story! Here are my Cosplay's so far! Made
            for Events and themed party's.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="sectionhalf">
          <img className="imgs" src={Cosplay1} alt="Logo" />
        </div>
        <div className="sectionhalf">
          <div>
            <img className="imgs" src={Cosplay2} alt="Logo" />
            <p id="p1" className="sectiontext">
              Movement Warrior: <br /> <br />
              Hailing from a more improvrished section of city's they became
              politically motivated to break the system that kept them down, nor
              cared for them. They also served to protect local communitys from
              crime in the abssense of Police.
              <br />
              <br />
              This Cosplay is one of my best, using 3D Printed Parts and Metal
              salvaged from baked bean cans. Strapped together with dog collars
              and string. Tearing up old red tshirts and different fabrics to
              put together this Cosplay.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sectionhalf">
          <img className="imgs" src={Cosplay3} alt="Logo" />
        </div>
        <div className="sectionhalf">
          <div>
            <p id="p1" className="sectiontext">
              Pre Nation Knight <br /> <br />
              Before the Nation the first Knights Suits where less advanced than
              the Modern 22nd Century suits. Though they where powerful none the
              less, still capable of great speed and strength. Powered by
              inbuilt batterys and Hydrogen convertors. .<br /> <br />
              This costume was a slow project that I added to over time, adding
              paint and making it more complex. Using 3d printed parts, metal
              and magnets. With the main suit being made of exercise mat foam.
              It won best costume at a horror movie camp out, which was pretty
              great!
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sectionhalf">
          <img className="imgs" src={Cosplay4} alt="Logo" />
        </div>
        <div className="sectionhalf">
          <div>
            <p id="p1" className="sectiontext">
              Nation Knight Centurion <br /> <br />
              Depiciting the Suit of a Centurion, a knight in charge of 100
              others. This suit was intended to be an improvement on the first,
              using the same materials with greater care put towards making and
              painting it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
