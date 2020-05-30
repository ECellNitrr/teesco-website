import React from 'react';

import LatestTask from './latestTask';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    component: LatestTask,
    title: 'LatestTask',
    decorators: [withKnobs], // use to display state in storybook
    excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
}

const initialStateData={
    tasks:[
      {
        id:1,
        title:"Path to diversity begins with diversity and socialism",
        site:"facebook"
      },
      {
        id:2,
        title:"Path to diversity begins with diversity and socialism",
        site:"whatsapp"
      },
      {
        id:3,
        title:"Path to diversity begins with diversity and socialism",
        site:"twitter"
      },
      {
        id:4,
        title:"Path to diversity begins with diversity and socialism",
        site:"instagram"
      },
      {
        id:7,
        title:"Open Source 3.0",
        site:"medium"
      },
      {
        id:8,
        title:"Open Source 2.0",
        site:"medium"
      },
      {
        id:9,
        title:"Open Source 1.0",
        site:"medium"
      }
    ],
    loading:false
}

const loadingCase={
    ...initialStateData,
    loading:true
}

export const initialState= () => <LatestTask stateData={object('state', initialStateData)} ></LatestTask>
export const loadingState= () => <LatestTask stateData={object('state', loadingCase)} ></LatestTask>