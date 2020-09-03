import React from 'react';
import Fade from 'react-reveal/Fade';
import Me from '../images/me2.jpg';

const About = () => {
	return (
		<div className="p-grid" style={{ margin: 0, minHeight: '70vh' }}>
			<div
				className="p-col-12 p-md-6"
				style={{
					backgroundColor: '#0E402D',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Fade>
					<img
						src={Me}
						alt="Matt Hughes"
						style={{ maxHeight: '50vh', margin: '0 auto', padding: '20px' }}
					/>
				</Fade>
			</div>
			<div className="p-col-12 p-md-6" style={{ backgroundColor: '#295135' }}>
				<div
					style={{
						color: 'white',
						fontSize: '1.5em',
						width: '90vw',
						maxWidth: '600px',
						margin: '10vh auto 0 auto',
					}}
				>
					<span className="gif-text">matt hughes.</span>
					<p>
						Hi{' '}
						<span role="img" aria-label="waving hand">
							👋
						</span>{' '}
						I'm a full stack web developer with industry experience using tools
						like JavaScript, React, Python, and Django. As a developer, I have a
						passion for solving problems with creative solutions.
					</p>
					<p>Let me help you solve yours!</p>
				</div>
			</div>
		</div>
	);
};

export default About;
