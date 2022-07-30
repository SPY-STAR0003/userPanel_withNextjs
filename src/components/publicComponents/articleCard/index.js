// react & next
import propTypes from 'prop-types';

// components
import Card from "./card";

const ArticleCard = ({
    cardLink,
    imgSrc,
    label,
    headerTitle,
    headerStatus,
    title,
    options,
    hashtags,
}) => {
    return (
        <Card>
            <Card.Header>
                <Card.HeaderProfile imgSrc={imgSrc}></Card.HeaderProfile>
                <Card.HeaderText>
                    <Card.HeaderTitle cardLink={cardLink}>{headerTitle}</Card.HeaderTitle>
                    <Card.HeaderStatus> در دسته :  {headerStatus}</Card.HeaderStatus>
                </Card.HeaderText>
            </Card.Header>
            <Card.Label isSubmit={true}> {label} </Card.Label>
            <Card.Body>
                {title} 
            </Card.Body>
            <Card.Options>
                {options}
            </Card.Options>
            <Card.Footer hashtags={hashtags}>  </Card.Footer>
        </Card>
    )
}

ArticleCard.propTypes = {
    imgSrc : propTypes.string,
    label: propTypes.string,
    headerTitle: propTypes.string,
    headerStatus: propTypes.string,
    title: propTypes.string,
    options: propTypes.string,
    hashtags: propTypes.array,
}

ArticleCard.defaultProps = {
    imgSrc : "https://i.pravatar.cc/150?u=a04258114e29026702d",
    label : "تایید دانشگاه",
    headerTitle: "بررسی عوامل شکست هخامنشیان",
    headerStatus : "تاریخ و جغرافیا",
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    options: "تنظیمات",
    hashtags: ["کوروش", "انحطاط هخامنشیان", "اسکندر مقدونی", "داریوش سوم", "تخت جمشید" ]
}

export default ArticleCard;