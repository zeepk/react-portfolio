import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Form from './Form';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import GithubIcon from '../images/github.png';
import Python from '../images/python.png';
import JS from '../images/js.png';
import HTML from '../images/html5.png';
import Vue from '../images/vue.png';
import Svelte from '../images/svelte.png';
import Electron from '../images/electron.png';
const Integrations = () => {
	const [githubData, setGithubData] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/zeepk/repos?per_page=100', {
			headers: {
				Authorization: '8ecf1ab2ae445bc4abe3e7404b2c89bb8120fed8',
			},
		})
			.then((response) => response.json())
			.then((data) => setGithubData(data));
	}, []);
	const github_data = githubData.sort((a, b) =>
		a.updated_at < b.updated_at ? 1 : -1
	);
	const sorted_github_data = github_data.map((repo) => {
		const date = new Date(repo.updated_at);
		let icon = repo.language;
		if (
			repo.name === 'image-shrinker' ||
			repo.name === 'cpu-monitor' ||
			repo.name === 'monitor' ||
			repo.name === 'cloud-logging'
		) {
			icon = (
				<img
					src={Electron}
					className="github-icon"
					alt="electron"
					title="Electron"
				/>
			);
		} else if (repo.language === 'JavaScript') {
			icon = (
				<img
					src={JS}
					className="github-icon"
					alt="javascript"
					title="JavaScript/React"
				/>
			);
		} else if (repo.language === 'Python' || repo.language === 'Tcl') {
			icon = (
				<img
					src={Python}
					className="github-icon"
					alt="python"
					title="Python 🐍"
				/>
			);
		} else if (repo.language === 'HTML' || repo.language === 'CSS') {
			icon = <img src={HTML} className="github-icon" alt="html" title="HTML" />;
		} else if (repo.language === 'Vue') {
			icon = <img src={Vue} className="github-icon" alt="vue" title="Vue" />;
		} else if (repo.language === 'Java') {
			icon = (
				<span className="material-icons mobile-icon" title="iOS/Android">
					phone_iphone
				</span>
			);
		} else if (!repo.language) {
			icon = (
				<img src={Svelte} className="github-icon" alt="svelte" title="Svelte" />
			);
		} else {
			icon = <p>{repo.language}</p>;
		}

		return (
			<ListItem
				button
				component="a"
				href={repo.html_url}
				target="_blank"
				key={repo.html_url}
			>
				<ListItemText
					primary={repo.name}
					secondary={`Last updated: ${date.toDateString()}`}
				/>
				{icon}
			</ListItem>
		);
	});
	return (
		<div
			className="p-grid"
			style={{
				margin: 0,
				minHeight: '60vh',
				backgroundColor: '#93B09B',
				padding: '10vh 0 5vh 0',
			}}
		>
			<div
				className="p-col-12 p-md-6"
				style={{ margin: '0 auto', maxWidth: '600px' }}
			>
				<Card className="other-card-container">
					<List className="list">
						<ListSubheader
							className="list-header"
							component="a"
							href="https://www.github.com/zeepk"
							target="_blank"
						>
							<img src={GithubIcon} className="github-icon" alt="github" />
							<h2 className="github-title">Github</h2>
						</ListSubheader>
						{sorted_github_data}
					</List>
				</Card>
			</div>

			<div
				className="p-col-12 p-md-6"
				style={{ margin: '0 auto', maxWidth: '600px' }}
			>
				<Form />
			</div>
		</div>
	);
};

export default Integrations;
