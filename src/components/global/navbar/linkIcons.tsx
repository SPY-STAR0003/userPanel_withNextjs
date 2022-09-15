// react & next
import {useState, lazy, Suspense} from "react";

// libraries
import { Bookmark, Buy, User} from "react-iconly";

// components
import { Menu } from "../../../assets/icons";

// lazy load
const LoginBox = lazy(()=> import("../loginBox")); 
const BookmarkList = lazy(()=> import("../bookmarkList")); 
const ShopingList = lazy(()=> import("../shopingList"));
const ResponsiveNavbar = lazy(() => import("./responsiveNav"))

interface LinkIconsProps {
    isWhite : boolean
}

const LinkIcons : React.FC<LinkIconsProps> = ({isWhite}) => {

    const [showForm , setShowForm] = useState(false);
    const [showShopingList , setShowShopingList] = useState(false);
    const [showBookmarkList , setShowBookmarkList] = useState(false);
    const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false)

    return (
        <div className={`relative flex items-center justify-center`}>
        <div onClick={() => setShowBookmarkList(!showBookmarkList)} className={`${isWhite ? "border-white" : "border-gray-900"} mx-1 cursor-pointer border-2 rounded-full p-3`}>
            <Bookmark set="broken" primaryColor={isWhite ? "white" : "black"} />
        </div>
        <div onClick={() => setShowShopingList(!showShopingList)} className={`${isWhite ? "border-white" : "border-gray-900"} mx-1 cursor-pointer border-2 rounded-full p-3`}>
            <Buy set="broken" primaryColor={isWhite ? "white" : "black"} />
        </div>
        <div onClick={() => setShowForm(!showForm)} className={`${isWhite ? "border-white" : "border-gray-900"} mx-1 cursor-pointer border-2 rounded-full p-3`}>
            <User set="broken" primaryColor={isWhite ? "white" : "black"} />
        </div>
        <div onClick={() => setShowResponsiveNavbar(true)} className={`${isWhite ? "border-white" : "border-gray-900"} lg:hidden mx-1 cursor-pointer border-2 rounded-full p-3`}>
            <Menu classes="w-6 h-6" color={isWhite ? "white" : "black"} />
        </div>
        {
            showForm&&<Suspense>
                <LoginBox setFormShow={setShowForm} />
            </Suspense>
        }
        {
            showBookmarkList&&<Suspense>
                <BookmarkList setShowBookmarkList={setShowBookmarkList} />
            </Suspense>
        }
        {
            showShopingList&&<Suspense>
                <ShopingList setShowShopingList={setShowShopingList} />
            </Suspense>
        }
        {
            showResponsiveNavbar&&<Suspense>
                <ResponsiveNavbar setShowResponsiveNavbar={setShowResponsiveNavbar} />
            </Suspense>
        }
    </div>    
    )
}

export default LinkIcons;