/* eslint-disable @next/next/no-img-element */
// next & react
import Link from "next/link";

// components
import SocialNetworks from "../socialNetworks";

const ArticlesPageFooter = () => {
    return (
        <footer>
            <div  className="flexSpaceBetween mt-15 pb-8"> 
                <div className="flexCenter w-3">
                    <Link href={"/articles"}>
                        <div className="prl-5 bold-6 fs-10 pointer"> مقالات </div>
                    </Link>
                    <Link href={"/register"}>
                        <div className="prl-5 bold-6 fs-10 pointer"> ثبت نام </div>
                    </Link>
                    <Link href={"/discussionHall"}>
                        <div className="prl-5 bold-6 fs-10 pointer"> تالار گفت و گو </div>
                    </Link>
                </div>
                <div className="fs-8 gray w-4 textCenter">
                    <Link href={"/"}>
                        <img className="w-2 pointer" src="/images/logo.png" alt="logo"/>
                    </Link>
                </div>
                <div className="w-3"> 
                    <SocialNetworks
                        isFixed={false}
                        width={"w-10"}
                        isWhite={false}
                        classes={"flexCenter"}
                        size={"fs-20"}
                    />
                </div>
            </div>
            <div style={{ borderTop : "1px solid #efefef" }} className="prl-15 ptb-8 flexCenter w-10">
                <span className="fs-7"> COPYRIGHT © 2022 MOHAMMAD ZOURMAND </span>
            </div>
        </footer>
    )
}

export default ArticlesPageFooter;