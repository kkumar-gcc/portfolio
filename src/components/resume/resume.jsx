import "./resume.css";
import { saveAs } from 'file-saver';
function Resume() {
    
  return (
    <>
      <div className="skill-title">
        <h1>My Skills</h1>
      </div>
      <div className="skill-content">
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#e34c26" }}
            ></circle>
          </svg>
          <h1>
            HTML 5<br />
            90%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#563d7c" }}
            ></circle>
          </svg>
          <h1>
            CSS 3<br />
            100%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#f1e05a" }}
            ></circle>
          </svg>
          <h1>
            JAVA-SCRIPT
            <br />
            100%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#a53b70" }}
            ></circle>
          </svg>
          <h1>
            SCSS
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#00d8ff" }}
            ></circle>
          </svg>
          <h1>
            REACT JS
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "rgb(63, 160, 55)" }}
            ></circle>
          </svg>
          <h1>
            MONGO DB
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#00758F" }}
            ></circle>
          </svg>
          <h1>
            MYSQL
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#68a063 " }}
            ></circle>
          </svg>
          <h1>
            NODE JS
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#4F5D95" }}
            ></circle>
          </svg>
          <h1>
            PHP
            <br />
            40%
          </h1>
        </div>
        <div className="bar">
          <svg>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              style={{ stroke: "#f34b7d" }}
            ></circle>
          </svg>
          <h1>
            C & C++
            <br />
            40%
          </h1>
        </div>
      </div>
      <div className="experience-title">
        <h1>Experience & Education</h1>
      </div>
       </>
  );
}

export default Resume;
