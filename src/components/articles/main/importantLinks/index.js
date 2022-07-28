
// libraries
import {FaFireAlt, FaHeart, FaBuffer, FaRegGrin, FaStopwatch, FaUniversity} from "react-icons/fa";

// components
import BoxSection from "../../../publicComponents/boxSection";

const ImportantLinks = () => {


    return (
        <article className="flexColumn flexWrap selfCenter w-10 mt-4">
            <div className="flexSpaceBetween flexWrap selfCenter mtb-4 w-9 pointer">
                <BoxSection 
                    boxIcon={<FaBuffer />}
                    boxTitle={"آخرین مقالات منتشرشده"}
                    boxDescription={"شامل تمامی مقالات منتشر شده در هفته گذشته به ترتیب زمان انتشار"}
                    size={"w-3"}
                    href="/articles/lastestArticles"
                />
                <BoxSection
                    boxIcon={<FaFireAlt />}
                    boxTitle={"پر بحث ترین مقالات"}
                    boxDescription={"مقالات با بیشترین کامنت و بحث و گفتگو که توسط کاربران مختلف به چالش کشیده شده اند !"}
                    size={"w-3"}
                />
                <BoxSection
                    boxIcon={<FaRegGrin />}
                    boxTitle={"پربازدیدترین مقالات"}
                    boxDescription={"مقالاتی که بیشترین میزان بازدید توسط کاربران را داشته اند"}
                    size={"w-3"}
                />
            </div>
            <div className="flexSpaceBetween flexWrap selfCenter mtb-4 w-9 pointer">
                <BoxSection 
                    boxIcon={<FaHeart />}
                    boxTitle={"محبوب ترین مقالات"}
                    boxDescription={"شامل مقالاتی که مجموع بیشترین محبوبیت را داشته اند و هم چنین دارای کمترین میزان نارضایتی هستند"}
                    size={"w-3"}
                />
                <BoxSection
                    boxIcon={<FaStopwatch />}
                    boxTitle={"مقالات کوتاه"}
                    boxDescription={"شامل مقالاتی که برای مطالعه به زمان زیر 10 دقیقه نیاز دارند"}
                    size={"w-3"}
                />
                <BoxSection
                    boxIcon={<FaUniversity />}
                    boxTitle={"مقالات علمی و تاییدشده"}
                    boxDescription={"شامل مقالاتی که توسط دانشگاه یا دیگر موسسات مرتبط تایید شده اند. امکان دارد بعضی از این مقالات برای خواندن نیاز به پرداخت هزینه ای داشته باشند"}
                    size={"w-3"}
               />
            </div>
        </article>
    )
}


export default ImportantLinks;