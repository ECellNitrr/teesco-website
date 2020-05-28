import React from 'react';

import SignupForm from './SignupForm';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
    component: SignupForm,
    title: 'SignupForm',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
}

const initialStateData={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber:'',
}

const beforeRequestStateData={
    firstName:'John',
    lastName:'Doe',
    email:'johnDoe@dummyMail.com',
    password:'SomePass',
    phoneNumber:'9878942662',
}

const loadingCase={
    ...beforeRequestStateData,
    loading:true
}

const errorCase={
    ...initialStateData,
    error:{
        nullCase:"This field is required",
    }
}

const errorSpecialCase={
    ...initialStateData,
    error:{
        nullCase:"This field is required",
        specialCase:"This email is already registered"
    }
}


export const initialState = () => <SignupForm stateData={object('state',initialStateData)} />
export const beforeRequestState = () => <SignupForm stateData={object('state',beforeRequestStateData)} />
export const loadingState = () => <SignupForm stateData={object('state',loadingCase)} />
export const errorState = () => <SignupForm stateData={object('state',errorCase)} />
export const errorSpecialState = () => <SignupForm stateData={object('state',errorSpecialCase)} />