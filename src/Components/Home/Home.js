import React from 'react';
import HomeIntro from '../HomeIntro/HomeIntro';
import HomeButtonContainer from '../HomeButtonContainer/HomeButtonContainer';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <HomeIntro /> 
      <HomeButtonContainer /> 
    </div>
  )
}

export default Home; 