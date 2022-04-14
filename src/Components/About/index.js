import React from 'react'
import { Container, Button } from 'react-bootstrap'

import './index.css';

export default function About() {
  return (
    <div className='about-container mt-5'>
      <div className='about-content'>
        <h3 className='about-header'>Hello, I'm Dakota Walker</h3>
        <p className='about-text'>
          I'm a developer with a strong passion for learning new technologies
          and then incorporating them into my work. I enjoy being challenged and
          being able to create software that is both functional and intuitive that makes the
          user's life easier. Whenever I am not coding, I enjoy playing video games, spending time with my family, or
          playing Magic: The Gathering.
        </p>
      </div>
      <a href="../../media/documents/Resume.docx" alt="My Resume" download>
        <Button variant="primary" className={"resumeBtn"}>Download Resume</Button>
      </a>
    </div>
  )
}
