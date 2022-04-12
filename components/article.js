import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { ROUTE_ARTICLE, ROUTE_CATEGORY } from "constants/router";

const Article = ({ article }) => {
  return (
    <article className="article card">
      <div className="article-image">
        <Link href={`${ROUTE_ARTICLE}/${article.id}`}>
          <a>
            <NextImage
              image={article.image}
              width="400"
              height="258"
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <div className="article-content">
        <div className="article-categories">
          <Link href={`${ROUTE_CATEGORY}${article.category.id}`}>
            <a className="article-category">{article.category.name}</a>
          </Link>
        </div>
        <Link href={`${ROUTE_ARTICLE}/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </div>
    </article>
  );
};

export default Article;
