
// react & next
import Link from "next/link";

// libraries
import {FaHome, FaFileAlt, FaRegBookmark, FaUsers, FaUserCircle} from "react-icons/fa"

const AsideNavbar = () => {

    return (
        <nav className="singleArticleNavbar height100vh">
            <div className="topNav flexColumn flexCenter mtb-6">
                <Link href="/">
                    <img src="/images/logo.png" alt="website_logo" className="pointer"/>
                </Link>
            </div>
            <div className="middleNav flexColumn flexCenter fs-15">
                <Link href="/">
                    <FaHome className="pointer" />
                </Link>
                <Link href="/articles">
                    <FaFileAlt className="pointer" />
                </Link>
                <Link href="/discusshall">
                    <FaUsers className="pointer" />
                </Link>
                <Link href="/register">
                    <FaRegBookmark className="pointer" />
                </Link>
            </div>
            <div className="bottomNav flexColumn flexCenter fs-15">
                <FaUserCircle className="pointer" />
            </div>
        </nav>
    )
}

export default AsideNavbar;