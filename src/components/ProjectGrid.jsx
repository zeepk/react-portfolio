import React, { Component } from 'react';
import Project from './Project';
import Grid from '@material-ui/core/Grid';
import EMT from '../images/podcast.png';
import SuperPC from '../images/superpc.png';
import Wildlife from '../images/wildlife.png';
import Woodcut from '../images/woodcut2.png';
import Arma from '../images/arma.png';
import Payments from '../images/payments.png';
import '../styles/ProjectGrid.css';
import Fade from 'react-reveal/Fade';

export default class ProjectGrid extends Component {
	render() {
		return (
			<div className="projects-container">
				<h1 className="project-grid-title">Here are some examples</h1>
				<Grid className="outer-grid" container spacing={3}>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Game Server Homepage"
								body="Site for users to see news and updates for a video game server. Owner can update via Django Admin. Created based on user requirements. Designed components of page to fit a common theme."
								filename={Arma}
								link="https://arma-homepage-demo.herokuapp.com/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Animal Crossing Wildlife"
								body="Front End site for gamers to track achievements and see wildlife information. Saves progress using local storage. Allows sorting and filtering based on columns."
								filename={Wildlife}
								link="https://www.acwildlife.com"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Podcast Landing Page"
								body="Landing site for information regarding an EMT podcast. Uses SVG for the background animation. Animations based on scroll and episodes called in dynamically."
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
								filename={SuperPC}
								link="https://techsupportsite.netlify.app/"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Payment Manager Web App"
								body="In-progress app for users to manage payments. User registration and auth is done with Django and React-Redux."
								filename={Payments}
								link="https://payment-manager-test.herokuapp.com"
							/>
						</Fade>
					</Grid>
					<Grid className="project-grid-item" item xs={12} sm={6}>
						<Fade top>
							<Project
								title="Hiscore Tracker"
								body="Site that pulls user data and profile image from an external API based on user search. Organizes data on front end to display."
								filename={Woodcut}
								link="https://woodcut.info/rs3/zee_pk"
							/>
						</Fade>
					</Grid>
				</Grid>
			</div>
		);
	}
}
