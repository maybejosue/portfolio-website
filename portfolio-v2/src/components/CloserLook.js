import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { projectData } from "../data/projectdata.js";
export default function CloserLook(props) {
  const history = useHistory();

  if (!history.location.state) {
    const id = props.match.params.id;

    let filtering = projectData.filter(
      (projects) => parseInt(id) === projects.id
    );

    if (filtering[0]) {
      history.push({ state: filtering[0] });
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    <div>
      <div>
        <div>'button'</div>
      </div>
      <div>
        <h3>{history.location.state.name}</h3>
      </div>
    </div>
  );
}
