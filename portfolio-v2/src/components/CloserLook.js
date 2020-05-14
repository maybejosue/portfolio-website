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
    history.push({ state: filtering[0] });
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
