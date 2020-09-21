import React from 'react';
import Project from './Project';
import SuperPC from '../images/superpc.png';
import Wildlife from '../images/wildlife.png';
import Restaurant from '../images/restaurant.png';
import Arma from '../images/arma.png';
import Woodcut from '../images/woodcut.png';
import Fade from 'react-reveal/Fade';
const MyWork = () => {
	return (
		<div style={{ backgroundColor: '#6B9075', padding: '8vh 0 20vh 0' }}>
			<div
				style={{ color: 'white', fontSize: '40px', padding: '30px 0 0 30px' }}
			>
				Here's what I can do for you
			</div>
			<div className="p-grid" style={{ margin: 0 }}>
				<div
					className="p-col-12 p-md-6"
					style={{ width: '90vw', maxWidth: '800px', margin: '0 auto' }}
				>
					<Fade>
						<Project
							title="Game Server Homepage"
							body="Built for Altis Operations. Site for users to see news and updates for a video game server. Fluid design that's easy to interact with."
							dev="Front end in React with integrated Twitter feed. Owner can update via Django Admin. Created based on customer requirements. Designed reuseable components."
							filename={Arma}
							link="https://arma-homepage-demo.herokuapp.com/"
						/>
					</Fade>
				</div>
				<div
					className="p-col-12 p-md-6"
					style={{ width: '90vw', maxWidth: '800px', margin: '0 auto' }}
				>
					<Fade>
						<Project
							title="Animal Crossing Wildlife"
							body="Personal project - Users can access game news and information quickly and easily. They can update their progress with a simple checkbox for a complication-free expereince. "
							dev="Front end in React. Saves progress using local storage. Allows sorting and filtering based on columns with Prime React UI. Pulls data from local JSON and fetches images from external API."
							filename={Wildlife}
							link="https://www.acwildlife.com"
						/>
					</Fade>
				</div>
			</div>
			<div className="p-grid" style={{ margin: 0 }}>
				<div
					className="p-col-12 p-md-6"
					style={{ width: '90vw', maxWidth: '800px', margin: '0 auto' }}
				>
					<Fade>
						<Project
							title="Sample Restaurant Site"
							body="Sample site for customers to see restaurant menu and location."
							dev="Full stack React and Django. Menu items dynamically fetched from Django REST API. Images automatically stored in AWS S3 upon upload. Google Maps integration to show location."
							filename={Restaurant}
							link="https://matt-sample-restaurant.netlify.app/"
						/>
					</Fade>
				</div>
				<div
					className="p-col-12 p-md-6"
					style={{ width: '90vw', maxWidth: '800px', margin: '0 auto' }}
				>
					{/* <Fade>
						<Project
							title="Consultancy Support Site"
							body="Business home page for a sample tech support company. Uses animations and parallax imagery for the background."
							dev="Uses animations and parallax imagery for the background. Created as a template for additional requirements. Used animation libraries and "
							filename={SuperPC}
							link="https://techsupportsite.netlify.app/"
						/>
					</Fade> */}
					<Fade>
						<Project
							title="Game Statistic Tracking"
							body="Web tool for tracking user game stats over time. Users can easily see their progress and history, as well as comparisons with others."
							dev="React front end fetches from Node API, which is linked to a MongoDB cluster.. CRON job runs each night to reset daily progress."
							filename={Woodcut}
							link="https://woodcut.info/rs3/"
						/>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default MyWork;
