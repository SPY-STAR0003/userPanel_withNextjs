
// libraries
import {FaFireAlt, FaHeart, FaBuffer, FaRegGrin, FaStopwatch, FaUniversity} from "react-icons/fa";

// components
import BoxSection from "../../../global/boxSection";

const ImportantLinks = () => {


    return (
        <div className="flex sm:flex-row flex-col justify-between flex-wrap selfCenter my-4 p-4 cursor-pointer">
            <BoxSection 
                boxIcon={<FaBuffer className="w-16 h-16" />}
                boxTitle={"آخرین مقالات منتشرشده"}
                boxDescription={"شامل تمامی مقالات منتشر شده در هفته گذشته به ترتیب زمان انتشار"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
            <BoxSection
                boxIcon={<FaFireAlt className={"w-16 h-16"} />}
                boxTitle={"پر بحث ترین مقالات"}
                boxDescription={"مقالات با بیشترین کامنت و بحث و گفتگو که توسط کاربران مختلف به چالش کشیده شده اند !"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
            <BoxSection
                boxIcon={<FaRegGrin className={"w-16 h-16"} />}
                boxTitle={"پربازدیدترین مقالات"}
                boxDescription={"مقالاتی که بیشترین میزان بازدید توسط کاربران را داشته اند"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
            <BoxSection 
                boxIcon={<FaHeart className={"w-16 h-16"} />}
                boxTitle={"محبوب ترین مقالات"}
                boxDescription={"شامل مقالاتی که مجموع بیشترین محبوبیت را داشته اند و هم چنین دارای کمترین میزان نارضایتی هستند"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
            <BoxSection
                boxIcon={<FaStopwatch className={"w-16 h-16"} />}
                boxTitle={"مقالات کوتاه"}
                boxDescription={"شامل مقالاتی که برای مطالعه به زمان زیر 10 دقیقه نیاز دارند"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
            <BoxSection
                boxIcon={<FaUniversity className={"w-16 h-16"} />}
                boxTitle={"مقالات علمی و تاییدشده"}
                boxDescription={"شامل مقالاتی که توسط دانشگاه یا دیگر موسسات مرتبط تایید شده اند. امکان دارد بعضی از این مقالات برای خواندن نیاز به پرداخت هزینه ای داشته باشند"}
                size={"md:w-1/3 sm:w-1/2 w-full"}
                href="/articles/filteredArticles"
            />
        </div>
    )
}


export default ImportantLinks;