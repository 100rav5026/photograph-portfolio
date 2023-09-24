import React from "react";
import cameraicon from "../images/camera-icon.png"

const HomeSectionThree = () => {
    return(
        <div className="Home-Section-Three">
            <div className="Home-Section-Three-Left">
                <h1>PHOTOSHOOT SERVICES</h1>
                <h2>Enhancing Your Vision, Perfecting Your Images!</h2>
                <div className="Home-Section-Three-Left-bottom">
                    <img className = "camera-icon" src={cameraicon} alt="Camera icon"/>
                    <p>Whether it's your dream wedding, a family reunion, a corporate event, or a personal portrait session, we go above and beyond to ensure that every image we capture tells a story and reflects the true essence of the moment. With an eye for detail and a commitment to excellence, we strive to deliver photographs that not only meet but exceed your expectations. Our approach is built on understanding your unique vision and desires, so we work closely with you to tailor our services to suit your specific needs. Our state-of-the-art equipment and artistic flair allow us to deliver stunning images that will leave you in awe</p>
                </div>
            </div>
            <div className="Home-Section-Three-Right">

            </div>
        </div>
    )
}

export default HomeSectionThree