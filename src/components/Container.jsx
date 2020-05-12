import React, { Component } from 'react';
import '../styles/Container.css';
import About from './About';
import ProjectGrid from './ProjectGrid';
import Focus from './Focus';
import OtherThings from './OtherThings';
import { motion } from 'framer-motion';

class Container extends Component {
	render() {
		const variants = {
			hidden: { opacity: 0, x: -100 },
			visible: { opacity: 1, x: 0 },
		};

		return (
			<div className="container">
				<div class="background-container"></div>
				<div class="stars"></div>
				<div class="clouds"></div>
				<motion.div initial="hidden" animate="visible" variants={variants}>
					<About />
				</motion.div>
				<div className="blinker">
					<p className="bottom-text">Check it out</p>
					<svg className="blinker" style={{ opacity: 1 }}>
						<line className="line1" x1="40%" y1="30%" x2="50%" y2="50%" />
						<line className="line1" x1="50%" y1="50%" x2="60%" y2="30%" />
					</svg>
				</div>
				<Focus />
				<ProjectGrid />
				<OtherThings />
			</div>
		);
	}
}

export default Container;
