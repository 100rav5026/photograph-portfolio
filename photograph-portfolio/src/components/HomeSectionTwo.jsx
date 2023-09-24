import React from "react";
import {GrFacebook, GrInstagram, GrTwitter} from "react-icons/gr";
import {BsPinterest} from "react-icons/bs";
import {IoLogoYoutube} from "react-icons/io";

const HomeSectionTwo = () => {
    return(
    <div className="Home-Section-two">
        <p><b>CAPTURING MOMENTS, CREATING MEMORIES! LET US BE A PART OF YOUR JOURNEY.</b><br/><br/>
        <a className="Home-Section-two-links" href="#"><GrFacebook/></a>
        <a className="Home-Section-two-links" href="#"><GrInstagram/></a>
        <a className="Home-Section-two-links" href="#"><BsPinterest/></a>
        <a className="Home-Section-two-links" href="#"><IoLogoYoutube/></a>
        <a className="Home-Section-two-links" href="#"><GrTwitter/></a><br/>
        <hr className="Home-Section-two-hr-tag"/>
        </p>
        <p>We pride ourselves on providing not just a service but an experience, where you feel comfortable, valued, and inspired. Our goal is to create lasting memories that you and your loved ones will cherish for a lifetime. Freeze your most cherished moments in time, and together, let's paint a canvas of memories that will last forever.</p>
        <p>Contact us today to discuss how we can make your moments unforgettable!</p>
    </div>
    )
}

export default HomeSectionTwo