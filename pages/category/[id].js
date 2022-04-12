import ArticleList from "components/articles/ArticleList";
import React from "react";
import { fetchAPI } from "../../src/api";

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
  try {
    const categoriesRes = await fetchAPI(`/categories/${query.id}`, [
      "articles.*",
    ]);
    return {
      props: {
        articles: categoriesRes.data.articles,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

export default Category;
