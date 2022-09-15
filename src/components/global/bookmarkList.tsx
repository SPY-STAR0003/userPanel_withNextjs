// react & next
import Link from "next/link";
import { memo, SetStateAction } from "react";

// libraries
import  {FaUserAlt} from "react-icons/fa";
import CloseCross from "./elements/buttons/closeCross";

// components
import Button from "./elements/form/button";
import Input from "./elements/form/input";

interface BookmarkListProps {
    setShowBookmarkList : React.Dispatch<SetStateAction<boolean>>
}

const BookmarkList : React.FC<BookmarkListProps> = ({setShowBookmarkList}) => {
    return (
        <div className={`flex-col items-center justify-center animate-open-from-center absolute top-16 left-0 sm:w-96 w-80 bg-white shadow-sm shadow-white/90 backdrop-blur-lg py-4`}>
            <header className="relative">
                <CloseCross clickHandler={setShowBookmarkList} />
                <h5 className="text-violet-900 font-bold text-center text-sm"> شما هنوز وارد نشده اید </h5>
                <h4 className="text-violet-900 font-bold text-center mt-1"> برای ورود به سایت اطلاعات خود را وارد نمایید </h4>
            </header>
            <p> هنوز هیچ گزینه ای داخل لیست نشان شده های خود ندارید ! </p>
            {/* <form className="flex flex-col items-center p-4">
                <Input
                    size="lg"
                    classes="mb-3"    
                    placeholder="نام کاربری"
                    visibleIcon={<FaUserAlt fill="currentColor" />}
                    hiddenIcon={<FaUserAlt fill="currentColor" />}
                />
                <Input
                    size="lg"
                    placeholder="رمز عبور"
                    classes="mt-1 mb-3"    
                />
                <Link href="/">
                    <Button
                        classes="mt-4"
                        color="gradient"
                    >
                        ورود 
                    </Button>
                </Link>
            </form>
            <div className={"flex flex-col items-center space-y-2"}>
                <Link href="/register">
                        <span className="text-blue-600 cursor-pointer font-bold text-sm hover:text-blue-900"> ثبت نام در سایت </span>
                </Link>
                <Link href="/register/forgetPassword">
                    <span className="text-blue-600 cursor-pointer font-bold text-sm hover:text-blue-900"> رمزعبور خود را فراموش کرده ام! </span>
                </Link>
            </div> */}
        </div>
    )
}

export default memo(BookmarkList);