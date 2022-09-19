import FollowSuggestion from "./followSuggestion";
import Hashtags from "./hashtags";
import SearchBox from "./searchbox";
import Topics from "./topics";

const ArticlesSidebar : React.FC = () => {

    return (
        <div className={"hidden lg:flex flex-col items-center w-[32%]"}>
            <div className={"fixed flex flex-col pt-12 px-12 overflow-y-auto h-screen"}>
                <SearchBox />
                <Topics />
                <Hashtags />
                <FollowSuggestion />
            </div>
        </div>
    )
}


export default ArticlesSidebar;