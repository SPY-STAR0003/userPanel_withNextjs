// next & react

// libraries

// components
import NavBar from "../publicComponents/navbar";
import SearchBox from "../publicComponents/searchBox";
import ImportantLinks from "./importantLinks";
import SortArticles from "./sortArticles";
import BestAuthors from "./bestAuthors";
import ArticlesPageFooter from "./footer";
import Sentence from "./sentence";
import Subscribe from "./subscribe";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar />
            <SearchBox />
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