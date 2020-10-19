import React from "react";
import "./CloserLook.css";
import { useHistory, Redirect } from "react-router-dom";
import { projectData } from "../../../data/projectdata.js";

// SVGs
import { GoBack, LiveView, SourceCode } from "../../../utils/index.js";

export default function CloserLook(props) {
  const history = useHistory();

  const id = props.match.params.id;

  if (!history.location.state) {
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
          <div
            title="Go Back"
            className="go-back"
            onClick={() => history.goBack()}
          >
            <GoBack />
            Go Back
          </div>
        </div>
        <div className="cl-content">
          <div className="content-img-container">
            <img className="content-img" src={shorten.img} alt="project" />
          </div>
          <div className="content-text">
            <a
              href={shorten.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              title="Live View"
            >
              <h3>{shorten.name}</h3>
            </a>
            <div className="content-info">
              <p className="app-desc">
                <span className="cl-span">App Description:</span>
                <br />
                <br />
                {shorten.appDesc}
                <br />
                <br />
              </p>
              <p className="my-task">
                <span className="cl-span">Tech Stack:</span>
                <br />
                <br />
                {shorten.techStack}
                <br />
                <br />
              </p>
              <p>
                <span className="cl-span">Responsibilities:</span>
                <br />
                <br />
                <div className="responsibilities">
                  {shorten.responsibility.map((task) => (
                    <ul>
                      <li>{task}</li>
                    </ul>
                  ))}
                </div>
              </p>
            </div>
            <div className="btn-links">
              <a
                href={shorten.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                title="Live View"
              >
                <LiveView />
              </a>
              <a
                href={shorten.githubRepoToLive}
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
              >
                <SourceCode />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
