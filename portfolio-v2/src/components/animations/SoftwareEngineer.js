import React from "react";
import "./SoftwareEngineer.css";

//animation
import { Animated } from "react-animated-css";

//animation data
import {animatedata} from '../../data/animatedata.js'

export default function SoftwareEnginner() {
  const animationType = "rubberBand";
  const duration = 5500;

  return (
    <div className="software-engineer-animation-container">
      <div className="test">
        <div className="software-text">
          {animatedata.software.word.map(data => (
            <Animated
            animationIn={animationType}
            animationInDelay={data.animationDelay}
            animationInDuration={`${duration}`}
            className="inf-animate"
            key={data.id}
          >
            <h3 className="animate">{data.letter} </h3>
          </Animated>
          ))}
          
        </div>


        <div className="engineer-text">
        {animatedata.engineer.word.map(data => (
            <Animated
            animationIn={animationType}
            animationInDelay={data.animationDelay}
            animationInDuration={`${duration}`}
            className="inf-animate"
            key={data.id}
          >
            <h3 className="animate">{data.letter} </h3>
          </Animated>
          ))}
        </div>
      </div>
    </div>
  );
}
