import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetails.css";
import GitHub from "@mui/icons-material/GitHub";

function ProjectDetails() {
  const { id } = useParams();
  const project = ProjectList[id];
  const github = "https://github.com/DonAttai?tab=repositories";
  return (
    <div className="project mx-auto">
      <h1 className="text-center">{project.name}</h1>
      <img src={project.image} className="img-fluid mb-3" alt="" />
      <p>
        <span className="fw-bold text-center">Technologies</span>:{" "}
        {project.technologies}
      </p>
      <span className="">
        <a href={project.url} target="_blank" rel="noreferrer" className="mx-2">
          visit site
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mx-2 fw-bold"
        >
          <GitHub className="fs-4" />
        </a>
      </span>
    </div>
  );
}

export default ProjectDetails;
