import React from 'react';
import './Styles.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__bg">
        <picture>
          <img src="./images/Header.webp" alt="Background"/>
        </picture>
      </div>

      <div className="hero__cnt">
        <h1 style={{fontSize:"70px", }}><span style={{color:"#E0A01A"}}>Savour</span> the flavour</h1>
        <p style={{fontSize:"20px"}}>Discover a world of delicious tastes.</p>
        <button style={{backgroundColor:"blue", borderRadius:"20px"}}>Explore Now</button>
      </div>
    </div>
  );
}

export default Hero;
