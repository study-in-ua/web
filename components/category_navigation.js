import React from "react";
import Link from "next/link";
import CalendarIcon from "../components/icons/Calendar";
import { Container } from "reactstrap";

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
              <Link href="/shedule">
                <a>
                  <CalendarIcon />
                  Shedule
                </a>
              </Link>
            </li>
          </ul>

          <ul className="aside-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category?id=${category.id}`}>
                    <a className="uk-link-reset">{category.name}</a>
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
