import React from 'react'
import { Container, Button } from 'react-bootstrap'
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

import './index.css';

export default function About() {
  return (
    <div className='about-container mt-5'>
      <div className='about-content'>
        <h3 className='about-header'>Hello, I'm Dakota Walker</h3>
        <p className='about-text'>
          I'm a software developer with a strong passion for creating reactive, scalable, and maintainable applications
          that are user-friendly and will be used by many.
        </p>
      </div>
      <span className='social-icons'>
        <a href="../../media/documents/Resume.docx" alt="My Resume" download>
          <FaFileAlt className='icon' />
        </a>
        <a href="https://www.github.com/dcwalker3" alt="My Github" target={"_blank"} rel="noreferrer">
          <FaGithub className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/dakota-walker-254bb31b7/" alt="My LinkedIn" target={"_blank"} rel="noreferrer">
          <FaLinkedin className='icon'/>
        </a>
      </span>
    </div>
  )
}
