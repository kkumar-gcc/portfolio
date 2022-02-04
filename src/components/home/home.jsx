
import "./home.css";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-left-container">
          <span className="home-subtitle">Welcome to my portfolio</span>
          <h1>
            Hi, I'm <span className="home-title-name">Krishan Kumar</span>
          </h1>
          <span>
            {" "}
            a
            <Typewriter
              options={{
                strings: ["Developer.", "Professional Coder.", "Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="home-right-container">
          <div className="image-container">
            <img src={"https://picsum.photos/id/1/200/300"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
