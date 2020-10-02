import React from 'react';
import ReactGA from 'react-ga';
import 'primeflex/primeflex.css';
import Fade from 'react-reveal/Fade';
import AppRouter from './AppRouter';
console.info(
	"%c👋 Hi there! You must know your way around if you're seeing this! My portfolio uses React for rendering/organization and PrimeReact for UI elements. Feel free to poke around! Here's the code: https://www.github.com/zeepk/react-portfolio ",
	'background: #292b4a; color: white; font-size: medium'
);

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
				<AppRouter />
			</Fade>
		</div>
	);
}

export default App;
