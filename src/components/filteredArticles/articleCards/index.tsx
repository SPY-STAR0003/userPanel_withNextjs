
// components
import ArticleCard from "../../global/articleCard";
import ScrollHeader from "./scrollHeader";


const ArticleCards = () => {

    return (
        <article className="flex flex-col items-center mt-8 lg:pr-20 space-y-4 lg:w-[65%] w-full">
            <ScrollHeader />
            {
                [...Array(8).keys()].map((item, index) => (
                    <ArticleCard key={index} />
                ))
            }
        </article>
    )
}

export default ArticleCards;