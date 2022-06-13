import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
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
  );
}

export default Projects;
