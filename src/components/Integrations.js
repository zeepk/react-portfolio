import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Form from './Form';
import Card from '@material-ui/core/Card';
import GithubIcon from '../images/github.png';
import Python from '../images/python.png';
import JS from '../images/js.png';
import HTML from '../images/html5.png';
import Vue from '../images/vue.png';
import Electron from '../images/electron.png';
import TypeScript from '../images/ts.png';
import Dotnet from '../images/dotnet.svg';

const githubApiKey = process.env.REACT_APP_GITHUB_API_KEY;

const Integrations = () => {
	const [githubData, setGithubData] = useState([]);
	useEffect(() => {
		fetch('https://api.github.com/users/zeepk/repos?per_page=100', {
			headers: {
				Authorization: githubApiKey,
			},
		})
			.then((response) => response.json())
			.then((data) => setGithubData(data));
	}, []);
	const github_data = githubData.sort((a, b) =>
		a.pushed_at < b.pushed_at ? 1 : -1,
	);
	const sorted_github_data = github_data.map((repo) => {
		const date = new Date(repo.pushed_at);
		const today = new Date();
		const days = Math.floor((today - date) / 86400000);
		const daysText = (days) => {
			if (days === 0) {
				return 'Last updated today';
			}
			if (days === 1) {
				return 'Last updated yesterday';
			}
			if (days > 365 * 2) {
				const years = Math.floor(days / 365);
				return `Last updated over ${years} years ago`;
			}
			if (days > 365) {
				return 'Last updated over a year ago';
			}
			return `Last updated ${days} days ago`;
		};
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
		} else if (repo.language === 'C#') {
			icon = (
				<img
					src={Dotnet}
					className="dotnet-icon"
					alt="dotnet"
					title="Dotnet"
					style={{ maxWidth: '3rem' }}
				/>
			);
		} else if (repo.language === 'TypeScript') {
			icon = (
				<img
					src={TypeScript}
					className="ts-icon"
					alt="typescript"
					title="TypeScript"
				/>
			);
		} else if (repo.language === 'Java') {
			icon = (
				<span className="material-icons mobile-icon" title="iOS/Android">
					phone_iphone
				</span>
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
				<ListItemText primary={repo.name} secondary={daysText(days)} />
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
