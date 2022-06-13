import "../styles/Home.css";
import { ProgressBar } from "react-bootstrap";

function Home() {
  const javascript = 70;
  const python = 55;

  return (
    <section className="home">
      <div className="about">
        <h4 className="mb-5">Hello, I am John Attai</h4>
        <div className="prompt">
          <p>...a software developer with an endless passion for learning</p>
        </div>
      </div>
      <section className="skills">
        <h1 className="mt-3">Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>CSS, HTML, React.js, Redux, Bootstrap, TailwindCSS</span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>
              Node.js, Express.js, Flask, Django, MongoDb, Mysql, Heroku,
            </span>
          </li>
          <li className="item mt-3">
            <h3>Languages</h3>
          </li>
          <li className="item mb-2">
            <h5>JavaScript</h5>
            <ProgressBar now={javascript} label={`${javascript}%`} />
          </li>
          <li className="item">
            <h5>Python</h5>
            <ProgressBar now={python} label={`${python}%`} />
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Home;
