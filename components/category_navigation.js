import React from "react";
import Link from "next/link";
import CalendarIcon from "../components/icons/Calendar";
import { Container } from "reactstrap";
import { ROUTE_CATEGORY, ROUTE_SCHEDULE } from "constants/router";

const CategoryNavigation = ({ categories }) => {
  return (
    <div className="header">
      <Container>
        <nav className="header">
          <Link href="/">
            <a className="logo">Study.In.UA</a>
          </Link>

          <ul className="uk-navbar-nav">
            <li>
              <Link href={ROUTE_SCHEDULE}>
                <a>
                  <CalendarIcon />
                  Schedule
                </a>
              </Link>
            </li>
          </ul>

          <ul className="aside-nav">
            {categories.map((category) => {
              const { id, name } = category;
              return (
                <li key={id}>
                  <Link href={`${ROUTE_CATEGORY}/${id}`}>
                    <a className="uk-link-reset">{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default CategoryNavigation;
