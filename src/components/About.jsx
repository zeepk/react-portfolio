import React, { Component } from 'react';
import '../styles/About.css';
import Fab from '@material-ui/core/Fab';
class About extends Component {
	render() {
		return (
			<div className="about-container">
				<div className="about-text-container">
					<h2>Hello! I'm Matt Hughes</h2>
					<p className="about-text">
						I'm an enthusiastic, customer-focused full stack developer.
					</p>
					<p className="about-text">
						My goal with every project is user experience perfection.
					</p>
					<p className="about-text">
						This portfolio is my way if showing what I can do for you and your
						team.
					</p>
				</div>
				<div className="buttons-container">
					<Fab
						className="button"
						variant="extended"
						onClick={this.props.projectScroll}
					>
						Projects
					</Fab>
					<Fab variant="extended" onClick={this.props.projectScroll}>
						Contact
					</Fab>
				</div>
			</div>
		);
	}
}

export default About;
