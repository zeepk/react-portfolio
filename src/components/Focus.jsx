import React, { Component } from 'react';
import '../styles/Focus.css';
import Grid from '@material-ui/core/Grid';

export default class Focus extends Component {
	render() {
		return (
			<div className="focus-container">
				<Grid container spacing={3}>
					<Grid className="grid-item" item xs={6} sm={3}>
						<span class="material-icons focus-icon">accessibility_new</span>
						<h1 className="focus-title">Easy to Use</h1>
						<div className="focus-text">
							The sites I build are intuitive, never leaving guesswork to the
							customer
						</div>
					</Grid>
					<Grid className="grid-item" item xs={6} sm={3}>
						<span class="material-icons focus-icon">extension</span>
						<h1 className="focus-title">Feature Rich</h1>
						<div className="focus-text">
							The customers will be impressed with what they can accomplish with
							just one website
						</div>
					</Grid>
					<Grid className="grid-item" item xs={6} sm={3}>
						<span class="material-icons focus-icon">view_carousel</span>
						<h1 className="focus-title">Simplistic</h1>
						<div className="focus-text">
							I use simple, yet memorable designs that offer relaxed color
							schemes
						</div>
					</Grid>
					<Grid className="grid-item" item xs={6} sm={3}>
						<span class="material-icons focus-icon">access_time</span>
						<h1 className="focus-title">Efficient</h1>
						<div className="focus-text">
							My build process is no-nonsense and products are always delivered
							in a timely manner
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
