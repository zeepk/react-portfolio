import React from 'react';
import About from './About';
import MyWork from './MyWork';
import Process from './Process';
import Integrations from './Integrations';
import Footer from './Footer';
const Container = () => {
	return (
		<div>
			<About />
			<MyWork />
			<Process />
			<Integrations />
			<Footer />
		</div>
	);
};

export default Container;
