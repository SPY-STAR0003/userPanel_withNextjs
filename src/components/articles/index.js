// next & react

// libraries

// components
import NavBar from "../publicComponents/navbar";
import MostViewsArticles from "./mostView";
import BestAuthors from "./bestAuthors";
import SuggestedArticles from "./Suggested";
import ArticlesPageFooter from "./footer";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar />
            <main className={"articlesPageMain flexColumn w-10 m-4"}>
                <MostViewsArticles />
                <BestAuthors />
                <SuggestedArticles />
            </main>
            <ArticlesPageFooter />
        </div>
    )
}

export default Articles;