
// components
import SocialNetworks from "../../home/SocialNetworks";

const ArticlesPageFooter = () => {
    return (
        <footer className="backBlueBlack">
            <div className="flexSpaceBetween">
                <div className="dFlex w-7 pr-5">
                    <div className="redPeach fs-8 bold-7 mrl-3 pointer "> مقالات دارای گواهینامه </div>
                    <div className="redPeach fs-8 bold-7 mrl-3 pointer "> انتقادات و پیشنهادات </div>
                    <div className="redPeach fs-8 bold-7 mrl-3 pointer "> درخواست عضویت به عنوان مدیر وبسایت </div>
                </div>
                <SocialNetworks 
                    isAbsolute={false}
                    width={"w-3"}
                    white={true}
                    classes={"flexLeft mtb-4"}
                    size={"fs-14"}
                />
            </div>
        </footer>
    )
}

export default ArticlesPageFooter;