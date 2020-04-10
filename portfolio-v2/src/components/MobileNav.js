import React from "react";

// Image
import MyPic from "../img/professional-pic.png";

export default function MobileNav() {
  return (
    <div>
      <div className="img-container">
        <img className="img" src={MyPic} />
      </div>
    </div>
  );
}
