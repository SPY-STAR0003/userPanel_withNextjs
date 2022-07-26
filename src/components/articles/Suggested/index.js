
// components
import ArticleCard from "../../publicComponents/card";

const SuggestedArticles = () => {

    return (
        <article className="suggestedArticles w-9 marginXAuto">
            <header className="mt-11 mb-8 pr-6">
                <h3 className="fs-15 bold-7 textCenter"> مقالات پیشنهادی کافه مقاله به شما </h3>
            </header>
            <main>
                <ArticleCard
                    width="85%"
                    classes="marginXAuto mtb-7"
                />
                <ArticleCard
                    width="85%"
                    classes="marginXAuto mtb-7"
                />
                <ArticleCard
                    width="85%"
                    classes="marginXAuto mtb-7"
                />
            </main>
        </article>
    )
}

export default SuggestedArticles;