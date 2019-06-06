import React from 'react'
import Project from './project'
import './projects.css';

export default function Projects() {
  return (
    <React.Fragment> 
      <div id="project-header"><h3>A collection of projects</h3>
      <p>click on the image to be taken to the site</p></div>
      <br/><br/>
      <div className="projects-grid">
      <div></div>
      <div className="projects-grid-item">
        <Project title="Woodcut" image_source={require("./woodcut.PNG")} description="This is a project I currently maintain for a video game. It is a high score checking web 
        application that checks user entered data against multiple API's. There are two pages that are navigated to using React Router. The page knows when a username searched for does not exist and 
        depopulates the affected tables. The returned data is organized into JavaScript objects and sorted to be rendered. It also brings in an image from an API." 
        tech="React, JavaScript, Ajax, HTML, CSS" />
      </div>
      <div></div>
    </div>
    </React.Fragment>
  )
}
