import { FaAngleDoubleLeft } from "react-icons/fa";
import NavBar from "./navbar";

const HomeContent = () => {
    return (
        <>
            <div className={"homePage flexRight relative"}>
                <NavBar />
                <div className={"homePageText flexColumn rightCenter white mr-15"}>
                    <h2 className={"mb-3 fs-38 bold-8"}> کافه مقاله </h2>
                    <p className="mr-3 mtb-2 fs-14 bold-7"> وبلاگی متن باز برای عاشقان کتاب و نویسندگی  </p>
                    <p className="mr-3 mtb-2 fs-11 lineHeight-4 bold-3"> مقالات و نوشته های مدنظر خود را بخوانید و حتی مقاله خود را به وجود بیاورید و
                    با دیگران به اشتراک بگذارید و در مورد آن به بحث و گفتگو بنشینید ... </p>
                    <button className="whiteBtn w-4 flexCenter selfCenter">
                        <span> گذری در کافه </span>
                        <FaAngleDoubleLeft className="mr-2 icon"/>
                    </button>
                </div>
            </div>
        </>

    )
}

export default HomeContent;