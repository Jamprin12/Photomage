import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar py-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-white-bis is-size-2" to="/">
          Photomage
        </Link>
        <a
          role="button"
          classNamne="avbar-burger burger has-text-white-bis"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-end px-3">
          <Link className="navbar-item has-text-white-bis is-size-4" to="/">
            Home
          </Link>
          <Link
            className="navbar-item has-text-white-bis is-size-4"
            to="/upload"
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
}
