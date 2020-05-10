import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../styles/OtherThings.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import Python from '../images/python.png';
import JS from '../images/js.png';
import HTML from '../images/html5.png';
import Twitch from '../images/twitch.gif';

import GithubIcon from '../images/github.png';

export default class OtherThings extends Component {
	constructor(props) {
		super(props);
		this.state = { githubData: [] };
	}
	componentWillMount() {
		fetch('https://api.github.com/users/zeepk/repos', {
			headers: {
				Authorization: '8ecf1ab2ae445bc4abe3e7404b2c89bb8120fed8',
			},
		})
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					githubData: data,
				})
			);
	}
	render() {
		const github_data = this.state.githubData.sort((a, b) =>
			a.updated_at < b.updated_at ? 1 : -1
		);
		const sorted_github_data = github_data.map((repo) => {
			const date = new Date(repo.updated_at);
			let icon = repo.language;
			if (repo.language === 'JavaScript') {
				icon = <img src={JS} className="github-icon" alt="javascript" />;
			} else if (repo.language === 'Python' || repo.language === 'Tcl') {
				icon = <img src={Python} className="github-icon" alt="python" />;
			} else if (repo.language === 'HTML' || repo.language === 'CSS') {
				icon = <img src={HTML} className="github-icon" alt="html" />;
			}
			return (
				<ListItem button component="a" href={repo.html_url} target="_blank">
					<ListItemText
						primary={repo.name}
						secondary={`Last updated: ${date.toDateString()}`}
					/>
					{icon}
				</ListItem>
			);
		});
		return (
			<div className="other-things-container">
				<Grid container spacing={3}>
					<Grid className="grid-item" item xs={12} sm={4}>
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
					</Grid>
					<Grid className="grid-item" item xs={12} sm={8}>
						<Card className="other-card-container">
							<div className="twitch-clip">
								<img src={Twitch} className="twitch-gif" alt="twitch clip" />
							</div>
						</Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}
