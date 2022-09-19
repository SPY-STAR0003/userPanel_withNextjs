
// components

const Hashtags : React.FC = () => {

    return (
        <div className={"flex flex-col mt-8"}>
            <header className={"mb-4"}>
                <h1 className="text-gray-900 text-xl font-bold"> پربازدید ترین هشتگ ها </h1>
            </header>
            <main className={"flex flex-wrap"}>
                <span className="bg-gray-200/90 transition hover:bg-gray-300/90 cursor-pointer text-gray-900 text-sm rounded-3xl mx-1 my-2 py-2 px-4 "> JavaScript </span>
                <span className="bg-gray-200/90 transition hover:bg-gray-300/90 cursor-pointer text-gray-900 text-sm rounded-3xl mx-1 my-2 py-2 px-4 "> React </span>
                <span className="bg-gray-200/90 transition hover:bg-gray-300/90 cursor-pointer text-gray-900 text-sm rounded-3xl mx-1 my-2 py-2 px-4 "> VueJS </span>
                <span className="bg-gray-200/90 transition hover:bg-gray-300/90 cursor-pointer text-gray-900 text-sm rounded-3xl mx-1 my-2 py-2 px-4 "> NextJS </span>
                <span className="bg-gray-200/90 transition hover:bg-gray-300/90 cursor-pointer text-gray-900 text-sm rounded-3xl mx-1 my-2 py-2 px-4 "> Formik </span>
            </main>
        </div>
    )
}

export default Hashtags;