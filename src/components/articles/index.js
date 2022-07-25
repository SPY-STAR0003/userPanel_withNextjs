// next & react

// libraries
import { Avatar, Grid} from "@nextui-org/react";
import PN from "persian-number";

// components
import NavBar from "../publicComponents/navbar";
import AsideNavbar from "../publicComponents/asideNavbar";
import ArticleCard from "../publicComponents/card";
import SocialNetworks from "../home/SocialNetworks";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar 
                color="redPeach" 
                isFixed={false}
                back="backBlueBlack"
            />
            <main className={"articlesPageMain flexColumn w-10 m-4"}>
                <article className="flexSpaceBetween">
                    <AsideNavbar
                        width="w-2"
                    />
                    <section className="flexColumn selfTop w-8">
                        <header className="mtb-4">
                            <h2
                                className="fs-15 bold-7 textRight"
                            > 
                                پر بازدید ترین مقالات اخیر    
                            </h2>
                        </header>
                        <main className="dFlex flexWrap">
                            <ArticleCard width="30%" /> 
                            <ArticleCard width="30%" /> 
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                            <ArticleCard width="30%" />
                        </main>
                    </section>
                </article>
                <article>
                    <header className="mt-12 mb-9 pr-6 textCenter">
                        <h3 className="fs-15 bold-7"> برترین نویسندگان کافه مقاله </h3>
                    </header>
                    <main className="flexCenter">
                        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
                                css={{ size: "$20" }}
                                zoomed
                                bordered
                                color="error"
                                className="pointer"
                            />
                            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                                ویلیام هاوارد   
                            </span>
                            <span className="bold-3">
                                حوزه تخصصی : خارج از زمین
                            </span>
                            <span className="fs-8 bold-5">
                                {PN.convertEnToPe(3105)} امتیاز
                            </span>
                        </Grid>
                        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                css={{ size: "$40" }}
                                zoomed
                                bordered
                                color="error"
                                className="pointer"
                            />
                            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                               جین فیشر    
                            </span>
                            <span className="bold-3">
                                حوزه تخصصی : علم، دانش ریاضیات
                            </span>
                            <span className="fs-8 bold-5">
                                {PN.convertEnToPe(3245)} امتیاز
                            </span>
                        </Grid>
                        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                css={{ size: "$60" }}
                                zoomed
                                bordered
                                color="error"
                                className="pointer"
                            />
                            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                                تونی رایچرت  
                            </span>
                            <span className="bold-3">
                                حوزه تخصصی : فناوری
                            </span>
                            <span className="fs-8 bold-5">
                                {PN.convertEnToPe(3905)} امتیاز
                            </span>
                        </Grid>
                        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                css={{ size: "$40" }}
                                zoomed
                                bordered
                                color="error"
                                className="pointer"
                            />
                            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                                آریانا واتسون  
                            </span>
                            <span className="bold-3">
                                حوزه تخصصی : خارج از زمین
                            </span>
                            <span className="fs-8 bold-5">
                                {PN.convertEnToPe(3350)} امتیاز
                            </span>
                        </Grid>
                        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
                                css={{ size: "$20" }}
                                zoomed
                                bordered
                                color="error"
                                className="pointer"
                            />
                            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                                کریستین کوپر   
                            </span>
                            <span className="bold-3">
                                حوزه تخصصی : سیاسی فرهنگی
                            </span>
                            <span className="fs-8 bold-5">
                                {PN.convertEnToPe(3205)} امتیاز
                            </span>
                        </Grid>
                    </main>
                </article>
                <article className="w-9 marginXAuto">
                    <header className="mt-11 mb-8 pr-6">
                        <h3 className="fs-15 bold-7 textCenter"> مقالات پیشنهادی کافه مقاله به شما </h3>
                    </header>
                    <main>
                        <ArticleCard
                            width="85%"
                            classes="marginXAuto mtb-7"
                        />
                        <ArticleCard
                            width="85%"
                            classes="marginXAuto mtb-7"
                        />
                        <ArticleCard
                            width="85%"
                            classes="marginXAuto mtb-7"
                        />
                    </main>
                </article>
            </main>
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
        </div>
    )
}

export default Articles;