
interface NavbarItemsProps {
    text: string
    Icon: any
    color: string
    Icon2?: any
}

const NavbarItem : React.FC<NavbarItemsProps> = ({text, Icon, color, Icon2}) => {

    return (
        <div className="relative flex items-center py-2 pr-2 hover:bg-slate-300 cursor-pointer">
            <div className={"flex items-center justify-center p-1 rounded-full bg-gray-200 w-10 h-10"}>
                <Icon color={color} classes={"w-7 h-7"}/>
            </div>
            <span className="text-gray-700 font-bold mr-6"> {text} </span>
            <div className={"absolute left-5"}>
                {
                    Icon2 ?? null
                }
            </div>
        </div>
    )
}

export default NavbarItem;