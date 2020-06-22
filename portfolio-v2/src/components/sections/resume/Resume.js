import React from "react";
import "./Resume.css";
import res from "../../../utils/resume.pdf";

export default function Resume() {
  return (
    <div className="div-iframe">
      <iframe type="application/pdf" className="iframe" src={res} />
    </div>
  );
}
