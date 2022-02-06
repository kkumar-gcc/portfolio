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
          <span className="article"> a </span>
          <Typewriter
            options={{
              strings: ["Developer.", "Professional Coder.", "Designer."],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="desc">
            I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
        </div>
        <div className="home-right-container">
          <div className="image-container">
            <div className="image-inner-container">
              <img src={"https://picsum.photos/id/1/200/300"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
