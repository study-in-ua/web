import React from "react";
import ArticleList from "../components/article_list";
import { fetchAPI } from "../src/api";

const Home = ({ articles, homepage }) => {
  return (
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.title}</h1>
          <ArticleList articles={articles} />
        </div>
      </div>
  );
};

export async function getServerSideProps() {

  // Run API calls in parallel
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", ["*", "category.*"] ),
    fetchAPI("/homepage", ["title"]),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    }
  };
}

export default Home;