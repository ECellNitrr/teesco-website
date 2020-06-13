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
	Button,
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

const stateData = {
	error: 'No Organisations Found',
	width: '70%',
	direction: 'column',
	iconSize: 30,
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
										<Typography component='div'>
											<Box fontStyle='italic'>
												{`"
												${org.org_desc.length > 30 ? org.org_desc.substring(0, 30) : org.org_desc}"`}
											</Box>
										</Typography>
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
		const {
			loading,
			organisations,
			search,
			search_value,
			search_flag,
		} = this.state;
		//If no organisations was passed then render error component
		if (organisations.length === 0 && !loading) {
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
						name='search_value'
						onChange={this.inputChangeHandler}
						value={search_value}
						style={classes.search_bar}
						variant='outlined'
						//Search Icon
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
				<Grid item>
					<Button
						variant='contained'
						color='primary'
						size='small'
						disabled={loading}>
						{search_flag ? <p>Clear</p> : <p>Search</p>}
					</Button>
				</Grid>
				<Grid item style={classes.root}>
					{loading ? (
						this.loadingStateUi()
					) : search_flag ? (
						search.length > 0 ? (
							this.initialStateUi(search)
						) : (
							<Error stateData={stateData} />
						)
					) : (
						this.initialStateUi(organisations)
					)}
				</Grid>
			</Grid>
		);
	}
}
