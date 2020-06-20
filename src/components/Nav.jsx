import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar py-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand pl-4">
        <Link className="navbar-item has-text-white-bis is-size-2" to="/">
          PhotoMage
        </Link>
        <button
          className="navbar-burger burger has-text-white-bis"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        ></button>

        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end px-4">
          <Link
            className="navbar-item has-text-white-bis is-size-4 mx-3"
            to="/"
          >
            Home
          </Link>
          <Link
            className="navbar-item has-text-white-bis is-size-4 mx-3"
            to="/upload"
          >
            Upload
          </Link>
        </div>
      </div>
    </nav>
  );
}
