import React from "react";

export const ProjectCard = ({ project }) => {
  const { name, desc, img } = project;
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={img} className="card-img" />
      </div>
      <div className="card-text-content-container">
        <h6>{name}</h6>
        <p>{desc}</p>
        <div className="card-btn-container">
          <div className="card-btn">
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6055 11.4645C20.459 9.99365 16.8951 6 12 6C7.10491 6 3.54104 9.99365 2.39445 11.4645C2.14626 11.7829 2.14626 12.2171 2.39445 12.5355C3.54104 14.0063 7.10491 18 12 18C16.8951 18 20.459 14.0063 21.6055 12.5355C21.8537 12.2171 21.8537 11.7829 21.6055 11.4645ZM20.55 12C20.55 12 17.13 7.2 12 7.2C6.87 7.2 3.45 12 3.45 12C3.45 12 6.87 16.8 12 16.8C17.13 16.8 20.55 12 20.55 12ZM12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5ZM14.3 12C14.3 13.2703 13.2703 14.3 12 14.3C10.7297 14.3 9.7 13.2703 9.7 12C9.7 10.7297 10.7297 9.7 12 9.7C13.2703 9.7 14.3 10.7297 14.3 12Z"
                fill="#f8f6f5"
              ></path>
            </svg>
          </div>
          <div className="card-btn">
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.57 20.9601C8.64 20.9901 8.71 21.0001 8.78 21.0001C9.02 21.0001 9.24 20.8501 9.34 20.6101L15.79 3.81005C15.9 3.50005 15.75 3.15005 15.44 3.03005C15.14 2.92005 14.79 3.07005 14.67 3.38005L8.22 20.1801C8.11 20.4901 8.26 20.8401 8.57 20.9601ZM7.00007 18.0001C6.85007 18.0001 6.69007 17.9401 6.58007 17.8201L1.18007 12.4201C0.950068 12.1901 0.950068 11.8101 1.18007 11.5701L6.58007 6.17006C6.81007 5.94006 7.19007 5.94006 7.43007 6.17006C7.66007 6.40006 7.66007 6.78006 7.43007 7.02006L2.45007 12.0001L7.43007 16.9801C7.66007 17.2101 7.66007 17.5901 7.43007 17.8301C7.31007 17.9401 7.15007 18.0001 7.00007 18.0001ZM17 18.0001C16.85 18.0001 16.69 17.9401 16.58 17.8201C16.35 17.5901 16.35 17.2101 16.58 16.9701L21.55 12.0001L16.57 7.02006C16.34 6.79006 16.34 6.41006 16.57 6.17006C16.81 5.94006 17.19 5.94006 17.42 6.17006L22.82 11.5701C23.05 11.8001 23.05 12.1801 22.82 12.4201L17.42 17.8201C17.31 17.9401 17.15 18.0001 17 18.0001Z"
                fill="#f8f6f5"
              ></path>
            </svg>
          </div>
          <div className="card-btn">
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="none" rx="0" ry="0"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.87012 9.09992C8.72012 9.09992 8.56012 9.03992 8.45012 8.91992L3.57006 4.03985V6.84C3.57006 7.17 3.30006 7.44 2.97006 7.44C2.64006 7.44 2.37006 7.17 2.37006 6.84V2.6C2.37006 2.45289 2.42371 2.31771 2.51242 2.21305C2.52421 2.19824 2.53678 2.18385 2.55012 2.16992C2.68576 2.02839 2.87357 1.9738 3.05406 2H7.21006C7.54006 2 7.81006 2.27 7.81006 2.6C7.81006 2.93 7.54006 3.2 7.21006 3.2H4.4302L9.30012 8.06992C9.53012 8.29992 9.53012 8.67992 9.30012 8.91992C9.18012 9.03992 9.02012 9.09992 8.87012 9.09992ZM21.77 22.0001L21.7665 22.0001H17.5301C17.2001 22.0001 16.9301 21.7301 16.9301 21.4001C16.9301 21.0701 17.2001 20.8001 17.5301 20.8001H20.33L15.45 15.9201C15.22 15.6901 15.22 15.3101 15.45 15.0701C15.68 14.8301 16.06 14.8401 16.3 15.0701L21.1701 19.9402V17.1601C21.1701 16.8301 21.4401 16.5601 21.7701 16.5601C22.1001 16.5601 22.3701 16.8301 22.3701 17.1601V21.3369C22.3853 21.5079 22.3286 21.6859 22.2 21.8201C22.1594 21.8607 22.1141 21.8945 22.0662 21.9214C21.9822 21.9694 21.8856 21.9977 21.7829 21.9999L21.77 22.0001ZM4.42003 20.8001H7.21006C7.54006 20.8001 7.81006 21.0701 7.81006 21.4001C7.81006 21.7301 7.54006 22.0001 7.21006 22.0001H2.97006C2.64006 22.0001 2.37006 21.7301 2.37006 21.4001V17.1601C2.37006 16.8301 2.64006 16.5601 2.97006 16.5601C3.30006 16.5601 3.57006 16.8301 3.57006 17.1601V19.95L8.45012 15.07C8.68012 14.84 9.06012 14.84 9.30012 15.07C9.54012 15.3 9.53012 15.68 9.30012 15.92L4.42003 20.8001ZM15.87 9.10006C15.72 9.10006 15.56 9.04006 15.45 8.92006C15.22 8.69006 15.22 8.31006 15.45 8.07006L20.3201 3.2H17.5301C17.2001 3.2 16.9301 2.93 16.9301 2.6C16.9301 2.27 17.2001 2 17.5301 2H21.7165C21.8877 1.98469 22.0658 2.04138 22.2 2.17006C22.3413 2.30541 22.3959 2.49271 22.3701 2.67285V6.84C22.3701 7.17 22.1001 7.44 21.7701 7.44C21.4401 7.44 21.1701 7.17 21.1701 6.84V4.04997L16.3 8.92006C16.18 9.04006 16.02 9.10006 15.87 9.10006Z"
                fill="#f8f6f5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
