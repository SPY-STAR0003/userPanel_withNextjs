/* eslint-disable @next/next/no-img-element */
// react & next
import {useState} from "react";
import Link from "next/link";
import propTypes from "prop-types"

// libraries
import {FaUserAlt, FaBookmark, FaAngleDown} from "react-icons/fa";

// components
import LoginBox from "./loginBox";

// lazy load
// const LoginBox = lazy(()=> import("./loginBox")) 

const NavBar = ({logoSrc, color, isFixed, back}) => {

    const [showForm , setShowForm] = useState(false);

    return (
        <nav className={`navbar ${isFixed ? "absTop" : ""} flexSpaceBetween w-10 ${color} ${back} pt-3 pb-2`}>
            <div className="rightNav mr-15 w-1">
                <Link href={"/"}>
                    <img className="pointer" src={logoSrc} alt="websiteLogo" />
                </Link>
            </div>
            <div className="centerNav flexCenter w-7 pr-8">
                <Link href={"/articles"}>
                    <div className="navbarItem"> مقالات </div>
                </Link>
                <Link href={"/discussionHall"}>
                    <div className="navbarItem"> تالار گفت و گو </div>
                </Link>
                <Link href={"/matches"}>
                    <div className="navbarItem"> مسابقات نویسندگی </div>
                </Link>
                <Link href={"/assistRequest"}>
                    <div className="navbarItem"> درخواست همکاری </div>
                </Link>
                <Link href={"/about"}>
                    <div className="navbarItem"> درباره ما </div>
                </Link>
            </div>
            <div className={`leftNav ${color} flexCenter w-2 relative`}>
                <div className="leftNavItem flexCenter ml-10">
                    <FaBookmark className="fs-16" />
                </div>
                <div className="leftNavItem flexCenter" onClick={() => setShowForm(!showForm)}>
                    <FaUserAlt className="fs-18" />
                </div>
                {
                    showForm&&<LoginBox/>
                }
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    logoSrc : propTypes.string,
    color: propTypes.string,
    isFixed: propTypes.bool,
    back: propTypes.string
}

NavBar.defaultProps = {
    logoSrc:"/images/logo.png",
    color: "black",
    isFixed: false,
    back: "white"
}

export default NavBar;