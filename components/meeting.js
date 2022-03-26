import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Meeting = ({ meeting }) => {
    return (
        <>
            <div className="uk-card uk-card-muted">
                <div className="uk-card-body">
                    <p className="uk-text-uppercase">
                        {meeting.name}
                    </p>
                    <p className="uk-text-uppercase">
                        {meeting.description}
                    </p>
                    <time>Time {meeting.datetime ? new Date(meeting.datetime).toLocaleString(): ""}</time>
                    <p>
                        Articles :
                    </p>
                    {meeting.articles.map((article, i) => {
                        return (
                            <Link href={`/article?id=${article.articles_id.id}`}>
                                <a className="uk-link-reset">
                                    <p id="category" className="uk-text-uppercase">
                                        {article.articles_id.category.name}
                                    </p>
                                    <p id="title" className="uk-text-large">
                                        {article.articles_id.title}
                                    </p>
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Meeting;