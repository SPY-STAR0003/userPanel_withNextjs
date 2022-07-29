
// components
import AsideFiltering from "../../publicComponents/asideFiltering";
import Navbar from "../../publicComponents/navbar";
import ArticleCards from "./articleCards";
import ArticlesPageFooter from "../public/footer"

const FilteredArticles = () => {

    return (
        <div className="filteredArticles flexColumn">
            <Navbar />
            <main className="flexColumn">
                <AsideFiltering />
                <ArticleCards />
            </main>
            {/* <ArticlesPageFooter /> */}
        </div>
    )
}

export default FilteredArticles;