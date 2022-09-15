// react & next

// import libraries
import {FaTelegram, FaTwitterSquare, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

interface SocialNetworksProps {
    isFixed : boolean
    isWhite ?: boolean
    classes ?: string
    size ?: string
    width ?: string
}

const SocialNetworks : React.FC<SocialNetworksProps> = ({isFixed, width, classes, size, isWhite }) => {
    return (
        <div className={`${isFixed ? "lg:absolute lg:left-8 lg:bottom-8 self-center mt-12" : ""} flex space-x-4 space-x-reverse`}>
            <FaTelegram color={`${isWhite?"white":"dodgerblue"} `} className="cursor-pointer text-4xl hover:scale-125 transition" />
            <FaGithub color={`${isWhite?"white":"black"} `} className="cursor-pointer text-4xl hover:scale-125 transition" />
            <FaLinkedin color={`${isWhite?"white":"blue"} `} className="cursor-pointer text-4xl hover:scale-125 transition" />
            <FaYoutube color={`${isWhite?"white":"red"} `} className="cursor-pointer text-4xl hover:scale-125 transition" />
            <FaTwitterSquare color={`${isWhite?"white":"skyblue"} `} className="cursor-pointer text-4xl hover:scale-125 transition" />
        </div>
    )
}

export default SocialNetworks;