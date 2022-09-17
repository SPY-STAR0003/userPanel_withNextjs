
// components
import AsideFiltering from "../../global/asideFiltering";
import Navbar from "../../global/navbar";
import ArticleCards from "./articleCards";

const FilteredArticles = () => {

    return (
        <div className="filteredArticles flexColumn">
            <Navbar isWhite={false} />
            <main className="flexColumn">
                {/* <AsideFiltering /> */}
                <ArticleCards />
            </main>
        </div>
    )
}

export default FilteredArticles;