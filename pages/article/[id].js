import { fetchAPI } from "../../src/api";
import HTMLRenderer from "react-html-renderer";
import BackButton from "../../components/common/BackButton";
import { ROUTE_CATEGORY } from "../../constants/router";

const Article = ({ data = {} }) => {
  const { category } = data;

  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <BackButton
          link={{
            pathname: ROUTE_CATEGORY,
            query: {
              id: category,
            },
          }}
        />
        <h1>{data.title}</h1>
        <HTMLRenderer html={data.content} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const attributeRes = await fetchAPI(`/articles/${query.id}`, ["*"]);

    return {
      props: {
        data: attributeRes.data,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}

export default Article;
