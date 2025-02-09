import React from "react";
import staticBg from "../../assets/staticBg.webp";
import "./styles.sass";

const StaticBlock = () => {
  return (
    <div className='staticBlock'>
      <div className='staticBg'>
        <img
          src={staticBg}
          alt='staticBg'
          className='img'
        />
      </div>
      <div className='container'>
        <div className='staticContainer'>
          <div className='staticItem'>
            <div className='itemTitle'>
              <h3 className='title'>432</h3>
            </div>
            <div className='itemSubtitle'>
              <p className='subtitle'>Реализованных проектов</p>
            </div>
          </div>
          <div className='staticItem'>
            <div className='itemTitle'>
              <h3 className='title'>432</h3>
            </div>
            <div className='itemSubtitle'>
              <p className='subtitle'>Реализованных проектов</p>
            </div>
          </div>
          <div className='staticItem'>
            <div className='itemTitle'>
              <h3 className='title'>432</h3>
            </div>
            <div className='itemSubtitle'>
              <p className='subtitle'>Реализованных проектов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBlock;
