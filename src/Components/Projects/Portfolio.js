import React from "react";

import {
  FaGithub
} from "react-icons/fa";

import thumbnail from "../../media/img/Portfolio-Thumbnails/Portfolio-Site/Portfolio-Site.png";

export default function Portfolio() {
  return (
    <div id="projectComponent" className="project">
      <h4 className="project-header">Portfolio</h4>
      <div className="project-content">
        <div className="project-image">
          <img src={thumbnail} alt="Portfolio Site" className="thumbnail"/>
        </div>
        <div className="project-description">
          <p>
            This is a portfolio site that I built using React.js, Bootstrap, and Tailwind CSS. The goal 
            of this project was to create a website to showcase my skills and projects.
          </p>
        </div>
        <div className="project-links">
          <a href="https://www.github.com/dcwalker3/Portfolio" alt="Github link to my portfolio site" target={"_blank"} rel="noreferrer">
            <FaGithub className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}
