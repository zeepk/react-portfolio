import React from 'react';
import Container from './components/Container.jsx';
import ReactGA from 'react-ga';

function initializeReactGA() {
	ReactGA.initialize('UA-160538981-1');
	ReactGA.pageview('/homepage');
}
initializeReactGA();

function App() {
	return (
		<div className="App">
			<Container />
		</div>
	);
}

export default App;
