import React from "react";
import Link from "next/link";

const CategoryNavigation = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Study.In.UA</a>
              </Link>
            </li>
            <li>
              <Link href="/shedule">
                <a>Shedule</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
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
        </div>
      </nav>
    </div>
  );
};

export default CategoryNavigation;