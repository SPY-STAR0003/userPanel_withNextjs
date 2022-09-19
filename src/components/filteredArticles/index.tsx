
// components
import AsideFiltering from "../global/asideFiltering";
import Navbar from "../global/navbar";
import ArticlesSidebar from "./sidebar";
import ArticleCards from "./articleCards";
import SideNavbar from "./sideNavbar";

const FilteredArticles = () => {

    return (
        <div className="filteredArticles flex flex-col">
            {/* <Navbar isWhite={false} /> */}
            <main className="flex justify-between">
                {/* <AsideFiltering /> */}
                <SideNavbar />
                <ArticleCards />
                <ArticlesSidebar />
            </main>
        </div>
    )
}

export default FilteredArticles;