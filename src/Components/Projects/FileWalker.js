import React from 'react'

import {
    FaGithub
} from "react-icons/fa";
  
import thumbnail from "../../media/img/Portfolio-Thumbnails/File-Walker/FileWalker.png";

export default function FileWalker() {
  return (
    <div id="projectComponent" className="project">
      <h4 className="project-header">File Walker</h4>
      <div className="project-content">
        <div className="project-image">
          <img src={thumbnail} alt={"File Walker output"} className="thumbnail"/>
        </div>
        <div className="project-description">
          <p>
            File Walker is a command line file Utility tool that allows users to figure out the path to a file or a set of files with a specific extension.
            File Walker can also be used to list all files/directories in a directory and allows the user to store this information in a file.
          </p>
        </div>
        <div className="project-links">
          <a href="https://www.github.com/dcwalker3/File-Walker" alt="Github link to the file walker project" target={"_blank"} rel="noreferrer">
            <FaGithub className="icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}
