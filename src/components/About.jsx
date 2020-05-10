import React, { Component } from 'react';
import '../styles/About.css';
import Grid from '@material-ui/core/Grid';
import Me from '../images/me.jpg';
class About extends Component {
	render() {
		return (
			<div className="about-container">
				<Grid container spacing={3}>
					<Grid className="grid-item grid-text" item xs={12} sm={6}>
						<div className="about-text-container">
							<h2>Hello! I'm Matt Hughes</h2>
							<p className="about-text">
								I'm an enthusiastic, customer-focused full stack developer.
							</p>
							<p className="about-text">
								My goal with every project is user experience perfection.
							</p>
							<p className="about-text">
								This portfolio is my way if showing what I can do for you and
								your team.
							</p>
						</div>
					</Grid>
					<Grid className="grid-item" item xs={12} sm={6}>
						<img src={Me} alt="Matt Hughes" className="me-image" />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
