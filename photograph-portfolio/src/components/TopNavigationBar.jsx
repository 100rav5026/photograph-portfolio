import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx'
import HamBurgerMenu from './HamBurgerMenu';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const [isClicked, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClicked);
    }

  return (
    <>
    <nav className="top-navbar">
        <div className="navbar-logo">
            <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="navbar-options">
          <p>+91 8097975380</p>
          <p><AiOutlinePhone/></p>
          <p>souravmudaliar19620@gmail.com</p>
          <p><AiOutlineMail/></p>
          <HamBurgerMenu handleClick={handleClick}/>
        </div>
    </nav>
    {isClicked && (
        <div className="dropdown-menu">
          <ul>
            <button onClick={handleClick}><RxCross1/></button>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationBar;