import React from "react";
import Meeting from "./meeting";

const MeetingsList = ({ meetings }) => {
  const leftMeetingsCount = Math.ceil(meetings.length / 5);
  const leftMeetings = meetings.slice(0, leftMeetingsCount);
  const rightMeetings = meetings.slice(leftMeetingsCount, meetings.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftMeetings.map((meeting, i) => {
            return (
              <Meeting
                meeting={meeting}
                key={`meeting__left__${meeting.id}`}
              />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightMeetings.map((meeting, i) => {
              return (
                <Meeting
                  meeting={meeting}
                  key={`meeting__left__${meeting.id}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsList;