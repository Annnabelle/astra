import React from "react";
import heroImage from "../../assets/hero.png";
import "./styles.sass";
import HeroTitle from "./heroTitle";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroImage'>
        <img
          src={heroImage}
          className='img'
          alt='img'
        />
      </div>
      <div className='heroContent'>
        <div className='container'>
          <div className='heroContentContainer'>
            <HeroTitle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
