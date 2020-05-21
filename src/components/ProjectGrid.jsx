import React, { Component } from 'react';
import Project from './Project';
import Grid from '@material-ui/core/Grid';
import EMT from '../images/podcast.png';
import SuperPC from '../images/superpc.png';
import Wildlife from '../images/wildlife.png';
import Restaurant from '../images/restaurant.png';
import Arma from '../images/arma.png';
import Payments from '../images/payments.png';
import '../styles/ProjectGrid.css';
import Fade from 'react-reveal/Fade';

export default class ProjectGrid extends Component {
	render() {
		return (
			<div className="projects-container">
				<Grid className="outer-grid" justify="center" container spacing={5}>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Game Server Homepage"
								body="Site for users to see news and updates for a video game server. Fluid design that's easy to interact with."
								dev="Front end in React with integrated Twitter feed. Owner can update via Django Admin. Created based on customer requirements. Designed components of page to fit a common theme."
								filename={Arma}
								link="https://arma-homepage-demo.herokuapp.com/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Animal Crossing Wildlife"
								body="Users can access game news and information quickly and easily. They can update their progress with a simple checkbox for a complication-free expereince. "
								dev="Front end in React. Saves progress using local storage. Allows sorting and filtering based on columns with Prime React UI. Pulls data from local JSON and fetches images from external API."
								filename={Wildlife}
								link="https://www.acwildlife.com"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Sample Restaurant Site"
								body="Site for customers to see restaurant menu and location."
								dev="Full stack React and Django. Menu items dynamically fetched from Django REST API. Images automatically stored in AWS S3 upon upload. Google Maps integration to show location."
								filename={Restaurant}
								link="https://matt-sample-restaurant.netlify.app/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Podcast Landing Page"
								body="Sample landing site for information regarding an EMT podcast. Uses SVG for the background animation. Animations based on scroll and episodes called in dynamically."
								dev="Front end in React/JS. Component animations using react-reveal, play animation using vanilla JS. Created based on user requirements."
								filename={EMT}
								link="https://emtcast2.netlify.app/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Consultancy Support Site"
								body="Business home page for a sample tech support company. Uses animations and parallax imagery for the background."
								dev="Uses animations and parallax imagery for the background. Created as a template for additional requirements. Used animation libraries and "
								filename={SuperPC}
								link="https://techsupportsite.netlify.app/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Payment Manager Web App"
								body="In-progress app for users to manage payments. Payment events can be added with a recurring date."
								dev="Full stack with React and Django. User registration and auth is done with Django and React-Redux. Owner can manage users via the admin panel. "
								filename={Payments}
								link="https://payment-manager-test.herokuapp.com"
							/>
						</Fade>
					</Grid>
				</Grid>
			</div>
		);
	}
}
