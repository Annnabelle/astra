import React from "react";
import ServicesCards from "./servicesCards";
import Button from "../button";
import "./styles.sass";

const Services = () => {
  return (
    <div className='services'>
      <div className='container'>
        <div className='servicesContainer'>
          <div className='servicesHeading'>
            <div className='headingTitle'>
              <h3 className='title'>Наши услуги</h3>
            </div>
            <div className='headingSeeMore'>
              <a
                href='#'
                className='seeMore'
              >
                Больше услуг
              </a>
            </div>
          </div>
          <ServicesCards />
          <div className='servicesContactUs'>
            <Button>Связаться с нами</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
