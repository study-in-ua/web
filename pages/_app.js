import "../assets/css/style.css";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../src/api";
import { getStrapiMedia } from "../src/media";
import Layout from "../components/layout";
import Seo from "../components/seo";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { layout, categories } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(layout.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={layout}>
        <Layout categories={categories}>
          <Seo seo={layout.seo} />
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const layout = await fetchAPI("/layout",["*", "seo.*"]);
  const categories = await fetchAPI("/categories");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { layout: layout.data , categories: categories.data} };
};

export default MyApp;