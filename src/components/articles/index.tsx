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