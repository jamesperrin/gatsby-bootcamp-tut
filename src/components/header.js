import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import headerSytles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerSytles.header}>
      <h1>
        <Link className={headerSytles.title} to="/" title={"Home | " + data.site.siteMetadata.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={headerSytles.navList}>
          <li>
            <Link
              to="/"
              title="Home"
              className={headerSytles.navItem}
              activeClassName={headerSytles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              title="Blog"
              className={headerSytles.navItem}
              activeClassName={headerSytles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              title="About"
              className={headerSytles.navItem}
              activeClassName={headerSytles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              title="Contact"
              className={headerSytles.navItem}
              activeClassName={headerSytles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
