// next & react

// libraries

// components
import NavBar from "../global/navbar";
import SearchBox from "../global/searchBox";
import ImportantLinks from "./importantLinks";
import SortArticles from "./sortArticles";
import BestAuthors from "./bestAuthors";
import ArticlesPageFooter from "../global/footer";
import Sentence from "./sentence";
import Subscribe from "./subscribe";

const Articles = () => {
    return (
        <div className="articlesPage flexColumn">
            <NavBar isWhite={false} logoSrc={"/images/logo.png"} />
            <SearchBox heightClass="h-96" />
            <main className={"flex flex-col"}>
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