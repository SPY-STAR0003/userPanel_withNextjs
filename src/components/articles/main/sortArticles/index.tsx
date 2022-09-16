
// libraries
import {FaLaptopCode, FaPeopleArrows, FaPenNib, FaSatellite, FaSchool, FaSmileBeam, FaSpellCheck, FaTableTennis, FaGlobeAsia, FaAtom} from "react-icons/fa";

// components
import BoxSection from "../../../global/boxSection";


const SortArticles = () => {
    return (
        <article className="flex flex-col items-center flexCenter mb-8 mt-12 px-6">
            <header className="mb-8 text-center"> 
                <h1 className="text-3xl font-bold leading-relaxed"> با انتخاب موضوع مورد نظر خود، راحت تر به آن چه می خواهید برسید ! </h1>    
            </header>
            <main className="flex flex-row flex-wrap">
                <BoxSection
                    boxIcon = {<FaLaptopCode className={"w-12 h-12"} />}
                    boxTitle= "تکنولوژی"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaAtom className={"w-12 h-12"} />}
                    boxTitle= "علم و دانش"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaSatellite className={"w-12 h-12"} />}
                    boxTitle= "فضا"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaTableTennis className={"w-12 h-12"} />}
                    boxTitle= "ورزشی"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaSpellCheck className={"w-12 h-12"} />}
                    boxTitle= "زبان های خارجه"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaGlobeAsia className={"w-12 h-12"} />}
                    boxTitle= "تاریخ و جغرافیا"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaPenNib className={"w-12 h-12"} />}
                    boxTitle= "داستان و رمان"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaSchool className={"w-12 h-12"} />}
                    boxTitle= "درس و دانشگاه"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaSmileBeam className={"w-12 h-12"} />}
                    boxTitle= "کودکانه"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
                <BoxSection
                    boxIcon = {<FaPeopleArrows className={"w-12 h-12"} />}
                    boxTitle= "نیازمند تکمیل"
                    size="lg:w-[10%] md:w-[25%] sm:w-[50%] w-full"
                    isVertical={false}
                    href="/articles/filteredArticles"
                    isTextLarge={false}
                />
            </main>
        </article>
    )
}

export default SortArticles;