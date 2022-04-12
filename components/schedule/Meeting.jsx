import Link from "next/link";
import React from "react";
import ClockIcon from "components/icons/Clock";

const Meeting = ({ meeting }) => {
  return (
    <div className="card meeting">
      <h3 className="meeting-title">{meeting.name}</h3>
      <div className="meeting-description">
        <div>{meeting.description}</div>
        {meeting.datetime && (
          <time className="meeting-date">
            <ClockIcon />
            {meeting.datetime
              ? new Date(meeting.datetime).toLocaleString()
              : ""}
          </time>
        )}
      </div>

      {meeting.articles?.length ? (
        <>
          <h4 className="articles-list-title">Articles :</h4>
          <div className="articles-list">
            {meeting.articles.map((article, i) => {
              return (
                <Link
                  key={article.articles_id.id}
                  href={`/article?id=${article.articles_id.id}`}
                >
                  <a>
                    {article.articles_id.category?.name && (
                      <span>{article.articles_id.category.name}</span>
                    )}
                    <span>{article.articles_id.title}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Meeting;
