

const SiteSuggestion : React.FC = () => {

    return (
        <article className="flex flex-col py-4">
            <div className="flex items-center">
                <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="" />
                <div className="flex mr-2 font-semibold">
                    <span> جین فیشر </span>
                    <span className="mx-1 text-gray-400"> در </span>
                    <span> تاریخ و جغرافیا </span>
                </div>
            </div>
            <div className="font-black text-xl mt-3 leading-relaxed">
                سد دز ! از خوبی ها تا بدی هایی که حتی به ذهنتان هم نمی رسد !
            </div>
        </article>
    )
}

export default SiteSuggestion;