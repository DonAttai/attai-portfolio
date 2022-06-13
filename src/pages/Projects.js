import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import { Container } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <div className="projects">
        <h1>Personal Projects</h1>
        <div className="projectList ">
          {ProjectList.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                name={project.name}
                image={project.image}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Projects;
