
// libraries
import { FaSearch, FaSms } from "react-icons/fa";
import PN from "persian-number";
import MyInput from "../../global/elements/form/input";
import MyButton from "../../global/elements/form/button";

const singleArticleAside = () => {
    

    return (
        <aside className="singleArticleMainAside p-3 flexColumn flexCenter">
            <div className="singleArticleSearchBox mtb-8">
                <MyInput
                    name={"react-aria-1"}
                    aria-label={"MiniSearchBox"}
                    placeholder="قسمتی از عنوان مقاله ای را  که به دنبال آن هستید وارد نمایید ..."
                    size={"md"}
                    Icon={
                        <FaSearch />
                    }
                />
            </div>
            <div className="singleArticleProfile flexColumn p-3">
                <div className="dFlex">
                    <img
                        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                        // css={{ width: "6rem", height : "6rem" }}
                    />
                    <div className="flexColumnJustifyCenter text pr-4">
                        <h4 className="mtb-2 fs-13 bold-7"> جین فیشر </h4>
                        <p className="gray fs-9"> { PN.convertEnToPe(25) } دنبال کننده </p> 
                    </div>
                </div>
                <div className="mt-5">
                    <p className="fs-9 lineHeight-4"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد </p>
                </div>
                <div className="flexLeft mt-4">
                    <MyButton className="ml-5">
                        دنبال کردن
                    </MyButton>
                    <MyButton
                        color="primary"
                        Icon={<FaSms />}
                    >
                        پیام
                    </MyButton>
                </div>
            </div>
            <div className="singleArticleSuggests flexColumn w-10 p-3">
                <header>
                    <h5 className="fs-12 black"> مقالات پیشنهادی کافه مقاله </h5>
                </header>
                <main className="flexColumn mt-5">
                    <div className="flexSpaceBetween flexAlignCenter mtb-4">
                        <div className="text flexColumn">
                            <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                // name="جین فیشر"
                                // size="sm"
                                className="mr-6"
                            />
                            <h5 className="mr-6 mtb-4"> مقاله آزمایشی شماره اول </h5>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
                    </div>
                    <div className="flexSpaceBetween flexAlignCenter mtb-4">
                        <div className="text flexColumn">
                            <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                // name="جین فیشر"
                                // size="sm"
                                className="mr-6"
                            />
                            <h5 className="mr-6 mtb-4"> مقاله آزمایشی شماره اول </h5>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
                    </div>
                    <div className="flexSpaceBetween flexAlignCenter mtb-4">
                        <div className="text flexColumn">
                            <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                // name="جین فیشر"
                                // size="sm"
                                className="mr-6"
                            />
                            <h5 className="mr-6 mtb-4"> مقاله آزمایشی شماره اول </h5>
                        </div>
                        <img
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
                    </div>
                </main>
            </div>
        </aside>
    )
}

export default singleArticleAside;