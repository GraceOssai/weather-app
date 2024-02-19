import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="overlay">
          <div className="overlay-text">
            <h1>Open Weather</h1>
            <h3>
              Weather forecasts, nowcasts and <br /> history in a fast and elegant way
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero