import React from 'react';
import Fade from 'react-reveal/Fade';
import Me from '../images/me.jpg';

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
						style={{ maxHeight: '50vh', margin: '0 auto' }}
					/>
				</Fade>
			</div>
			<div className="p-col-12 p-md-6" style={{ backgroundColor: '#295135' }}>
				<div
					style={{
						color: 'white',
						fontSize: '1.5vw',
						width: '90vw',
						maxWidth: '600px',
						margin: '15vh auto 0 auto',
					}}
				>
					<p>Hey there! My name is Matt Hughes.</p>
					<p>
						I am a full stack developer with industry experience creating web
						apps and websites with tools like JavaScript, React, Python, and
						Django. As a developer, I have a passion for solving problems with
						creative solutions.
					</p>
					<p>Let me help you solve yours!</p>
				</div>
			</div>
		</div>
	);
};

export default About;
