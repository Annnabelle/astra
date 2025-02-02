import React, { useState } from "react";
import logo from "../../assets/astraLogo.webp";
import NavBar from "./navBar/index.jsx";
import Button from "../button";
import "./styles.sass";

const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  return (
    <header className={`header  ${burgerIsOpen ? "activeHeader" : ""}`}>
      <div className=' container'>
        <div className='headerItems'>
          <div className='headerItem'>
            <a
              href='/'
              className='headerLogo'
            >
              <img
                src={logo}
                alt='walterLogo'
                className='logo'
              />
            </a>
          </div>
          <div className='headerItem itemFullWidth'>
            <span
              className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
              onClick={(e) => toggleMenu(false)}
            ></span>
            <NavBar
              burgerIsOpen={burgerIsOpen}
              toggleMenu={toggleMenu}
            />
          </div>
          <div className='headerButton'>
            <a href='/contact-us'>
              <Button>Contact us</Button>
            </a>
          </div>
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
