import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetails.css";
import GitHub from "@mui/icons-material/GitHub";

function ProjectDetails() {
  const { id } = useParams();
  const project = ProjectList[id];
  const github = "https://github.com/DonAttai?tab=repositories";
  return (
    <div className="project mt-5">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <span className="fw-bold">Technologies</span>: {project.technologies}
      </p>
      <span className="">
        <a href={project.url} target="_blank" rel="noreferrer" className="mx-2">
          View project
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mx-2 fw-bold"
          id="github"
        >
          <GitHub className="fs-4" />
        </a>
      </span>
    </div>
  );
}

export default ProjectDetails;
