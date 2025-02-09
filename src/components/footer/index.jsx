import React from "react";
import logo from "../../assets/astraLogo.webp";
import "./styles.sass";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footerItemsContainer'>
          <div className='footerItem'>
            <div className='itemLogo'>
              <img
                src={logo}
                alt='logo'
                className='img'
              />
            </div>
            <div className='itemDescription'>
              <p className='description'>
                Маркетинговое агентство - с многочисленными кейсами и инновационным подходом к каждому проекту!
              </p>
            </div>
          </div>
          <div className='footerItem'>
            <div className='itemTitle'>
              <h5 className='title'>Навигация</h5>
            </div>
            <div className='footerLinks'>
              <a
                href=''
                className='link'
              >
                Наши услуги
              </a>
              <a
                href=''
                className='link'
              >
                Кейсы
              </a>
              <a
                href=''
                className='link'
              >
                О нас
              </a>
              <a
                href=''
                className='link'
              >
                Контакты
              </a>
            </div>
          </div>
          <div className='footerItem'>
            <div className='itemTitle'>
              <h5 className='title'>Наши контакты</h5>
            </div>
            <div className='footerLinks'>
              <a
                href='tel:+998909999999'
                className='link'
              >
                +998909999999
              </a>
              <a
                href='#'
                className='link'
              >
                Узбекистан, Ташкент, Зиелилар, 9
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
