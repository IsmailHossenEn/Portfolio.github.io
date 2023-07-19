import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helper/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import "../styles/ProjectsDisplay.css";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>Skills:{project.skills}</p>
      <Link
        href="https://github.com/IsmailHossenEn"
        target="blank"
        rel="noopener"
      >
        <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
