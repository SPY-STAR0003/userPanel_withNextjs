
// components

const ScrollHeader : React.FC = () => {

    return (
        <div className="w-full sticky top-0 bg-white/70 z-50 backdrop-blur-sm overflow-x-auto">
            <ul className={"w-full direction-ltr flex flex-row justify-around py-4 border-b text-gray-500"}>
                <li className="hover:text-gray-900 cursor-pointer"> React </li>
                <li className="hover:text-gray-900 cursor-pointer"> JS </li>
                <li className="hover:text-gray-900 cursor-pointer"> Angular </li>
                <li className="hover:text-gray-900 cursor-pointer"> UI/UX </li>
                <li className="hover:text-gray-900 cursor-pointer"> Web Design </li>
                <li className="hover:text-gray-900 cursor-pointer"> JS Frameworks </li>
                <li className="hover:text-gray-900 cursor-pointer"> JS libraries </li>
            </ul>
        </div>
    )
}

export default ScrollHeader;