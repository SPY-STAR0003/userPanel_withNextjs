// react & next
import Link from "next/link";
import { memo } from "react";

// libraries
import  {FaUserAlt} from "react-icons/fa";
import {Input, Button} from "@nextui-org/react";

const LoginBox = () => {
    return (
        <div className={"flexColumn flexCenter loginBox pt-4"}>
            <header>
                <h5 className="black textCenter fs-8"> شما هنوز وارد نشده اید </h5>
                <h4 className="black textCenter fs-10"> برای ورود به سایت اطلاعات خود را وارد نمایید </h4>
            </header>
            <form className="flexColumn flexCenter p-4">
                <Input.Password
                    size="lg"
                    className="mb-3"    
                    placeholder="نام کاربری"
                    visibleIcon={<FaUserAlt fill="currentColor" />}
                    hiddenIcon={<FaUserAlt fill="currentColor" />}
                />
                <Input.Password
                    size="lg"
                    placeholder="رمز عبور"
                    className="mt-1 mb-3"    
                />
                <Link href="/">
                    <Button
                        className="mt-4"
                        shadow
                        color="gradient"
                        auto
                    >
                        ورود 
                    </Button>
                </Link>
                <Link href="/register">
                    <span className="mt-5 mb-3 fs-8 blue hoverUnderline pointer"> اگر در کافه مقاله ثبت نام نکرده اید، کلیک کنید </span>
                </Link>
                <Link href="/forgetPassword">
                    <span className="mb-3 fs-8 blue hoverUnderline pointer"> رمزعبور خود را فراموش کرده ام! </span>
                </Link>
            </form>
        </div>
    )
}

export default memo(LoginBox);