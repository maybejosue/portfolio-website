import React from "react";

//animation
import { Animated } from "react-animated-css";

export default function SoftwareEnginner() {
  const animationType = "rubberBand";
  const duration = 5500;

  return (
    <div className="software-engineer-animation-container">
      <div className="software-text">
        <Animated
          animationIn={animationType}
          animationInDelay="3000"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate">S </h3>
        </Animated>

        <Animated
          animationIn={animationType}
          animationInDelay="3100"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> o</h3>
        </Animated>

        <Animated
          animationIn={animationType}
          animationInDelay="3200"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> f</h3>
        </Animated>

        <Animated
          animationIn={animationType}
          animationInDelay="3300"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> t</h3>
        </Animated>

        <Animated
          animationIn={animationType}
          animationInDelay="3400"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> w</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="3500"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> a</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="3600"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> r</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="3700"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> e</h3>
        </Animated>
      </div>
      <div className="engineer-text">
        <Animated
          animationIn={animationType}
          animationInDelay="3800"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> E</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="3900"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> n</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4000"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> g</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4100"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> i</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4200"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> n</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4300"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> e</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4400"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> e</h3>
        </Animated>
        <Animated
          animationIn={animationType}
          animationInDelay="4500"
          animationInDuration={`${duration}`}
          className="inf-animate"
        >
          <h3 className="animate"> r</h3>
        </Animated>
      </div>
    </div>
  );
}
