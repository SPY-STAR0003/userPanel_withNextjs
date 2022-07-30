
// components
import AsideFiltering from "../../publicComponents/asideFiltering";
import Navbar from "../../publicComponents/navbar";
import ArticleCards from "./articleCards";

const FilteredArticles = () => {

    return (
        <div className="filteredArticles flexColumn">
            <Navbar />
            <main className="flexColumn">
                <AsideFiltering />
                <ArticleCards />
            </main>
        </div>
    )
}

export default FilteredArticles;