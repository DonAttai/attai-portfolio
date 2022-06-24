import "../styles/Home.css";
import js from "../assets/js.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import heroku from "../assets/heroku.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
// import attai from "../assets/attai.jpg";

function Home() {
  return (
    <section className="home">
      <div className="about">
        {/* <img src={attai} alt="" className="image" /> */}
        <h4 className="mb-5">Hello, I am John Attai</h4>
        <div className="prompt">
          <p>...a software developer with an endless passion for learning</p>
        </div>
      </div>
      <section className="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-menu">
          <div className="skills-items">
            <h2 className="skills-items-title" style={{ marginBottom: "10px" }}>
              Frontend
            </h2>
            <div className="icons">
              <img src={css} alt="" className="skill-icon" />
              <img src={html} alt="" className="skill-icon" />
              <img src={js} alt="" className="skill-icon" />
              <img src={react} alt="" className="skill-icon" />
            </div>
          </div>
          <div className="skills-items">
            <h2 className="skills-items-title">Backend</h2>
            <div className="icons">
              <img src={node} alt="" className="skill-icon" />
              <img src={python} alt="" className="skill-icon" />
              <img src={heroku} alt="" className="skill-icon" />
            </div>
          </div>
          <div className="skills-items">
            <h2 className="skills-items-title">Database</h2>
            <div className="icons">
              <img
                src={mongodb}
                alt=""
                width={"80px"}
                height={"80px"}
                className="db-icon"
              />
              <img
                src={mysql}
                alt=""
                width={"80px"}
                height={"80px"}
                className="db-icon"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
