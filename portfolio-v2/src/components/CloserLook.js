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
      history.replace({ state: filtering[0] });
    } else {
      return <Redirect to="/" />;
    }
  }
  let shorten = history.location.state;

  return (
    <section id="closerLook" style={{ background: "white" }}>
      <div>
        <div>
          <div className="go-back">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.63718 12.477L10.33 16.1698C10.45 16.2898 10.6 16.3498 10.75 16.3498C10.9 16.3498 11.06 16.2898 11.17 16.1698C11.4 15.9398 11.4 15.5598 11.17 15.3198L8.45005 12.5999H16.9999C17.3299 12.5999 17.5999 12.3299 17.5999 11.9999C17.5999 11.6699 17.3299 11.3999 16.9999 11.3999H8.44989L11.18 8.66982C11.41 8.43982 11.41 8.05982 11.18 7.81982C10.95 7.57982 10.57 7.58982 10.33 7.81982L6.57997 11.5698C6.55189 11.5979 6.52725 11.6282 6.50602 11.6602C6.43916 11.757 6.3999 11.8741 6.3999 11.9999C6.3999 12.1939 6.49322 12.3672 6.63718 12.477Z"
                fill="#808080"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 17.79 6.21 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21 17.79 1.5 12 1.5ZM12 21.3C6.87 21.3 2.7 17.13 2.7 12C2.7 6.87 6.87 2.7 12 2.7C17.13 2.7 21.3 6.87 21.3 12C21.3 17.13 17.13 21.3 12 21.3Z"
                fill="#808080"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 17.79 6.21 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21 17.79 1.5 12 1.5ZM12 21.3C6.87 21.3 2.7 17.13 2.7 12C2.7 6.87 6.87 2.7 12 2.7C17.13 2.7 21.3 6.87 21.3 12C21.3 17.13 17.13 21.3 12 21.3Z"
                fill="#808080"
                fill-opacity="0.01"
              ></path>
            </svg>
            Go Back
          </div>
        </div>
        <div className="cl-content">
          <div className="content-img">
            <img src={shorten.img} />
          </div>
          <div className="content-text">
            <h3>{shorten.name}</h3>
            <p>{shorten.appDesc}</p>
            <p>{shorten.myTask}</p>
            <p>{shorten.myExperience}</p>
          </div>
        </div>
        <div className="btn-links">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6055 11.4645C20.459 9.99365 16.8951 6 12 6C7.10491 6 3.54104 9.99365 2.39445 11.4645C2.14626 11.7829 2.14626 12.2171 2.39445 12.5355C3.54104 14.0063 7.10491 18 12 18C16.8951 18 20.459 14.0063 21.6055 12.5355C21.8537 12.2171 21.8537 11.7829 21.6055 11.4645ZM20.55 12C20.55 12 17.13 7.2 12 7.2C6.87 7.2 3.45 12 3.45 12C3.45 12 6.87 16.8 12 16.8C17.13 16.8 20.55 12 20.55 12ZM12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5ZM14.3 12C14.3 13.2703 13.2703 14.3 12 14.3C10.7297 14.3 9.7 13.2703 9.7 12C9.7 10.7297 10.7297 9.7 12 9.7C13.2703 9.7 14.3 10.7297 14.3 12Z"
                fill="#808080"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.57 20.9601C8.64 20.9901 8.71 21.0001 8.78 21.0001C9.02 21.0001 9.24 20.8501 9.34 20.6101L15.79 3.81005C15.9 3.50005 15.75 3.15005 15.44 3.03005C15.14 2.92005 14.79 3.07005 14.67 3.38005L8.22 20.1801C8.11 20.4901 8.26 20.8401 8.57 20.9601ZM7.00007 18.0001C6.85007 18.0001 6.69007 17.9401 6.58007 17.8201L1.18007 12.4201C0.950068 12.1901 0.950068 11.8101 1.18007 11.5701L6.58007 6.17006C6.81007 5.94006 7.19007 5.94006 7.43007 6.17006C7.66007 6.40006 7.66007 6.78006 7.43007 7.02006L2.45007 12.0001L7.43007 16.9801C7.66007 17.2101 7.66007 17.5901 7.43007 17.8301C7.31007 17.9401 7.15007 18.0001 7.00007 18.0001ZM17 18.0001C16.85 18.0001 16.69 17.9401 16.58 17.8201C16.35 17.5901 16.35 17.2101 16.58 16.9701L21.55 12.0001L16.57 7.02006C16.34 6.79006 16.34 6.41006 16.57 6.17006C16.81 5.94006 17.19 5.94006 17.42 6.17006L22.82 11.5701C23.05 11.8001 23.05 12.1801 22.82 12.4201L17.42 17.8201C17.31 17.9401 17.15 18.0001 17 18.0001Z"
                fill="#808080"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
