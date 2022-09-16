
// components
import { Form, Formik } from "formik";
import MyButton from "../../../global/elements/form/button";
import MyInput from "../../../global/elements/form/input";

interface SubscribeFormProps {
    email : string
}

const Subscribe = () => {
    return (
        <article className="flex flex-col items-center justify-center">
            <h4 className="text-lg w-2/3 mt-14 text-center leading-relaxed"> با نوشتن آدرس پست الکترونیکی خودتان از آخرین اخبار مهم سایت باخبر شوید! </h4>
            <div className="flex flex-col items-center justify-center mt-10 w-2/3">
                <Formik
                    initialValues ={{
                        email: "",
                    }}
                    onSubmit = {(values : SubscribeFormProps) => console.log(values)}
                >
                    <Form className={"flex flex-col items-center"}>
                        <MyInput
                            classes="w-80 !py-4"
                            placeholder="ایمیل شما ..." 
                            name="subscribed-email"
                            style="gray"
                        />
                        <MyButton classes="mt-6">
                            به اشتراک گذاشتن
                        </MyButton>
                    </Form>
                </Formik>
            </div>
        </article>
    )
}

export default Subscribe;