import React from 'react';
import Project from './project';
// import ProjectReverse from "./projectReverse";
import './projects.css';
import Fade from 'react-reveal/Fade';
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
					<Fade left>
						<Project
							title="Game Server Webpage"
							image_source={require('../../images/arma.PNG')}
							image_path="https://arma-homepage-demo.herokuapp.com/"
							description="A project I created as a landing page for a game server. The client provided a layout that I was able to replicate. I worked with the client throughout the process to deliver a product that exceeds expectations. The site itself is built with a React front end and a Django back end. It uses Django REST Framework to communicate between the front and back. Redux is used to maintain state for the application and store images. The application is currently hosted on Heroku. The site administrator can use the Django Admin page to add Patch Notes and other text entries to display on the front end."
							tech="React + Redux, Django + DRF, JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>
				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="Woodcut"
							image_source={require('../../images/woodcut.PNG')}
							image_path="https://woodcut.info/rs3/zee_pk"
							description="This is a project I currently maintain for a video game. It is a high score checking web 
        application that checks user entered data against multiple API's. React Router is used for navigation across many pages. The page knows when a username searched for does not exist and 
        depopulates the affected tables. The returned data is organized into JavaScript objects and sorted to be rendered. It also brings in an image from an API."
							tech="React, JavaScript, Ajax, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>

				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="Podcast Site"
							image_source={require('../../images/emtcast.png')}
							image_path="https://emtcast2.netlify.com/"
							description="A site I made to host an EMT podcast for a friend of mine. It uses smooth scrolling to get from the home page to the about section and finally down to the episodes list. This also incorporates a couple different types of animations."
							tech="React, JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>
				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="In Progress: Payment Manager"
							image_source={require('../../images/payments.PNG')}
							image_path="https://payment-manager-test.herokuapp.com"
							description="A project I created while learning Redux and Authentication. It simply allows the user to register and login/logout. They can add events to their account and then see them again when they revisit the site and login."
							tech="React + Redux, Django + DRF, JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>
				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="Tech Support Site"
							image_source={require('../../images/superpc.png')}
							image_path="https://techsupportsite.netlify.com/"
							description="This is a template site I created to serve as a foundation for a tech support company website."
							tech="React, JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>

				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="Ascii Checker"
							image_source={require('../../images/ascii.PNG')}
							image_path="https://asciichecker.netlify.com/"
							description="A site I created to quickly display the Ascii value of any character entered on the keyboard. The function reads the keypress event from the keyboard and changes the site to display the corresponding Ascii value."
							tech="JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>

				<div></div>
				<div className="projects-grid-item">
					<Fade left>
						<Project
							title="Password Generator"
							image_source={require('../../images/genpass.png')}
							image_path="https://genpass.netlify.com/"
							description="A password generator that allows the user to specify parameters such as character length, including upper/lower case letters, or including numbers and symbols. Based on a tutorial."
							tech="JavaScript, HTML, CSS"
						/>
					</Fade>
					<br></br>
				</div>
				<div></div>
			</div>
		</React.Fragment>
	);
}
