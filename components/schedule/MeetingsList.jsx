import React from "react";
import { Col, Row } from "reactstrap";
import Meeting from "./Meeting";

const MeetingsList = ({ meetings }) => {
  const leftMeetingsCount = Math.ceil(meetings.length / 5);

  return (
    <Row>
      {meetings.map((meeting, i) => {
        return (
          <Col key={`meeting__left__${meeting.id}`} sm={4}>
            <Meeting meeting={meeting} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MeetingsList;
