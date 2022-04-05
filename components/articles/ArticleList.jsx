import React from "react";
import { Col, Row } from "reactstrap";
import Article from "../article";

const ArticleList = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);

  return (
    <div>
      <div className="articles">
        <Row>
          {articles.map((article) => {
            return (
              <Col xs={12} sm={3} key={`article__left__${article.id}`}>
                <Article article={article} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ArticleList;
