import React from 'react';
import MemberTile from './MemberTile'
import {withKnobs,object} from '@storybook/addon-knobs/react'

export default {
    componet:MemberTile,
    title:'MemberTile',
    decorators:[withKnobs],//use to display state in storybook
    excludeStories:/.*Data$/
};

//State Data
export const initialStateData={
    loading:false,
    permissions:{
        cancreategroups:true
    },
    error:false,
    memberlist:[
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        },
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        },
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        },
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        },
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        },
        {
            fname:'Sam',
            lname:'Wilson',
            phone:999999999,
            email:'something@gmail.com'
        }
    ]
}

export const loadingStateData={
    ...initialStateData,
    loading:true
}

export const errorStateData={
    ...initialStateData,
    error:true
}

export const NotAdminStateData={
    ...initialStateData,
    permissions:{
        cancreategroups:false
    }
}

//Create Stories
export const AdminState = () =>(
    <MemberTile StateData={object('state',initialStateData)} />
)

export const loadingState = () =>(
    <MemberTile StateData={object('state',loadingStateData)} />
)

export const notAdminState = () =>(
    <MemberTile StateData={object('state',NotAdminStateData)} />
)

export const errorState = () =>(
    <MemberTile StateData={object('state',errorStateData)} />
)