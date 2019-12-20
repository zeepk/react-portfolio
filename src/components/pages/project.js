import React, { Component } from "react";
import "./projects.css";

export default class project extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project-grid">
          <div className="project-grid-item">
            <a
              href={this.props.image_path}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="project-image"
                src={this.props.image_source}
                alt="screenshot from project"
              />
            </a>
          </div>
          <div className="Project-grid-item">
            <a
              href={this.props.image_path}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1>{this.props.title}</h1>
            </a>
            <p>{this.props.description}</p>
            <br />
            <p>Technologies used: {this.props.tech}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
