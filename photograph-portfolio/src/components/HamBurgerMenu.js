import React from "react";

const HamBurgerMenu = (props) => {
    return(
        <div className="hamburger-menu" onClick={props.handleClick}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    )
}

export default HamBurgerMenu;