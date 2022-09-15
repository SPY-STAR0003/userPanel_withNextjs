import Link from "next/link"

interface NavItemLinkProps {
    isWhite : boolean
    link : string
    text : string
}

const NavItemLink : React.FC<NavItemLinkProps> = ({isWhite, link, text}) => {

    const linksStyle = `${isWhite ? "text-white border-b-white hover:after:border-white after:border-white/0" : "after:border-gray-700/0 hover:after:border-gray-700/100 text-gray-800"} font-bold relative cursor-pointer after:content[''] after:absolute after:top-2 after:left-0 after:w-full after:h-full after:border-b-2 after:rounded-sm after:transition after:duration-300 hover:after:scale-x-100 after:scale-x-0`

    return (
        <Link href={link}>
            <div className={linksStyle}> {text} </div>
        </Link>
    )
}

export default NavItemLink;