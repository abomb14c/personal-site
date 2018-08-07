import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import './home-button-container.css';

class HomeButtonContainer extends Component {


handleClick = (event) => { 
  event.preventDefault()
}
  render() {
    return (
      <div className="home-button-container">
        <button className=" home-button projects-button">Projects</button>
        <button 
          className="home-button resume-button">
          <a
          className="resume-button-link"
          href="https://imgur.com/a/JohvRyy">Resume</a>
        </button>
        <button 
          className="home-button github-button">
          <a 
            className="github-button-link"
            href="https://github.com/abomb14c">Github</a>
        </button>
      </div>
    )
  };
  }

export default HomeButtonContainer;