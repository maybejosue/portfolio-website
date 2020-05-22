import React from "react";

//images
import fillerpic from "../img/filler-pic.jpg";

export default function Aboutme() {
  return (
    <section id="aboutme">
      <div className="about-me-container">
        <h5 className="section-heading">About Me</h5>
        <div className="about-me-content-container">
          <div className="about-me-img-container">
            <img src={fillerpic} className="about-me-img" />
          </div>
          <div className="about-me-paragraph-container">
            <p>
              filler text: sk;hapoi fhpasih foiahp wsfhpoawhspefhahpoh sk;hapoif
              hpas ihfoiahpws fhpoaw hsp efh ahpoh sk ;ha poi fhpasih foiahpw
              sfhpoawh spe fha hpoh sk;hap oifhpasi hfoiahpw sfhp oawh spefha
              hpoh sk ;ha poi fh pasihf oiahpwsf hpoawh spefhahpoh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
