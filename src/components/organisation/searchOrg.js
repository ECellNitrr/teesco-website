import React, { Component, Fragment } from 'react';
//Material UI imports
import {
	Grid,
	TextField,
	Card,
	Typography,
	InputAdornment,
	IconButton,
	Box,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';

//Error Component
import Error from '../Widgets/Error/Error';

import { initialStateData } from './searchOrg.stories';

//Basic styles
const classes = {
	root: {
		margin: '10px 0px',
	},
	search_bar: {
		width: '400px',
	},
	card: {
		margin: '10px',
		width: '400px',
		padding: '10px',
	},
	circle: {
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

	//Initial State UI which renders organisation or search results
	initialStateUi = (organisations) => {
		return (
			<Fragment>
				{organisations.map((org) => (
					<Card style={classes.card} key={org.org_id}>
						<Grid container direction='row' spacing={2}>
							<Grid item>
								<Box
									bgcolor='text.disabled'
									borderRadius='50%'
									style={classes.circle}
								/>
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

	//Loading State UI with skeleton
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
		//If no organisations was passed then render error component
		if (organisations.length === 0 && !loading) {
			const stateData = {
				error: 'No Organisation to display',
				width: '50%',
				direction: 'column',
				iconSize: 40,
			};
			return <Error stateData={stateData} />;
		}

		return (
			<Grid container direction='column' alignItems='center'>
				<Grid item>
					<Typography variant='h3'>Join an Organisation</Typography>
				</Grid>
				<Grid item style={classes.root}>
					<TextField
						label='Search Organisation'
						type='text'
						name='search_bar'
						onChange={this.inputChangeHandler}
						value={this.state.search_value}
						style={classes.search_bar}
						variant='outlined'
						InputProps={{
							startAdornment: (
								<InputAdornment>
									<IconButton>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
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
