import React from 'react';
import GroupRole from './GroupRole';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

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
    edit: false,
};

//Loading state of the story with loading true
export const loadingStateData = {
    role: '',
    loading: true,
    edit: false,
};
//export const editStateData
export const editStateData = {
    ...initialStateData,
    edit: true,
};

//It would toggle the edit flag
export const actionsData = {
    setEdit: action('Set Edit flag'),
};

//Creating stories
export const initialState = () => (
    <GroupRole stateData={object('state', initialStateData)} {...actionsData} />
);
export const loadingState = () => (
    <GroupRole stateData={object('state', loadingStateData)} {...actionsData} />
);
export const editState = () => (
    <GroupRole stateData={object('state', editStateData)} {...actionsData} />
);
