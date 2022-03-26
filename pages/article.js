import { fetchAPI } from "../src/api";
import HTMLRenderer from 'react-html-renderer'
import BackButton from "../components/common/BackButton";
import Link from "next/link";

const Article = ({ article }) => {
  const { category } = article;

  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <BackButton link={{
          pathname: '/category',
          query: {
            id: category,
          }
        }} />
        <br/>
        <Link href={`/shedule?articleId=${article.id}`}>
          Shedule
        </Link>
        <h1>{article.title}</h1>
        <HTMLRenderer html={article.content} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const attributeRes = await fetchAPI(`/articles/${query.id}`, ["*"]);

  return {
    props: {
      article: attributeRes.data,
    }
  };
}

export default Article;