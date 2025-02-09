import React from "react";
import Button from "../../button";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./styles.sass";

const FooterContactUs = () => {
  return (
    <div className='footerContactUs'>
      <div className='container'>
        <div className='footerContactUsContainer'>
          <div className='footerContactUsItem'>
            <div className='itemTitle'>
              <h4 className='title'>Контакты для связи с нами:</h4>
            </div>
            <div className='itemContactIcons'>
              <div className='itemIcon'>
                <a
                  href='#'
                  className='link'
                >
                  <RiInstagramFill />
                </a>
              </div>
              <div className='itemIcon'>
                <a
                  href='#'
                  className='link'
                >
                  <FaTelegramPlane />
                </a>
              </div>
              <div className='itemIcon'>
                <a
                  href='#'
                  className='link'
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className='footerContactUsItem'>
            <Button>Свзяться с нами</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
