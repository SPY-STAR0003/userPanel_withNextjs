// react & next
import Link from "next/link";
import propTypes from "prop-types"

// libraries
import {FaUserCircle} from "react-icons/fa";

const NavBar = ({color, isFixed, back}) => {
    return (
        <nav className={`navbar ${isFixed === "true" ? "absTop" : ""} flexSpaceBetween w-10 ${color} ${back} pt-3 pb-2`}>
            <div className="rightNav flexCenter w-3 pr-8">
                <Link href={"/"}>
                    <div className="navbarItem"> صفحه اصلی </div>
                </Link>
                <Link href={"/articles"}>
                    <div className="navbarItem"> مقالات </div>
                </Link>
                <Link href={"/about"}>
                    <div className="navbarItem"> درباره ما </div>
                </Link>
            </div>
            <div className="leftNav flexCenter w-2">
                <Link href={"/login"}>
                    <div className="showTitleBtn flexAlignCenter">
                        <span> پروفایل </span>
                        <FaUserCircle />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    color: propTypes.string,
    isFixed: propTypes.string,
    back: propTypes.string
}

export default NavBar;