import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { projectData } from "../data/projectdata.js";

// SVGs
import { GoBack, LiveView, SourceCode } from "../utils/index.js";

export default function CloserLook(props) {
  const history = useHistory();

  if (!history.location.state) {
    const id = props.match.params.id;

    let filtering = projectData.filter(
      (projects) => parseInt(id) === projects.id
    );

    if (filtering[0]) {
      history.replace({ state: filtering[0] });
    } else {
      return <Redirect to="/" />;
    }
  }
  let shorten = history.location.state;

  return (
    <section id="closerLook">
      <div>
        <div>
          <div className="go-back" onClick={() => history.goBack()}>
            <GoBack />
            Go Back
          </div>
        </div>
        <div className="cl-content">
          <div className="content-img-container">
            <img className="content-img" src={shorten.img} />
          </div>
          <div className="content-text">
            <h3>{shorten.name}</h3>
            <p className="app-desc">{shorten.appDesc}</p>
            <p className="my-task">{shorten.myTask}</p>
            <p className="my-experience">{shorten.myExperience}</p>
          </div>
        </div>
        <div className="btn-links">
          <div>
            <LiveView />
          </div>
          <div>
            <SourceCode />
          </div>
        </div>
      </div>
    </section>
  );
}
