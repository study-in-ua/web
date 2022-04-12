import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Article = ({ article }) => {
  return (
    <article className="article card">
      <div className="article-image">
        <Link href={`/article?id=${article.id}`}>
          <a>
            <NextImage image={article.image} width="400" height="258" layout="responsive" />
          </a>
        </Link>
      </div>
      <div className="article-content">
        <div className="article-categories">
          <Link href={`/category?id=${article.category.id}`}>
            <a className="article-category">{article.category.name}</a>
          </Link>
        </div>
        <Link href={`/article?id=${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </div>
    </article>
  );
};

export default Article;
