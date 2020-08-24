import React from 'react';
import Fade from 'react-reveal/Fade';
import Clip from '../images/twitch-clip.mp4';
import Toolbox from '../images/toolbox.png';
import Python from '../images/python.png';
import JS from '../images/js.png';

const Process = () => {
	return (
		<div className="p-grid" style={{ margin: 0, minHeight: '80vh' }}>
			<div
				className="p-col-12 p-md-6"
				style={{
					backgroundColor: '#4e4e4e',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Fade>
					<video
						style={{ width: '90vw', maxWidth: '700px' }}
						src={Clip}
						className="twitch-clip"
						controls
						autoPlay
						loop
						muted
					></video>
				</Fade>
			</div>
			<div className="p-col-12 p-md-6" style={{ backgroundColor: '#818181' }}>
				<div
					style={{
						color: 'white',
						fontSize: '1.5vw',
						width: '90vw',
						maxWidth: '600px',
						margin: '20vh auto 0 auto',
					}}
				>
					<div className="p-grid">
						<div className="p-col-6 p-lg-3">
							<img
								src={JS}
								alt="javascript"
								style={{ width: '20vw', maxWidth: '100px' }}
							/>
						</div>
						<div className="p-col-6 p-lg-3">
							<img
								src={Python}
								alt="python"
								style={{ width: '20vw', maxWidth: '100px' }}
							/>
						</div>
						<div className="p-col-6 p-lg-3">
							<img
								src={JS}
								alt="javascript"
								style={{ width: '20vw', maxWidth: '100px' }}
							/>
						</div>
						<div className="p-col-6 p-lg-3">
							<img
								src={Python}
								alt="python"
								style={{ width: '20vw', maxWidth: '100px' }}
							/>
						</div>
					</div>
					<div style={{ display: 'flex', alignContent: 'center' }}>
						<img
							src={Toolbox}
							alt="toolbox"
							style={{
								width: '30vw',
								maxWidth: '300px',
								margin: '60px auto 0 auto',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
