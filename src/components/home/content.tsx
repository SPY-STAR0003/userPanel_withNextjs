// react & next
import Link from "next/link";

// libraries
import { FaAngleDoubleLeft } from "react-icons/fa";

// components

const HomeContent : React.FC = () => {
    return (
        <div className={"flex flex-col items-center lg:items-start justify-center text-white lg:my-32 mt-4 lg:mr-12 lg:w-5/12 w-full text-center lg:text-right px-2"}>
            <h2 className={"text-[4.5rem] font-bold"}> کافه مقاله </h2>
            <p className="mb-2 text-lg font-semibold"> وبلاگی متن باز برای عاشقان کتاب و نویسندگی  </p>
            <p className="font-light leading-loose mt-4"> مقالات و نوشته های مدنظر خود را بخوانید و حتی مقاله خود را به وجود بیاورید و
            با دیگران به اشتراک بگذارید و در مورد آن به بحث و گفتگو بنشینید ... </p>
            <button className="group hover:scale-[1.1] flex items-center justify-center border-2 border-white hover:border-white mt-8 lg:mr-8 mx-auto px-3 py-2 w-40 font-bold transition hover:bg-white hover:text-black">
                <Link href={"./articles"}>
                    <span> گذری در کافه </span>
                </Link>
                <FaAngleDoubleLeft className="group-hover:-translate-x-3 transition mr-2 icon"/>
            </button>
        </div>
    )
}

export default HomeContent;