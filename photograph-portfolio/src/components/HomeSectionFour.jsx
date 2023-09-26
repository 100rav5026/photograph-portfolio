import React from "react";
import reelicon from "../images/production-icon.png";

const HomeSectionFour = () => {
    return(
        <div className="Home-Section-four">
            <div className="Home-Section-four-Left">
                
            </div>
            <div className="Home-Section-four-Right">
            <h1>PRODUCTION SERVICES</h1>
                <h2>Where Imagination Meets Precision.</h2>
                <div className="Home-Section-four-right-bottom">
                    <img className="reel-icon" src={reelicon} alt="reel icon"/>
                    <p>Introducing our top-tier production services, where creativity meets precision to bring your vision to life. With a seasoned team of experts, cutting-edge technology, and a passion for storytelling, we specialize in crafting compelling narratives through visual and auditory experiences. Whether you're seeking video production, audio recording, or post-production magic, we are your trusted partner in turning ideas into captivating realities. From concept to final product, we're committed to delivering excellence that exceeds your expectations. Welcome to a world of limitless possibilities in production services.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionFour