
// components
import AsideNavbar from "../../publicComponents/asideNavbar";
import ArticleCard from "../../publicComponents/card";

const MostViewsArticles = () => {

    return (
        <article className="mostViewsArticles flexSpaceBetween">
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
    );
}

export default MostViewsArticles;