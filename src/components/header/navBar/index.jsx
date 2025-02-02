import React from "react";
import Button from "../../button";

const NavBar = ({ burgerIsOpen, toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu(false);
  };
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <a
              className='navLink'
              href='/about'
              onClick={handleLinkClick}
            >
              about
            </a>
            <a
              className='navLink'
              href='/projects'
              onClick={handleLinkClick}
            >
              about
            </a>
            <a
              className='navLink'
              href='/news'
              onClick={handleLinkClick}
            >
              about
            </a>

            <a
              className='navLink'
              href='/contact-us'
              onClick={handleLinkClick}
            >
              about
            </a>
          </div>
        </div>
        <div className='headerNavBtn'>
          <Button>hello</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
