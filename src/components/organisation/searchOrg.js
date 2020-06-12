import React, { Component, Fragment } from 'react';

import { Grid, TextField, Card, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import Error from '../Widgets/Error/Error';

import { initialStateData } from './searchOrg.stories';

const classes = {
	root: {
		margin: '10px 0px',
	},
	search_bar: {
		width: '300px',
	},
	card: {
		margin: '10px',
		width: '400px',
		padding: '10px',
	},
	circle: {
		borderRadius: '30px 30px 30px 30px',
		width: '50px',
		height: '50px',
	},
};

export default class SearchOrg extends Component {
	constructor(props) {
		super(props);
		// initial state comes from storybook else provide the default initial state
		this.state = props.stateData ? props.stateData : initialStateData;
	}

	inputChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	initialStateUi = (organisations) => {
		return (
			<Fragment>
				{organisations.map((org) => (
					<Card style={classes.card}>
						<Grid container direction='row' spacing={2}>
							<Grid item>
								<div style={classes.circle}></div>
							</Grid>
							<Grid item>
								<Grid container direction='column'>
									<Grid item>
										<Typography variant='h5'>
											{org.org_name}
										</Typography>
									</Grid>
									<Grid item>
										<Typography>{org.org_desc}</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Card>
				))}
			</Fragment>
		);
	};

	loadingStateUi = () => {
		return Array(6)
			.fill(null)
			.map((loadTile) => (
				<Skeleton
					style={{ marginBottom: '20px' }}
					variant='wave'
					height={60}
					width={400}
				/>
			));
	};

	render() {
		const { loading, organisations, search } = this.state;

		if (organisations.length === 0 && !loading) {
			return <Error />;
		}

		return (
			<Grid container direction='column' alignItems='center'>
				<Grid item style={classes.root}>
					<TextField
						label='Search'
						type='text'
						name='search'
						onChange={this.inputChangeHandler}
						value={this.state.search_value}
						style={classes.search_bar}
						variant='outlined'
					/>
				</Grid>
				<Grid item style={classes.root}>
					{loading
						? this.loadingStateUi()
						: search.length === 0
						? this.initialStateUi(organisations)
						: this.initialStateUi(search)}
				</Grid>
			</Grid>
		);
	}
}
