// next & react
import Head from "next/head";

// components
import Articles from "../../components/articles";

const ArticlesPage = () => {
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