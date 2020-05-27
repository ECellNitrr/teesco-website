import React from 'react';
import GroupRole from './GroupRole';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
    component: GroupRole,
    title: 'GroupRole',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

// Initial State of the story with the role
export const initialStateData = {
    role:
        'Managing the sub-ordinates. Supervising the work in the respective domains. Interaction with other domains...',
    loading: false,
};

//Loading state of the story with loading true
export const loadingStateData = {
    role: '',
    loading: true,
};

//Creating stories
export const initialState = () => (
    <GroupRole stateData={object('state', initialStateData)} />
);
export const loadingState = () => (
    <GroupRole stateData={object('state', loadingStateData)} />
);
