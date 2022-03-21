import { fetchAPI } from "../src/api";
import HTMLRenderer from 'react-html-renderer'

const Article = ({ data }) => {

    return (
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{data.title}</h1>
          <HTMLRenderer html={data.content}/>
        </div>
      </div>
    );
  };

export async function getServerSideProps({ query }) {
  const attributeRes = await fetchAPI(`/articles/${query.id}`, ["*"]);

  return {
    props: {
      data: attributeRes.data,
    }
  };
}
  
export default Article;