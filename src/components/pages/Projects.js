import React from 'react'
import Project from './project'
import './projects.css';

export default function Projects() {
  return (
    <React.Fragment> 
      <div id="project-header"><h3>A collection of projects</h3>
      <p>click on the image to be taken to the site</p></div>
      <div className="projects-grid">
      <div></div>
      <div className="projects-grid-item">
        <Project title="Woodcut" image_source={require("./woodcut.PNG")} description="This is a project I currently maintain for a video game. It is a high score checking web 
        application that checks user entered data against two different API's. It also brings in an image from an API and shows an alert when the user that was searched
        for is not found, or has their game profile set to private." tech="JavaScript, Ajax, HTML, CSS" />
      </div>
      <div></div>
    </div>
    </React.Fragment>
  )
}
