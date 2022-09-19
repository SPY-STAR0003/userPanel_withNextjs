
// libraries
import { Formik, Form } from "formik";

// components
import { Search } from "../../../assets/brokenIcons";
import MyButton from "../../global/elements/form/button";
import MyInput from "../../global/elements/form/input";

const SearchBox : React.FC = () => {

    return (
        <>
            <MyButton
                color="dark"
                classes="rounded-3xl text-sm !py-3 w-full"
            >
                خرید نسخه پیشرفته کافه مقاله
            </MyButton>
            <Formik
                initialValues={{ text : "" }}
                onSubmit={(values) => console.log(values)}
            >
                <Form className="w-full">
                    <MyInput
                        name="text"
                        placeholder="جستجو ..."
                        style="bordered"
                        classes="mt-8 py-3 pr-14 w-full"
                        Icon={<Search color="gray" classes="absolute top-11 right-4 w-6 h-6" />}
                    />
                </Form>
            </Formik>
        </>
    )
}

export default SearchBox;