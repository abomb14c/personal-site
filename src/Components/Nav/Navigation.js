import React from 'react';
import './nav.css';
import { NavLink } from "react-router-dom";
import * as routes from '../../Constants/Routes';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logo-div">
        <div className="logo"></div>
        <h3 className="logo-name">Alan J Charles</h3>
        <h5 className="logo-name logo-byline">Front End Developer</h5>
      </div>
      <div className ="nav-div">
        <NavLink to={routes.HOME}>Home</NavLink>
        <NavLink to={routes.PROJECTS}>Projects</NavLink>
        <NavLink to={routes.CONTACT}>Contact</NavLink>
        <NavLink to={routes.BLOG}>Blog</NavLink>
      </div>
    </div>
  )
}

export default Navigation;