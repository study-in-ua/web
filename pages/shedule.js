import React from "react";
import MeetingsList from "../components/meetings_list";
import { fetchAPI } from "../src/api";

const Schedule = ({ meetings }) => {
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <MeetingsList meetings={meetings} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const filters = query.articleId ? [`[articles][articles_id][_eq]=${query.articleId}`] : [];
  const meetingsRes = await fetchAPI(
    `/meetings`, ["*.*.*"], filters);
  return {
    props: {
      meetings: meetingsRes.data,
    }
  };
}

export default Schedule;