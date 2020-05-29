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

// Initial State of the story with the role for user
export const initialStateUserData = {
    role:
        'Managing the sub-ordinates. Supervising the work in the respective domains. Interaction with other domains...',
    loading: false,
    edit: false,
    isAdmin: false,
};
// Initial State of the story with the role for admin
export const initialStateAdminData = {
    role:
        'Managing the sub-ordinates. Supervising the work in the respective domains. Interaction with other domains...',
    loading: false,
    edit: false,
    isAdmin: true,
};

//Loading state of the story with loading true
export const loadingStateData = {
    isAdmin: false,
    role: '',
    loading: true,
    edit: false,
};

//export const editStateData
export const editStateData = {
    ...initialStateAdminData,
    edit: true,
};

//It would toggle the edit flag
export const actionsData = {
    setEdit: action('Set Edit flag'),
};

//Creating stories
export const initialStateUser = () => (
    <GroupRole
        stateData={object('state', initialStateUserData)}
        {...actionsData}
    />
);
export const initialStateAdmin = () => (
    <GroupRole
        stateData={object('state', initialStateAdminData)}
        {...actionsData}
    />
);
export const loadingState = () => (
    <GroupRole stateData={object('state', loadingStateData)} {...actionsData} />
);
export const editStateAdmin = () => (
    <GroupRole stateData={object('state', editStateData)} {...actionsData} />
);
