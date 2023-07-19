import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { Link } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Ismail Hossen</h2>
        <div className="prompt">
          <p>
            Front end developer with a passion for learning new technologies.
          </p>
          <Link
            href="https://www.linkedin.com/in/ismail-hossen-emon-279abb26b/"
            target="blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </Link>

          <Link
            href="https://github.com/IsmailHossenEn"
            target="blank"
            rel="noopener"
          >
            <GitHubIcon />
          </Link>

          <Link href="ismailhossen.en@gmail.com" target="blank" rel="noopener">
            <EmailIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
              TailwindCSS, Firebase
            </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
