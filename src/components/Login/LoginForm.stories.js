import React from 'react'

import LoginForm from './LoginForm'


// attaches component to the story book
export default {
    component: LoginForm,
    title: 'LoginForm',
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
export const initialState = () => <LoginForm stateData={initialStateData} />
export const errorState = () => <LoginForm stateData={errorStateData} />
export const loadingState = () => <LoginForm stateData={loadingStateData} />
export const beforeRequestState = () => <LoginForm stateData={beforeRequestStateData} />