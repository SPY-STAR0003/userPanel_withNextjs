// react & next
import Link from "next/link";

// libraries
import {FaCheck, FaRedo} from "react-icons/fa"

// components
import RegisterForm from "./registerForm";
import MyButton from "../global/elements/form/button";

const Register : React.FC = () => {
    return (
        <>
            <img className="fixed top-0 left-0 w-full h-full -z-10" src="/images/bg-register.jpg" alt="RegisterPage-background" />
            <main className="absolute lg:bottom-4 w-full lg:mb-12">
                <div className={""}>
                    <header>
                        <h3 className="text-2xl lg:pr-8 lg:mb-8 my-6 lg:text-right text-center py-4 lg:bg-transparent bg-black/50 text-white lg:text-gray-700 font-extrabold"> عضـــو خانواده کافه مقاله شو ... </h3>
                    </header>
                    <article className="flex lg:flex-row flex-col">
                        <RegisterForm />
                        <div className="flex lg:self-end self-center" >
                                <MyButton
                                    color="error"
                                    Icon={<FaRedo fill="currentColor" />}
                                    classes="mx-2 w-32 text-sm"
                                >
                                    {/* <Loading type="default" color="currentColor" size="sm" /> */}
                                    <Link href={"/"}>
                                        برگرد به سایت
                                    </Link>
                                </MyButton>
                            <MyButton
                                color="success"
                                Icon={<FaCheck fill="currentColor" />}
                                classes="mx-2 w-32 text-sm"
                            >
                                {/* <Loading type="default" color="currentColor" size="sm" /> */}
                                ثبت نام
                            </MyButton>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Register;