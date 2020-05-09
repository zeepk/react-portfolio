import React from 'react';
import '../styles/Project.css';
function Project(props) {
	const style = {
		border: '1px solid red',
	};
	const imageStyle = {
		maxWidth: '100%',
	};
	return (
		<div className="project-container" style={style}>
			<a
				href={props.link}
				className="project-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={props.filename}
					alt="project"
					className="project-image"
					style={imageStyle}
				/>
				<div className="hover-content">
					<div className="hover-text">
						{props.title}
						<div className="hover-body">{props.body}</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Project;
