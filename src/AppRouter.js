import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import Uses from './components/Uses';

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Container />
					</Route>
					<Route exact path="/uses">
						<Uses />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
