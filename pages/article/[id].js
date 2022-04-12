import HTMLRenderer from "react-html-renderer";
import Link from "next/link";
import { Container } from "reactstrap";
import { fetchAPI } from "src/api";
import { ROUTE_SCHEDULE } from "constants/router";

const Article = ({ article }) => {
  const { category } = article;

  return (
    <Container>
      <Link href={`${ROUTE_SCHEDULE}?articleId=${article.id}`}>Schedule</Link>
      <h1 className="main-title">{article.title}</h1>
      <HTMLRenderer html={article.content} />
    </Container>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const attributeRes = await fetchAPI(`/articles/${query.id}`, ["*"]);

    return {
      props: {
        article: attributeRes.data,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

export default Article;
