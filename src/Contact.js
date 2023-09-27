import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="Name">Aubrey Jamison</div>
      <div className="Contact-info">aubreyjustinejamison@gmail.com</div>
      <div className="Contact-links">
        <a
          href="https://www.linkedin.com/in/aubreyjamison713/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/aubreyjustine713"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
