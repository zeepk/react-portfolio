import React, { Component } from 'react';
import '../styles/Container.css';
import About from './About';
import ProjectGrid from './ProjectGrid';
import Focus from './Focus';
import OtherThings from './OtherThings';
import Fade from 'react-reveal/Fade';

class Container extends Component {
	constructor(props) {
		super(props);
		//creates a reference for your element to use
		this.projectRef = React.createRef();
		this.contactRef = React.createRef();
	}

	handleOnClick = (event) => {
		console.log(event.currentTarget.innerText);

		if (event.currentTarget.innerText === 'PROJECTS') {
			this.projectRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		} else if (event.currentTarget.innerText === 'CONTACT') {
			this.contactRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	};
	render() {
		return (
			<div className="container">
				<div class="background-container"></div>
				<div class="clouds"></div>
				<div class="stars"></div>
				{/* <Fade> */}
				<About projectScroll={this.handleOnClick} />
				{/* </Fade> */}
				{/* <svg className="blinker" style={{ opacity: this.state.arrow }}>
					<line className="line1" x1="40%" y1="30%" x2="50%" y2="50%" />
					<line className="line1" x1="50%" y1="50%" x2="60%" y2="30%" />
				</svg> */}
				<Focus />
				<div ref={this.projectRef}>
					<div className="project-grid-title">
						<h1 className="project-grid-title-text">Here are some examples</h1>
					</div>
					<ProjectGrid />
				</div>
				<div ref={this.contactRef}>
					<Fade>
						<OtherThings />
					</Fade>
				</div>
			</div>
		);
	}
}

export default Container;
