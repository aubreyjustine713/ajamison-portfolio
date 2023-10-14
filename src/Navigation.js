import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <nav className="navbar navbar-expand-md navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
          <a className="nav-link active" href="/" title="Homepage">
            Home<span className="sr-only"></span>
          </a>
          <a className="nav-link" href="/#projects" title="Projects">
            Projects
          </a>
          <a className="nav-link" href="/#about" title="About">
            About
          </a>
          <a className="nav-link" href="/#contact" title="Contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
