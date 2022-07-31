/* eslint-disable @next/next/no-img-element */

// react & next
import Link from "next/link";

// libraries
import {FaHome, FaFileAlt, FaRegBookmark, FaUsers, FaUserCircle} from "react-icons/fa"

const AsideNavbar = () => {

    return (
        <nav className="singleArticleNavbar">
            <div className="topNav flexColumn flexCenter mtb-6">
                <Link href="/">
                    <img src="/images/logo.png" alt="website_logo" className="pointer"/>
                </Link>
            </div>
            <div className="middleNav flexColumn flexCenter fs-15">
                <Link href="/">
                    <div><FaHome className="pointer" /></div>
                </Link>
                <Link href="/articles">
                    <div><FaFileAlt className="pointer" /></div>
                </Link>
                <Link href="/discusshall">
                    <div><FaUsers className="pointer" /></div>
                </Link>
                <Link href="/register">
                    <div><FaRegBookmark className="pointer" /></div>
                </Link>
            </div>
            <div className="bottomNav flexColumn flexCenter fs-15">
                <div><FaUserCircle className="pointer" /></div>
            </div>
        </nav>
    )
}

export default AsideNavbar;