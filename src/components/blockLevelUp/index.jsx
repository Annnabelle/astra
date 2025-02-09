import React from "react";
import Button from "../button";
import levelUpBg from "../../assets/levelUpBg.webp";
import "./styles.sass";

const BlockLevelUp = () => {
  return (
    <div className='blockLevelUp'>
      <div className='blockBgImage'>
        <img
          src={levelUpBg}
          alt='levelUpBg'
          className='img'
        />
      </div>
      <div className='blockLevelUpContainer'>
        <div className='container'>
          <div className='blockLevelUpContentContainer'>
            <div className='blockLevelUpTitle'>
              <h3 className='title'>Поможем развить ваш бизнес на лучшем уровне!</h3>
            </div>
            <div className='blockLevelUpButton'>
              <Button>Связаться с нами</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLevelUp;
