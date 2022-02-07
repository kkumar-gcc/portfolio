import "./about.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-content">
          <div className="about-content-left">
            <span>Hi, I'm Krishan kumar and I am a full-stack developer</span>
            <p>
              I was born in Kansas, and like little Ellie, I always dreamed that
              a hurricane would take me somewhere to another country. And once I
              really ended up in another country - in China, studying at a
              business school. There I began to travel a lot around Asia in my
              free time and then moved to work in Munich.
            </p>
            <p>
              I discovered the world of low-cost airlines and began to fly
              somewhere and see the world every weekend. Being somewhere in the
              15th country, I realized that I had enough experience and
              knowledge to share with others - and so this blog appeared. Here
              you will find useful tips, my travel experiences, life hacks and
              the usual daily thoughts about everything that surrounds me.
            </p>
          </div>
          <div className="about-content-right"></div>
        </div>
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
      </div>
    </>
  );
}
export default About;
