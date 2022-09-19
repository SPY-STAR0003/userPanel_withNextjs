import FollowSuggestionBox from "./box";


const FollowSuggestion : React.FC = () => {

    return (
        <div className={"flex flex-col self-start mt-6"}>
            <header className={"mb-6 text-gray-800 text-xl font-bold"}> 
                <h3> کسانی برای دنبال کردن ... </h3>
            </header>
            <main className={"flex flex-col space-y-6"}>
                {
                    [...Array(3).keys()].map((item) => (
                        <FollowSuggestionBox key={item} />
                    ))
                }
            </main>
        </div>
    )
}

export default FollowSuggestion;