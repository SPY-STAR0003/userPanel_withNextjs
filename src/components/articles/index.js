// next & react

// libraries

// components
import NavBar from "../global/navbar";
import SearchBox from "../global/searchBox";
import ImportantLinks from "./main/importantLinks";
import SortArticles from "./main/sortArticles";
import BestAuthors from "./main/bestAuthors";
import ArticlesPageFooter from "../global/footer";
import Sentence from "./main/sentence";
import Subscribe from "./main/subscribe";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar />
            <SearchBox heightClass="h-8" />
            <main className={"articlesPageMain flexColumn w-10"}>
                <ImportantLinks />
                <SortArticles />
                <Sentence />
                <BestAuthors />
                <Subscribe />
            </main>
            <ArticlesPageFooter />
        </div>
    )
}

export default Articles;