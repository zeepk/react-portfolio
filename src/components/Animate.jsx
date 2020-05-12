import React from 'react';
import { motion, useViewportScroll, useAnimation } from 'framer-motion';

function Animate(props) {
	const { scrollYProgress } = useViewportScroll();
	console.log(scrollYProgress);
	const controls = useAnimation();

	const none = {};
	const variants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 100 },
	};
	function clicked() {
		controls.start('visible');
	}
	return (
		<div>
			<input type="button" onClick={clicked} />
			<motion.div
				// initial="hidden"
				animate={controls}
				variants={variants}
				// style={{ opacity: scrollYProgress }}
			>
				<span class="material-icons focus-icon">accessibility_new</span>
			</motion.div>
		</div>
	);
}

export default Animate;
