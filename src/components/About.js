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
						style={{
							maxHeight: '50vh',
							margin: '0 auto',
							padding: '20px',
							width: '90%',
							maxWidth: '30rem',
						}}
					/>
				</Fade>
			</div>
			<div
				className="p-col-12 p-md-6 p-pl-3"
				style={{ backgroundColor: '#295135' }}
			>
				<div
					style={{
						color: 'white',
						fontSize: '1.5em',
						width: '90vw',
						maxWidth: '100%',
						margin: '10vh auto 0 auto',
					}}
				>
					<span className="gif-text">matt hughes.</span>
					<p>
						Hi{' '}
						<span role="img" aria-label="waving hand">
							👋
						</span>{' '}
						<div>
							I'm a full stack web developer with industry experience using
							tools like
						</div>
						<div style={{ margin: '1rem 0' }}>
							JavaScript // React // Vue // Python // Django // CSharp // .NET
						</div>
						<div>
							As a developer, I have a passion for solving problems with
							creative solutions.
						</div>
					</p>
					<p>Let me help you solve yours!</p>
				</div>
			</div>
		</div>
	);
};

export default About;
