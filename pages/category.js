import React from "react";
import ArticleList from "../components/article_list";
import { fetchAPI } from "../src/api";

const Category = ({ articles }) => {
  return (
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <ArticleList articles={articles} />
        </div>
      </div>
  );
};

export async function getServerSideProps({ query }) {
  const categoriesRes = await fetchAPI(
    `/categories/${query.id}`, ["articles.*"]);
  return {
    props: {
      articles: categoriesRes.data.articles,
    }
  };
}

export default Category;