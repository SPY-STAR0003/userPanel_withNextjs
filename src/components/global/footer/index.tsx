/* eslint-disable @next/next/no-img-element */
// next & react
import Link from "next/link";

// components
import SocialNetworks from "../socialNetworks";

const ArticlesPageFooter = () => {
    return (
        <footer>
            <div className="flex flex-col justify-between mt-20 pb-8"> 
                <div className="flex sm:flex-row flex-col flex-wrap items-center justify-center">
                    <Link href={"/articles"}>
                        <div className="px-8 sm:py-0 py-4 font-semibold sm:text-sm text-lg cursor-pointer text-gray-400"> مقالات </div>
                    </Link>
                    <Link href={"/register"}>
                        <div className="px-8 sm:py-0 py-4 font-semibold sm:text-sm text-lg cursor-pointer text-gray-400"> ثبت نام </div>
                    </Link>
                    <Link href={"/discussionHall"}>
                        <div className="px-8 sm:py-0 py-4 font-semibold sm:text-sm text-lg cursor-pointer text-gray-400"> تالار گفت و گو </div>
                    </Link>
                    <Link href={"/discussionHall"}>
                        <div className="px-8 sm:py-0 py-4 font-semibold sm:text-sm text-lg cursor-pointer text-gray-400"> ارتباط با ما </div>
                    </Link>
                </div>
                <div className="flex justify-center mt-12">
                    <Link href={"/"}>
                        <img className="w-24 h-24 cursor-pointer brightness-0 hover:brightness-100 transition duration-300" src="/images/logo.png" alt="logo"/>
                    </Link>
                </div>
                <div className="flex justify-center mt-8"> 
                    <SocialNetworks
                        isFixed={false}
                        width={"w-10"}
                        isWhite={false}
                        classes={"flexCenter"}
                        size={"fs-20"}
                    />
                </div>
            </div>
            <div style={{ borderTop : "1px solid #efefef" }} className="px-6 py-5 flex justify-center w-full">
                <span className="text-sm text-gray-400 text-center"> COPYRIGHT © 2022 MOHAMMAD ZOURMAND </span>
            </div>
        </footer>
    )
}

export default ArticlesPageFooter;