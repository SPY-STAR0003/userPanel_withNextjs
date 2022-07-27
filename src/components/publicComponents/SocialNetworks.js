// react & next
import propTypes from "prop-types";

// import libraries
import {FaTelegram, FaTwitterSquare, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialNetworks = ({isAbsolute, width, classes, size, white }) => {
    return (
        <div className={`contact ml-6 ${size} ${width} dFlex mtb-4 ${classes} ${isAbsolute ? "absBottomLeft" : ""}`}>
            <FaTelegram color={`${white?"white":"dodgerblue"} `} className="mrl-1 scale-1 pointer" />
            <FaGithub color={`${white?"white":"black"} `} className="mrl-1 scale-1 pointer" />
            <FaLinkedin color={`${white?"white":"blue"} `} className="mrl-1 scale-1 pointer" />
            <FaYoutube color={`${white?"white":"red"} `} className="mrl-1 scale-1 pointer" />
            <FaTwitterSquare color={`${white?"white":"skyblue"} `} className="mrl-1 scale-1 pointer" />
        </div>
    )
}

SocialNetworks.propTypes = {
    isAbsolute : propTypes.bool,
    white : propTypes.bool,
    classes : propTypes.string,
    size : propTypes.string,
    width : propTypes.string
}

SocialNetworks.defaultProps = {
    isAbsolute : false,
    size : "fs-20",
    width : "w-3",
    white : false,
    classes : " pointer"
}

export default SocialNetworks;