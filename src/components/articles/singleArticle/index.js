
// components

import AsideNavbar from "../../publicComponents/asideNavbar";
import SingleArticleAside from "./aside";
import SingleArticleContent from "./content";

const SingleArticle = () => {
    return (
        <div className="singleArticle dFlex">
            <main className="singleArticleMain">
                <SingleArticleAside />
                <SingleArticleContent />
            </main>
            <AsideNavbar />
        </div>
    )
}

export default SingleArticle;