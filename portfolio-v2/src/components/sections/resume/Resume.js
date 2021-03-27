import React from "react";
import "./Resume.css";
import resume from "../../../media/resume.pdf";

export default function Resume() {
  return (
    <div className="div-iframe">
      <iframe type="application/pdf" className="iframe" src={resume} />
    </div>
  );
}
