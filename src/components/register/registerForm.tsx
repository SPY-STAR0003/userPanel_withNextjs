// components
import MyInput from "../global/elements/form/input";

// libraries
import {Form, withFormik} from "formik";
import * as yup from "yup";

const InnerRegisterForm = () => {
    return (
        <Form className={"flex flex-wrap md:w-2/3 w-full mt-8"}>
            <MyInput
                groupClasses={"mb-12 mx-auto"}
                classes="md:mx-6"
                name="name"
                placeholder="نام و نام خانوادگی" 
            />
            <MyInput
                groupClasses={"mb-12 mx-auto"}
                classes="md:mx-6"
                name="idCode"  
                placeholder="کد ملی" 
            />
            <MyInput
                groupClasses={"mb-12 mx-auto"}
                classes="md:mx-6"
                name="phone"  
                placeholder="شماره موبایل" 
            />
            <MyInput
                groupClasses={"lg:mb-6 mb-12 mx-auto"}
                classes="mx-6"
                name="email"  
                placeholder="ایمیل" 
            />
            <MyInput
                groupClasses={"lg:mb-6 mb-12 mx-auto"}
                classes="mx-6"
                name="favorites"  
                placeholder="حوزه نویسندگی موردعلاقه" 
            />
            <MyInput
                groupClasses={"lg:mb-6 mb-12 mx-auto"}
                classes="mx-6"
                name="studyRange"  
                placeholder="میزان مطالعه روزانه شما" 
            />
        </Form>
    )
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const RegisterFormSchema = yup.object().shape({
    name : yup.string().required(),
    idCode : yup.string().required().length(10).matches(phoneRegExp, "شماره ملی صحیح نمی باشد"),
    phone : yup.string().required().length(10).matches(phoneRegExp, "شماره موبایل صحیح نمی باشد !"),
    email : yup.string().required().email(),
    favorites : yup.object(),
    studyRange : yup.number().required().min(0).max(15)
})

const RegisterForm = withFormik({
    mapPropsToValues : (props) => ({
        name : "", idCode : "", phone : "", email: "", favorites : "", studyRange : "" 
    }),
    validationSchema : RegisterFormSchema,
    handleSubmit : (values : any) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default RegisterForm;