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
		// console.log(currentScrollPos);
	};

	render() {
		return (
			<div className="container">
				<div class="background-container"></div>
				<div class="clouds"></div>
				<Fade>
					<About />
				</Fade>
				<svg className="blinker" style={{ opacity: this.state.arrow }}>
					<line className="line1" x1="40%" y1="30%" x2="50%" y2="50%" />
					<line className="line1" x1="50%" y1="50%" x2="60%" y2="30%" />
				</svg>
				<Focus />
				<ProjectGrid />
				<OtherThings />
			</div>
		);
	}
}

export default Container;
