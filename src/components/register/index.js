// react & next
import Link from "next/link";

// libraries
import {Button, Loading} from "@nextui-org/react"; 
import {FaCheck, FaRedo} from "react-icons/fa"

// components
import RegisterForm from "./registerForm";

const Register = () => {
    return (
        <main className="registerPage">
            <header>
                <h3 className="fs-11 bold-7 mr-12"> عضـــو خانواده کافه مقاله شو ... </h3>
            </header>
            <article className="dFlex registerPageForm">
                <RegisterForm />
                <div className="flexColumn mt-11" >
                    <Button
                        flat
                        color="warning"
                        iconRight={<FaRedo fill="currentColor" />}
                        className="selfBottom ml-15 mb-8"
                    >
                        {/* <Loading type="default" color="currentColor" size="sm" /> */}
                        <Link href={"/"}>
                            برگرد به سایت
                        </Link>
                    </Button>
                    <Button
                        flat
                        color="success"
                        iconRight={<FaCheck fill="currentColor" />}
                        className="selfBottom ml-15 mb-8"
                    >
                        {/* <Loading type="default" color="currentColor" size="sm" /> */}
                        ثبت نام
                    </Button>
                </div>
            </article>
        </main>
    )
}

export default Register;