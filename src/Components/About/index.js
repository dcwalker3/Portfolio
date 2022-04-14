import React from 'react'
import { Container } from 'react-bootstrap'

import './index.css';

export default function About() {
  return (
    <div id="about ">
      <Container className='mt-5'>
        <h3 className="text-center">About Me:</h3>
        <p className='aboutBackground mt-4'>
            Ever since I got my first computer when I was about 10 years old, I have been fascinated by the world of computers. I have enjoyed the ability to be able to create 
            almost anything from simple websites to complex applications where the only true hard limiter is the amount of knowledge one has. Even back whenever I was a kid, I would
            tinker with html elements as a kid, and I would find it so amazing how a simple tag could almost magically get shown on my screen. From there my desire to learn and grow
            to be able to turn ideas into reality has never stopped. 
        </p>
        <p className='aboutBackground'>
            The first carrer path I pursued to explore my creative side was the engineering field. I specifically chose aerospace engineering because I wanted to be able to
            be involved in the creation of something that I felt had a lot of room for growth. I didn't want to re-invent the wheel everyday, but instead I wanted to leave the wheel behind
            and find a more efficient, cost effective, and overall cooler way to do things. This decision was made around the time I was a member of a FIRST robotics team known
            as <a href="https://parts3492.org/" target={"_blank"} rel="noreferrer" >PARTS 3492</a>. My time in this club also helped me to become an even better critical thinker as well 
            as how to effectively work with a team.
        </p>
      </Container>
    </div>
  )
}
