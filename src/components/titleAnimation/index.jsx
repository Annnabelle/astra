import React from "react";
import "./styles.sass";

const TitleAnimation = ({ title }) => {
  return (
    <div class='titleAnimation'>
      <h2 className='titleAnimation-title'>{title}</h2>
      <h2 className='titleAnimation-title'>{title}</h2>
    </div>
  );
};

export default TitleAnimation;
