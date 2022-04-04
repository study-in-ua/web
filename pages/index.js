import React from "react";
import { Container } from "reactstrap";
import ArticleList from "../components/article_list";
import { fetchAPI } from "../src/api";

const Home = ({ articles, homepage }) => {
  return (
    <Container>
      <h1>{homepage.title}</h1>
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
