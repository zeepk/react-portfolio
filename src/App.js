import React from 'react';
import Container from './v2components/Container';
import ReactGA from 'react-ga';
import 'primeflex/primeflex.css';
import Fade from 'react-reveal/Fade';
// https://coolors.co/0e402d-295135-6b9075-e3dfff-731963
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
