// next & react
import Head from "next/head";
import { NextPage } from "next/types";

// libraries
import { setLocale } from 'yup';

// components
import Home from "../components/home";

setLocale({
  mixed: {
    required : 'این فیلد نمی تواند خالی باشد !',
  },
  string: {
    min: ' حداقل تعداد کاراکتر این فیلد باید ${min} باشد !',
    email : 'مقدار وارد شده باید یک ایمیل باشد !',
  },
});

const HomePage : NextPage = () => {

    return (
        <>
            <Head>
                <title> کافه مقاله </title>
            </Head>
            <Home />
        </>
    )
}

export default HomePage;