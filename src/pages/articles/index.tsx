// next & react
import { NextPage } from "next";
import Head from "next/head";

// components
import Articles from "../../components/articles";

const ArticlesPage : NextPage = () => {
    return (
        <>
            <Head>
                <title> لیست مقالات </title>
            </Head>
            <Articles />
        </>
    )
}

export default ArticlesPage;