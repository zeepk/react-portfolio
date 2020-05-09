import React, { Component } from 'react';
import '../styles/Container.css';
import Project from './Project';
import Grid from '@material-ui/core/Grid';
import EMT from '../images/podcast.png';
import SuperPC from '../images/superpc.png';
import Wildlife from '../images/wildlife.png';
import Woodcut from '../images/woodcut2.png';
import Arma from '../images/arma.png';
import Payments from '../images/payments.png';

import About from './About';
import Form from './Form';
class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { arrow: 0.2, didScroll: false };
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		if (currentScrollPos < 300 && !this.state.didScroll) {
			this.setState({
				arrow: 1 / currentScrollPos,
			});
		} else {
			this.setState({
				arrow: 0,
				didScroll: true,
			});
		}
		console.log(currentScrollPos);
	};

	render() {
		return (
			<div className="container">
				{/* <Header /> */}
				<About />
				<svg className="blinker" style={{ opacity: this.state.arrow }}>
					<line className="line1" x1="40%" y1="30%" x2="50%" y2="50%" />
					<line className="line1" x1="50%" y1="50%" x2="60%" y2="30%" />
				</svg>
				<div className="projects-container">
					<Grid container spacing={3}>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Game Server Homepage"
								body="Site for users to see news and updates for a video game server. Owner can update via Django Admin."
								filename={Arma}
								link="https://arma-homepage-demo.herokuapp.com/"
							/>
						</Grid>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Animal Crossing Wildlife"
								body="Front End site for gamers to track achievements and see wildlife information. Saves progress using local storage."
								filename={Wildlife}
								link="https://www.acwildlife.com"
							/>
						</Grid>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Podcast Landing Page"
								body="Landing site for information regarding an EMT podcast. Uses SVG for the background animation."
								filename={EMT}
								link="https://emtcast2.netlify.app/"
							/>
						</Grid>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Consultancy Support Site"
								body="Business home page for a sample tech support company. Uses animations and parallax imagery for the background."
								filename={SuperPC}
								link="https://techsupportsite.netlify.app/"
							/>
						</Grid>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Payment Manager Web App"
								body="In-progress app for users to manage payments. User registration and auth is done with Django and React-Redux."
								filename={Payments}
								link="https://payment-manager-test.herokuapp.com"
							/>
						</Grid>
						<Grid className="project-grid-item" item xs={12} sm={6}>
							<Project
								title="Hiscore Tracker"
								body="Site that pulls user data and profile image from an external API based on user search. Organizes data on front end to display."
								filename={Woodcut}
								link="https://woodcut.info/rs3/zee_pk"
							/>
						</Grid>
					</Grid>
				</div>
				<Form />
			</div>
		);
	}
}

export default Container;
