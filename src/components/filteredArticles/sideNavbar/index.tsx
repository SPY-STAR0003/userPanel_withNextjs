
// components

import { Alarm, Bookmark, Buy, Document, EditSquare, Home, User } from "../../../assets/brokenIcons";
import Tooltip from "../../global/elements/tooltip";


const SideNavbar : React.FC = () => {

    return (
        <div className={"flex lg:flex-col flex-row items-center justify-between lg:justify-start fixed bottom-0 lg:top-0 lg:h-screen w-screen lg:py-16 lg:border-l border-t lg:w-16 h-16 bg-white z-40"}>
            <div className={"sticky lg:w-16 w-screen flex flex-row lg:flex-col justify-center lg:justify-around  lg:items-center lg:h-screen"}>
                <div className={"flex lg:flex-col flex-row lg:space-y-8"}>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <Home classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"خانه"} width={"w-14"} />
                    </div>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <Alarm classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"پیام ها"} width={"w-14"} />
                    </div>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <Bookmark classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"نشان شده ها"} width={"w-24"} />
                    </div>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <Document classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"مشاهده مقالات"} width={"w-28"} />
                    </div>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <Buy classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"سبد خرید"} width={"w-24"} />
                    </div>
                </div>
                <div className="flex lg:flex-col flex-row lg:space-y-8">
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <EditSquare classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"نوشتن مقاله"} width={"w-24"} />
                    </div>
                    <div className="relative group lg:mx-0 sm:mx-6 mx-2 ">
                        <User classes="w-8 h-8 fill-gray-500 hover:fill-gray-800 cursor-pointer"/>
                        <Tooltip value={"پروفایل"} width={"w-20"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar;