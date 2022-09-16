
// libraries
import {FaLaptopCode, FaPeopleArrows, FaPenNib, FaSatellite, FaSchool, FaSmileBeam, FaSpellCheck, FaTableTennis, FaGlobeAsia, FaAtom} from "react-icons/fa";

// components
import BoxSection from "../../../global/boxSection";


const SortArticles = () => {
    return (
        <article className="flexColumn flexCenter mb-4 mt-12">
            <header className="mb-8"> 
                <h1 className="fs-18"> با انتخاب موضوع مورد نظر خود، راحت تر به آن چه می خواهید برسید ! </h1>    
            </header>
            <main className="dFlex flexWrap">
                <BoxSection
                    boxIcon = {<FaLaptopCode />}
                    boxTitle= "تکنولوژی"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaAtom />}
                    boxTitle= "علم و دانش"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaSatellite />}
                    boxTitle= "فضا"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaTableTennis />}
                    boxTitle= "ورزشی"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaSpellCheck />}
                    boxTitle= "زبان های خارجه"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaGlobeAsia />}
                    boxTitle= "تاریخ و جغرافیا"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaPenNib />}
                    boxTitle= "داستان و رمان"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaSchool />}
                    boxTitle= "درس و دانشگاه"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaSmileBeam />}
                    boxTitle= "کودکانه"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
                <BoxSection
                    boxIcon = {<FaPeopleArrows />}
                    boxTitle= "نیازمند تکمیل"
                    size="w-2"
                    sortType="horizontal"
                    href="/articles/filteredArticles"
                />
            </main>
        </article>
    )
}

export default SortArticles;