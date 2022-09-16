// next & react

// libraries

// assets

// components
import { Formik, Form } from "formik";
import { Search } from "../../assets/brokenIcons";
import MyInput from "./elements/form/input";

interface SearchBoxProps {
    heightClass : string
}

const SearchBox : React.FC<SearchBoxProps> = ({heightClass}) => {

    return (
        <article 
            style={{
                backgroundImage : `url(/images/white-library.jpg)`
            }} 
            className={`flex items-center justify-center w-full ${heightClass}`}
        >
            <Formik
                initialValues = {{ search : ""}}
                onSubmit = {(values : any) => console.log(values)}
            >
                <Form>
                    <MyInput
                        name={"react-aria-1"}
                        aria-label={"SearchBox"}
                        placeholder="قسمتی از عنوان مقاله ای را  که به دنبال آن هستید وارد نمایید ..."
                        style={"solid"}
                        classes={"md:w-[40rem] sm:w-[30rem] w-[20rem] !px-6 !py-4"}
                        Icon={<Search color={"black"} classes={"bg-white w-10 h-8 absolute left-0 top-3 ml-4 cursor-pointer"} />}
                    />
                </Form>
            </Formik>
        </article>
    )
}

export default SearchBox;