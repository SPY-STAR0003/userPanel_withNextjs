
// components
import BestAuthor from "./bestAuthor";

const BestAuthors = () => {
    return (
        <article className="bestAuthors">
            <header className="mt-12 mb-9 pr-6 textCenter">
                <h3 className="fs-18 bold-7"> برترین نویسنده های کافه مقاله را بشناسید ... </h3>
            </header>
            <main className="flexCenter mt-8">
                <BestAuthor
                    picSrc = "https://i.pravatar.cc/150?u=a048581f4e29026701d"
                    size={50}
                    name={" ویلیام هاوارد "}
                    description={"حوزه تخصصی : خارج از زمین"}
                    score={3105}
                    avatarLink={"users/user"}
                />
                <BestAuthor
                    picSrc = "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    size={50}
                    name={"جین فیشر "}
                    description={"حوزه تخصصی : علم، دانش ریاضیات"}
                    score={3245}
                    avatarLink={"users/user"}
                />
                <BestAuthor
                    picSrc = "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    size={60}
                    name={"تونی رایچرت "}
                    description={"حوزه تخصصی : فناوری"}
                    score={3905}
                    avatarLink={"users/user"}
                />
                <BestAuthor
                    picSrc = "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size={50}
                    name={"آریانا واتسون"}
                    description={"حوزه تخصصی : خارج از زمین"}
                    score={3350}
                    avatarLink={"users/user"}
                />
                <BestAuthor
                    picSrc = "https://i.pravatar.cc/150?u=a092581d4ef9026700d"
                    size={50}
                    name={"کریستین کوپر"}
                    description={"حوزه تخصصی : سیاسی فرهنگی"}
                    score={3205}
                    avatarLink={"users/user"}
                />
            </main>
        </article>
    )
}


export default BestAuthors;