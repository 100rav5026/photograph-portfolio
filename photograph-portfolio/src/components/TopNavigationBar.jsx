import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx'
import HamBurgerMenu from './HamBurgerMenu';
import { Link } from 'react-router-dom';
import Wydanglelogo from '../images/WydangleLogo.png'

const NavigationBar = () => {

    const [isClicked, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClicked);
    }

  return (
    <>
    <nav className="top-navbar">
        <div className="navbar-logo">
            <img className = "company-logo" src={Wydanglelogo} alt="Logo"/>
        </div>
        <div className="navbar-options">
          <p>+91 8097975380</p>
          <p><AiOutlinePhone/></p>
          <p>xyz@gmail.com</p>
          <p><AiOutlineMail/></p>
          <HamBurgerMenu handleClick={handleClick}/>
        </div>
    </nav>
    {isClicked && (
        <div className="dropdown-menu">
          <ul>
            <button onClick={handleClick}><RxCross1/></button>
            <li className="navbar-links"><Link to="/">Home</Link></li>
            <li className="navbar-links"><Link to="/about">About Us</Link></li>
            <li className="navbar-links"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationBar;