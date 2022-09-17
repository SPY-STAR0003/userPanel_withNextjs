// react & next

// components
import Card from "./card";

interface ArticleCardProps {
    author ?: string,
    profile ?: string,
    isAgreed?: boolean,
    title?: string,
    sort?: string,
    description?: string,
    options?: string,
    hashtags?: any,
    link?: any
}

const ArticleCard : React.FC<ArticleCardProps> = ({
    author = "آتوسا میرباقریان",
    link = "/" ,
    profile = "https://i.pravatar.cc/150?u=a04258114e29026702d",
    isAgreed = true,
    title = "بررسی عوامل شکست هخامنشیان",
    sort = "تاریخ و جغرافیا",
    description = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    options = "تنظیمات",
    hashtags =  ["کوروش", "انحطاط هخامنشیان", "اسکندر مقدونی", "داریوش سوم", "تخت جمشید" ],
}) => {
    return (
        <Card>
            <Card.Header>
                <Card.HeaderProfile sort={sort} author={author} profile={profile}></Card.HeaderProfile>
                <Card.HeaderStatus> </Card.HeaderStatus>
            </Card.Header>
            <Card.Label isAgreed={isAgreed} />
            <Card.Body
                description={description}
            >
                <Card.BodyTitle link={link}>{title}</Card.BodyTitle>
            </Card.Body>
            <Card.Options>
                {options}
            </Card.Options>
            <Card.Footer hashtags={hashtags} />
        </Card>
    )
}


export default ArticleCard;