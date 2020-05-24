import React from 'react'

import LoginForm from './LoginForm'
import { withKnobs, object } from '@storybook/addon-knobs/react'


// attaches component to the story book
export default {
    component: LoginForm,
    title: 'LoginForm',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
}


// states for stories
export const initialStateData = {
    email: '',
    password: '',
    loading: false
}

const beforeRequestStateData = {
    ...initialStateData,
    email: 'crash.test.dummy@gmail.com',
    password: 'crash.test',
}

const errorStateData = {
    ...initialStateData,
    error: {
        "email": [
            "This field is required."
        ],
        "password": [
            "This field is required."
        ]
    },
}

const loadingStateData = {
    ...beforeRequestStateData,
    loading: true
}


// creating the stories
export const initialState = () => <LoginForm stateData={object('state',initialStateData)} />
export const errorState = () => <LoginForm stateData={object('state',errorStateData)} />
export const loadingState = () => <LoginForm stateData={object('state',loadingStateData)} />
export const beforeRequestState = () => <LoginForm stateData={object('state',beforeRequestStateData)} />