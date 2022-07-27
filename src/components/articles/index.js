// next & react

// libraries

// components
import NavBar from "../publicComponents/navbar";
import SearchBox from "../publicComponents/searchBox";
import MostViewsArticles from "./mostView";
import ImportantLinks from "./importantLinks";
import SortArticles from "./sortArticles";
import BestAuthors from "./bestAuthors";
import SuggestedArticles from "./Suggested";
import ArticlesPageFooter from "./footer";
import Sentence from "./sentence"

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar />
            <SearchBox />
            <main className={"articlesPageMain flexColumn w-10"}>
                <ImportantLinks />
                <SortArticles />
                <Sentence />
                {/* <MostViewsArticles /> */}
                <BestAuthors />
                <SuggestedArticles />
            </main>
            <ArticlesPageFooter />
        </div>
    )
}

export default Articles;