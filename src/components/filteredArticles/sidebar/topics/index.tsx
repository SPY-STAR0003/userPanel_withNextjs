
// components
import SiteSuggestion from "./siteSuggestion";

const Topics : React.FC = () => {

    return (
        <div className="mt-10 flex flex-col justify-start w-full">
            <header className="flex justify-start items-center">
                <span className="w-2 h-2 rounded-full bg-green-800"></span>
                <p className="text-lg font-semibold mr-4"> پیشنهاد سر دبیر </p>
            </header>
            <main className="mt-3">
                <SiteSuggestion />
                <SiteSuggestion />
                <SiteSuggestion />
                <span className="text-green-600 text-sm font-bold"> دیدن لیست کامل </span>
            </main>
        </div>
    )
}

export default Topics;