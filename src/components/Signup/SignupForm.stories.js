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
    confirmPassword:'',
    phoneNumber:'',
    institution:'',
    checkedB:false
}

const beforeRequestStateData={
    firstName:'John',
    lastName:'Doe',
    email:'johnDoe@dummyMail.com',
    password:'SomePass@12',
    confirmPassword:'SomePass@12',
    phoneNumber:'9878942662',
    institution:'NITRR',
    checkedB:true
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
    ...beforeRequestStateData,
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