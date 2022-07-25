// react & next
import propTypes from 'prop-types';

// libraries
import {FaFireAlt, FaRandom, FaBuffer, FaClipboardList, FaCanadianMapleLeaf} from "react-icons/fa";

const AsideNavbar = ({width}) => {
    return (
        <aside className={`${width} selfTop`}>
            <div className="asideNav flexColumn">
                {/* <header className="title mb-3 pr-4 fs-12 bold-9"> راحت تر انتخاب کنید ... </header> */}
                <div className="asideNavListTitle flexColumn">
                    <header className="flexAlignCenter ml-6 bold-6 ptb-4 pr-4 redPeach">
                        <FaBuffer className="fs-12 ml-3" />
                        آخرین مقالات منتشرشده
                    </header>
                </div>
                <div className="asideNavListTitle flexColumn radius-6">
                    <header className="flexAlignCenter ml-6 bold-6 ptb-4 pr-4 redPeach">
                        <FaRandom className="fs-12 ml-3" />
                        نمایش تصادفی چند مقاله
                    </header>
                </div>
                <div className="asideNavListTitle flexColumn radius-6">
                    <header className="flexAlignCenter ml-6 bold-6 ptb-4 pr-4 redPeach">
                        <FaFireAlt className="fs-12 ml-3" />
                        برترین مقالات از نظر کاربران
                    </header>
                    <div className="mr-6 ptb-2 fs-9 lineHeight-4 bold-4">
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> برترین های هفته </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> برترین های ماه </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> برترین های سال </div>
                    </div>
                </div>
                <div className="asideNavListTitle flexColumn radius-6 peachBorder">
                    <header className="flexAlignCenter ml-6 bold-6 ptb-4 pr-4 redPeach">
                        <FaClipboardList className="fs-12 ml-3" />
                        دسته بندی مقالات
                    </header>
                    <div className="mr-6 ptb-2 fs-9 lineHeight-4 bold-4">
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> دنیای فناوری </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> علم، دانش و آزمایشگاه </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> خارج از زمین </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> سیاسی و فرهنگی </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> زبان های خارجه </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> تاریخ و جغرافیا </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> به وقت داستان </div>
                        <div className="asideNavListItem"><FaCanadianMapleLeaf /> کودکانه </div>
                    </div>
                </div>
            </div>
        </aside>

    )
}

AsideNavbar.propTypes = {
    width : propTypes.string,
    animation: propTypes.string,
}

export default AsideNavbar;