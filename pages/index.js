import React from "react";
import { Container } from "reactstrap";
import ArticleList from "../components/articles/ArticleList";
import { fetchAPI } from "../src/api";

const Home = ({ articles, homepage }) => {
  return (
    <Container>
      <h1 className="main-title">{homepage.title}</h1>
      <ArticleList articles={articles} />
    </Container>
  );
};

export async function getServerSideProps() {
  // Run API calls in parallel
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", ["*", "category.*"]),
    fetchAPI("/homepage", ["title"]),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
  };
}

export default Home;
