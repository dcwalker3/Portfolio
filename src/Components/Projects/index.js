import React from 'react'

import Portfolio from './Portfolio'

import './index.css';
import FileWalker from './FileWalker';

export default function Project(props) {
    return(
        <div id="projects-container">
            <div id="projects-content">
                <div id="project-header">
                    <h1>Projects</h1>
                </div>
                <Portfolio/>
                <FileWalker/>
                <span className='view-more-projects'>
                    <a href="https://www.github.com/dcwalker3" alt="My Github" target={"_blank"} rel="noreferrer" className='site-links'>
                        ⮕ View More Projects
                    </a>
                </span>
            </div>
        </div>
    )
}
