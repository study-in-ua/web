import React from "react";
import Article from "./article";

const ArticleList = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="articles">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Article article={article} key={`article__left__${article.id}`} />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Article
                  article={article}
                  key={`article__left__${article.id}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
