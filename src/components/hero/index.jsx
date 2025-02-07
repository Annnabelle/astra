import React from "react";
import heroImage from "../../assets/hero.png";
import TitleAnimation from "../titleAnimation";
import "./styles.sass";
import Button from "../button";

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
            <div className='titleWrapper'>
              <h1 className='title'>Astra Media</h1>
              {/* <TitleAnimation title='Media' /> */}
            </div>
            <div className='contentText'>
              <p className='text'>
                Маркетинговое агентство - с многочисленными кейсами и инновационным подходом к каждому проекту!
              </p>
            </div>
            <div className='contentBtn'>
              <Button>Связаться с нами</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
