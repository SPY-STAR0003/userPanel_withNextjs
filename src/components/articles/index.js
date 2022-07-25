// next & react


// components
import NavBar from "../publicComponents/navbar";
import AsideNavbar from "../publicComponents/asideNavbar";
import ArticleCard from "../publicComponents/card";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar 
                color="redPeach" 
                isFixed="false"
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
                            <ArticleCard /> 
                            <ArticleCard /> 
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                            <ArticleCard />
                        </main>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Articles;