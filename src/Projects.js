import React from "react";
import reactDictionary from "./react-dictionary-app.png";
import htmlCssWeather from "./html-css-weather-app.png";
import responsiveTravel from "./responsive-travel-app.png";
import reactWeather from "./react-weather-app.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="row mb-5">
        <div className="col d-none d-md-block">
          <img
            src={reactDictionary}
            className="img-fluid"
            alt="Dictionary app built using React & Bootstrap."
          ></img>
        </div>
        <div className="col project-description">
          <h3 className="mb-5">React Dictionary App</h3>
          <p className="mb-5 text-muted">
            The goal of this project was to create a functioning dictionary app,
            complete with definitions, parts of speech, audio (where available),
            and images. This project was built using React and Bootstrap with
            the help of some API calls.
          </p>
          <a
            className="btn btn-branding-outline"
            href="https://sweet-hamster-b6f5af.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col d-none d-md-block">
          <img
            src={htmlCssWeather}
            className="img-fluid"
            alt="Weather app built using HTML, CSS, & Bootstrap."
          ></img>
        </div>
        <div className="col project-description">
          <h3 className="mb-5">HTML & CSS Weather App</h3>
          <p className="mb-5 text-muted">
            The goal of this project was to create a functioning weather app
            using HTML, CSS, Bootstrap, and API calls. Complete with changing
            icons and a forecast, this weather app tells you all you need to
            know to get ready for your day.
          </p>
          <a
            className="btn btn-branding-outline"
            href="https://precious-profiterole-f5155b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col d-none d-md-block">
          <img
            src={responsiveTravel}
            className="img-fluid"
            alt="Responsive travel website for Nova Scotia built using HTML and CSS"
          ></img>
        </div>
        <div className="col project-description">
          <h3 className="mb-5">Responsive Travel App</h3>
          <p className="mb-5 text-muted">
            The goal of this project was to create a relatively simple
            responsive website promoting your favourite travel location using
            HTML and CSS along with embedded iFrames and grids. I included
            components for Google Maps to show locations and Spotify to play
            samples of a local band's album.
          </p>
          <a
            className="btn btn-branding-outline"
            href="https://travel-nova-scotia.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col d-none d-md-block">
          <img
            src={reactWeather}
            className="img-fluid"
            alt="Weather app built using React"
          ></img>
        </div>
        <div className="col project-description">
          <h3 className="mb-5">React Weather App</h3>
          <p className="mb-5 text-muted">
            The goal of this project was to recreate the HTML & CSS Weather App
            in React. This was my first time working with React, so it was full
            of learning curves. The site includes all of the same components as
            the original, with stylistic changes and an addition of a
            celsius/fahrenheit converter for the current temperature.
          </p>
          <a
            className="btn btn-branding-outline"
            href="https://papaya-griffin-3f3a1a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the site
          </a>
        </div>
      </div>
    </div>
  );
}
