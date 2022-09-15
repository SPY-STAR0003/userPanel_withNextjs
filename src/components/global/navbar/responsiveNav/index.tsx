// react
import {useState} from "react";

// libraries
import { Game, Home, Pen, People, SendMassage, Swap } from "../../../../assets/icons";
import { ChevronDown } from "react-iconly";

// components
import CloseCross from "../../elements/buttons/closeCross";
import NavbarItem from "./item";
import Link from "next/link";

interface ResponsiveNavProps {
    setShowResponsiveNavbar : React.Dispatch<React.SetStateAction<boolean>>
}

const ResponsiveNavbar : React.FC<ResponsiveNavProps> = ({setShowResponsiveNavbar}) => {

    const [showText, setShowText] = useState<boolean>(false)

    return (
        <div className={"fixed left-0 top-0 w-2/3 h-full bg-white z-50 overflow-y-auto"}>
            <header className={"relative flex justify-center"}>
                <CloseCross position={"top-0 right-2"} clickHandler={setShowResponsiveNavbar} />
                <Link href={"/"}>
                    <img className={"w-32 h-32 mt-8 cursor-pointer"} src="/images/logo.png" alt="Website LOGO" />
                </Link>
            </header>
            <main>
                <div className={"flex justify-around mt-8 sm:px-16 md:px-32"}>
                    <div className="flex flex-col items-center px-2 py-4 cursor-pointer hover:bg-gray-200">
                        <img className="h-16 w-16" src="/images/darkMode.png" alt="darkMode" />
                        <span className="mt-2 text-gray-600 text-center text-sm font-bold"> حالت شب </span>
                    </div>
                    <div className="flex flex-col items-center px-2 py-4 cursor-pointer hover:bg-gray-200">
                        <img className="h-16 w-16" src="/images/languages.png" alt="darkMode" />
                        <span className="mt-2 text-gray-600 text-center text-sm font-bold"> زبان </span>
                    </div>
                    <div className="flex flex-col items-center px-2 py-4 cursor-pointer hover:bg-gray-200">
                        <img className="h-16 w-16 rounded-full" src="/images/profile.png" alt="darkMode" />
                        <span className="mt-2 text-gray-600 text-center text-sm font-bold"> حساب کاربری </span>
                    </div>
                </div>
                <div className={"flex flex-col sm:px-12 px-1 mt-4 space-y-2"}>
                    <NavbarItem
                        text="خانه"
                        Icon={Home}
                        color={"black"}
                    />
                    <NavbarItem
                        text="مقالات"
                        Icon={Pen}
                        color={"black"}
                        Icon2={<ChevronDown set="bulk" primaryColor="black"/>}
                    />
                    <NavbarItem
                        text="تالار گفت و گو"
                        Icon={People}
                        color={"black"}
                    />
                    <NavbarItem
                        text="مسابقات نویسندگی"
                        Icon={Game}
                        color={"black"}
                    />
                    <NavbarItem
                        text="درخواست همکاری"
                        Icon={Swap}
                        color={"black"}
                    />
                    <NavbarItem
                        text="ارتباط با ما"
                        Icon={SendMassage}
                        color={"black"}
                    />
                </div>
            </main>
        </div>
    )
}

export default ResponsiveNavbar;