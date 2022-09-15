// next & react
import Head from "next/head";
import { NextPage } from "next/types";

// components
import Home from "../components/home";

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