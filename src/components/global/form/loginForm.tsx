// react
import React from "react";
import Link from "next/link";

// libraries
import { withFormik, Form } from "formik";
import * as yup from "yup";

// components
import MyButton from "../elements/form/button";
import MyInput from "../elements/form/input";


const InnerLoginFormikForm : React.FC = () => {
    return (
        <Form className="flex flex-col items-center p-4">
            <MyInput
                name="username"
                size="lg"
                classes="mb-3"    
                placeholder="نام کاربری"
                // visibleIcon={<FaUserAlt fill="currentColor" />}
                // hiddenIcon={<FaUserAlt fill="currentColor" />}
            />
            <MyInput
                name="password"
                type="password"
                size="lg"
                placeholder="رمز عبور"
                classes="mt-1 mb-3"    
            />
            <Link href="/">
                <MyButton
                    classes="mt-4"
                    color="purple"
                >
                    ورود 
                </MyButton>
            </Link>
        </Form>
    )    
}

const loginFormSchema = yup.object().shape({
    username : yup.string().required(),
    password : yup.string().required().min(5)
})

interface LoginFormikFormValues {
    username : string,
    password : string
}

const LoginFormikForm = withFormik<any, LoginFormikFormValues>({
    mapPropsToValues : (props : LoginFormikFormValues) => ({
        username : "",
        password : ""
    }),
    validationSchema : loginFormSchema,
    handleSubmit : (values : any) => {
        console.log(values)
    } 
})(InnerLoginFormikForm)

export default LoginFormikForm;

