import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../styles/OtherThings.css';
import ListSubheader from '@material-ui/core/ListSubheader';

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
			let date = new Date(repo.updated_at);

			return (
				<ListItem button component="a" href={repo.html_url}>
					<ListItemText
						primary={repo.name}
						secondary={`Last updated: ${date.toDateString()}`}
					/>
				</ListItem>
			);
		});
		return (
			<div className="other-things-container">
				<Grid container spacing={3}>
					<Grid className="grid-item" item xs={12} sm={4}>
						<Card className="other-card-container">
							<List className="list">
								<ListSubheader className="list-header">
									<img src={GithubIcon} className="github-icon" alt="github" />
									<h2 className="github-title">Github</h2>
								</ListSubheader>
								{sorted_github_data}
							</List>
						</Card>
					</Grid>
					<Grid className="grid-item" item xs={12} sm={4}></Grid>
					<Grid className="grid-item" item xs={12} sm={4}></Grid>
				</Grid>
			</div>
		);
	}
}
