import React from 'react';
import Container from './v2components/Container';
import ReactGA from 'react-ga';
import 'primeflex/primeflex.css';
import Fade from 'react-reveal/Fade';

function initializeReactGA() {
	ReactGA.initialize('UA-160538981-1');
	ReactGA.pageview('/homepage');
}
initializeReactGA();

function App() {
	return (
		<div className="App">
			<Fade>
				<Container />
			</Fade>
		</div>
	);
}

export default App;
