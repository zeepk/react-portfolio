import React, { Component } from 'react';
import '../styles/Header.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class Header extends Component {
	render() {
		return (
			<div>
				<AppBar className="appbar" position="static">
					<Tabs value={0} centered aria-label="simple tabs example">
						<Tab label="About" />
						<Tab label="Projects" />
						<Tab label="Contact" />
					</Tabs>
				</AppBar>
			</div>
		);
	}
}
