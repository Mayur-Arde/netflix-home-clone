import React, { useState, useEffect, } from 'react';
import './Nav.css';


function Nav() {
  const [ show, handleShow ] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNav);
    return () => window.removeEventListener('scroll', transitionNav);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__container">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix-Logo"
        />
        <img
          className="nav__avtar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="aavtar"
        />
      </div>
    </div>
  );
}

export default Nav;
