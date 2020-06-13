import React from 'react';

import SearchOrg from './searchOrg';
import { withKnobs, object } from '@storybook/addon-knobs/react';

// attaches component to the story book
export default {
	component: SearchOrg,
	title: 'SearchOrg',
	decorators: [withKnobs], // use to display state in storybook
	excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const initialStateData = {
	organisations: [
		{
			org_id: 1,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders, Who do everything they ca d',
		},
		{
			org_id: 2,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 3,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 4,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 5,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 6,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 7,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
	],
	loading: false,
	search: [],
	search_value: '',
	search_flag: false,
};

export const loadingStateData = {
	...initialStateData,
	loading: true,
};

export const errorStateData = {
	...initialStateData,
	organisations: [],
};

export const searchStateData = {
	...initialStateData,
	search: [
		{
			org_id: 2,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
		{
			org_id: 3,
			org_name: 'E-Cell NIT Raipur',
			org_desc: 'Leader Beyond Borders',
		},
	],
	search_value: 'E-Cell',
	search_flag: true,
};

export const noSearchStateData = {
	...initialStateData,
	search: [],
	search_value: 'E-Cell',
	search_flag: true,
};

export const initialState = () => (
	<SearchOrg stateData={object('state', initialStateData)} />
);
export const loadingState = () => (
	<SearchOrg stateData={object('state', loadingStateData)} />
);
export const errorState = () => (
	<SearchOrg stateData={object('state', errorStateData)} />
);
export const searchState = () => (
	<SearchOrg stateData={object('state', searchStateData)} />
);
export const noSearchResultState = () => (
	<SearchOrg stateData={object('state', noSearchStateData)} />
);
