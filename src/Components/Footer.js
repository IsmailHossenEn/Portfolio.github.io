import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "@mui/material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
        <Link
          href="https://www.facebook.com/ismail.hossainemon.35/"
          target="blank"
          rel="noopener"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://twitter.com/IsmailhossenEn"
          target="blank"
          rel="noopener"
        >
          <TwitterIcon />
        </Link>
      </div>
      <p>&copy; 2023 Ismail Hossen Emon</p>
    </div>
  );
}

export default Footer;
