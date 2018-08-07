import React from 'react';
import './home-intro.css';

const IntroHome = () => {
  return (
    <div className="intro-home-container">
      <h1 className="intro-home-title">Hello, I'm Alan!</h1>
      <h3 className="intro-home-desc">I’m a Front-end developer passionate about great, 
        functional design and building things that fill a need in peoples 
        lives. Take a second to check out my projects or to 
        <a className="email-link" href="mailto:alanjcharles14@gmail.com"> 
         drop me a line</a>if you need help building something cool! 
</h3>
    </div> 
  )
}

export default IntroHome;