import React from 'react';
import Error from './Error';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
    component: Error,
    title: 'Error',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

//State Data
export const initialStateData = {
    error: 'Something Went Wrong Please try again later or try refreshing',
    width: '80%',
    direction: 'column',
    iconSize: 40,
};

//Create Stories
export const initialState = () => (
    <Error stateData={object('state', initialStateData)} />
);
