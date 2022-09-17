// react & next
import Link from "next/link";

// libraries

// components
import NavItemLink from "./navItemLink";
import LinkIcons from "./linkIcons";

interface NavBarProps {
    logoSrc ?: string,
    isWhite: boolean,
    isFixed?: boolean,
    back?: string
}

const NavBar : React.FC<NavBarProps> = ({logoSrc = "/images/logo.png", isWhite, isFixed, back}) => {
    return (
        <nav className={`${isFixed ? "absTop" : ""} ${back??""}
            flex items-center justify-between lg:px-6 px-2 py-4
        `}>
            <div className="flex items-center lg:pr-4">
                <Link href={"/"}>
                    <img className={`${isWhite && "brightness-0 invert"} w-16 h-16 cursor-pointer`} src={logoSrc} alt="websiteLogo" />
                </Link>
            </div>
            <div className="lg:flex hidden items-center justify-around space-x-16 space-x-reverse">
                <NavItemLink
                    link="/articles"
                    isWhite={isWhite}
                    text={"مقالات"}
                />
                <NavItemLink
                    link="/discussionHall"
                    isWhite={isWhite}
                    text={"تالار گفت و گو"}
                />
                <NavItemLink
                    link="/matches"
                    isWhite={isWhite}
                    text={"مسابقات نویسندگی"}
                />
                <NavItemLink
                    link="/assistRequest"
                    isWhite={isWhite}
                    text={"درخواست همکاری"}
                />
                <NavItemLink
                    link="/about"
                    isWhite={isWhite}
                    text={"درباره ما"}
                />
            </div>
            <LinkIcons isWhite={isWhite} />
        </nav>
    )
}

export default NavBar;