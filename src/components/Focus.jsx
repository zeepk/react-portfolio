import React, { Component } from 'react';
import '../styles/Focus.css';
import Grid from '@material-ui/core/Grid';
import Me from '../images/me.jpg';
import Animate from './Animate';
import { motion, useViewportScroll, useAnimation } from 'framer-motion';

export default class Focus extends Component {
	render() {
		const { scrollYProgress } = useViewportScroll();
		console.log(scrollYProgress);
		// const { controls } = useAnimation();

		const none = {};
		const variants = {
			hidden: { opacity: 0, x: -100 },
			visible: { opacity: 1, x: 0 },
		};

		return (
			<div className="focus-container">
				<Animate />
				<Grid container spacing={3}>
					<Grid className="grid-item" item xs={6} sm={6}>
						<img src={Me} alt="Matt Hughes" className="me-image" />
					</Grid>
					<Grid className="grid-item" item xs={6} sm={6}>
						<Grid container spacing={3}>
							<Grid className="grid-item" item xs={6} sm={6}>
								<motion.div
									initial="hidden"
									animate="visible"
									variants={variants}
									// style={{ opacity: scrollYProgress }}
								>
									<span class="material-icons focus-icon">
										accessibility_new
									</span>
								</motion.div>

								<h1 className="focus-title">Easy to Use</h1>
								<div className="focus-text">
									The sites I build are intuitive, never leaving guesswork to
									the customer
								</div>
							</Grid>
							<Grid className="grid-item" item xs={6} sm={6}>
								<span class="material-icons focus-icon">extension</span>
								<h1 className="focus-title">Feature Rich</h1>
								<div className="focus-text">
									The customers will be impressed with what they can accomplish
									with just one website
								</div>
							</Grid>
							<Grid className="grid-item" item xs={6} sm={6}>
								<span class="material-icons focus-icon">view_carousel</span>
								<h1 className="focus-title">Simplistic</h1>
								<div className="focus-text">
									I use simple, yet memorable designs that offer relaxed color
									schemes
								</div>
							</Grid>
							<Grid className="grid-item" item xs={6} sm={6}>
								<span class="material-icons focus-icon">access_time</span>
								<h1 className="focus-title">Efficient</h1>
								<div className="focus-text">
									My build process is no-nonsense and products are always
									delivered in a timely manner
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
