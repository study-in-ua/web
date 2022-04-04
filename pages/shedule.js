import React from "react";
import { Container } from "reactstrap";
import MeetingsList from "../components/meetings_list";
import { fetchAPI } from "../src/api";

const Schedule = ({ meetings }) => {
  return (
    <Container>
      <MeetingsList meetings={meetings} />
    </Container>
  );
};

export async function getServerSideProps({ query }) {
  const filters = query.articleId
    ? [`[articles][articles_id][_eq]=${query.articleId}`]
    : [];
  const meetingsRes = await fetchAPI(`/meetings`, ["*.*.*"], filters);
  return {
    props: {
      meetings: meetingsRes.data,
    },
  };
}

export default Schedule;
