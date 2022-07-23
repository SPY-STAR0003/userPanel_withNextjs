import {FaUserCircle} from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="navbar flexSpaceBetween absTop w-10 white mt-6">
            <div className="rightNav flexCenter w-3 pr-8">
                <div className="navbarItem"> صفحه اصلی </div>
                <div className="navbarItem"> مقالات </div>
                <div className="navbarItem"> درباره ما </div>
            </div>
            <div className="leftNav flexCenter w-2">
                <div className="showTitleBtn flexAlignCenter">
                    <span> پروفایل </span>
                    <FaUserCircle />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;