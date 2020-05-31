import React from 'react';
import PerformancePreview from './performancePreview';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
    component: PerformancePreview,
    title: 'PerformancePreview',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const initialStateData = {
    tasks: 10,
    points: 20,
    leaderBoard: 140,
    loading: false,
    error: false,
};

export const loadingStateData = {
    ...initialStateData,
    loading: true,
};

export const errorStateData = {
    ...initialStateData,
    error: true,
};

export const initialState = () => (
    <PerformancePreview stateData={object('state', initialStateData)} />
);

export const loadingState = () => (
    <PerformancePreview stateData={object('state', loadingStateData)} />
);

export const errorState = () => (
    <PerformancePreview stateData={object('state', errorStateData)} />
);