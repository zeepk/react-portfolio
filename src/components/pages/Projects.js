import React from "react";
import Project from "./project";
import ProjectReverse from "./projectReverse";
import "./projects.css";

export default function Projects() {
  return (
    <React.Fragment>
      <div id="project-header">
        <h3>A collection of projects</h3>
        <p>click on the image to be taken to the site</p>
      </div>
      <br />
      <br />
      <div className="projects-grid">
        <div></div>
        <div className="projects-grid-item">
          <Project
            title="Woodcut"
            image_source={require("./woodcut.PNG")}
            image_path="https://woodcut.info/rs3/zee_pk"
            description="This is a project I currently maintain for a video game. It is a high score checking web 
        application that checks user entered data against multiple API's. React Router is used for navigation across many pages. The page knows when a username searched for does not exist and 
        depopulates the affected tables. The returned data is organized into JavaScript objects and sorted to be rendered. It also brings in an image from an API."
            tech="React, JavaScript, Ajax, HTML, CSS"
          />
          <br></br>
        </div>
        <div></div>

        <div></div>
        <div className="projects-grid-item">
          <ProjectReverse
            title="Tech Support Site"
            image_source={require("./superpcconsulting.png")}
            image_path="https://techsupportsite.netlify.com/"
            description="This is a template site I created to serve as a foundation for a tech support company website."
            tech="React, JavaScript, HTML, CSS"
          />
          <br></br>
        </div>
        <div></div>

        <div></div>
        <div className="projects-grid-item">
          <Project
            title="Ascii Checker"
            image_source={require("./ascii.PNG")}
            image_path="https://asciichecker.netlify.com/"
            description="A site I created to quickly display the Ascii value of any character entered on the keyboard. The function reads the keypress event from the keyboard and changes the site to display the corresponding Ascii value."
            tech="JavaScript, HTML, CSS"
          />
          <br></br>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}
