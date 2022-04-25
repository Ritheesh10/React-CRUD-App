import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid mx-5">
        <a className="navbar-brand font-weight-bold text-uppercase text-success" href="#">
          Test Yantra
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item font-weight-bold mr-2">
              <Link className="nav-link text-success" to="/">
                Posts
              </Link>
            </li>

            <li className="nav-item bg-success font-weight-bold ">
              <Link className="nav-link text-light" to="/create-post">
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
