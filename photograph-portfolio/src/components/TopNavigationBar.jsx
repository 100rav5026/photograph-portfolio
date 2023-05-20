import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx'
import HamBurgerMenu from './HamBurgerMenu';

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
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationBar;