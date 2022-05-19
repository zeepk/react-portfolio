import React from 'react';
import Project from './Project';
import Wildlife from '../images/wildlife.png';
import Woodcut from '../images/woodcut3.png';
import Fade from 'react-reveal/Fade';
const MyWork = () => {
	return (
		<div style={{ backgroundColor: '#6B9075', padding: '8vh 0 20vh 0' }}>
			<div
				style={{ color: 'white', fontSize: '40px', padding: '30px 0 0 30px' }}
			>
				Here's a couple of my favorite side projects
			</div>
			<div className="p-grid" style={{ margin: 0 }}>
				<div
					className="p-col-12 p-md-6"
					style={{ width: '90vw', maxWidth: '800px', margin: '0 auto' }}
				>
					<Fade>
						<Project
							title="Game Statistic Tracking"
							body="Web tool for tracking user game stats over time. Users can create an account, and easily see their progress and history, as well as comparisons with others."
							dev="React front end fetches from .NET 5 API with Authentication, which is linked to an Azure SQL instance. CRON job runs each night to reset daily progress."
							filename={Woodcut}
							link="https://woodcut.info"
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
							body="Web app tracker to accompany a popular video game. Allows users to check off achievements and add their friends to see their progress as well. Creating an account is as simple as singing in with Google."
							dev="TypeScript React front end connects to TypeScript NodeJS back end and MongoDB store. Saves progress to database. Cron job keeps data current in case of game updates. Friend request system with search, additions, deletions, and viewing other friends' achievements."
							filename={Wildlife}
							link="https://www.acwildlife.com"
						/>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default MyWork;
