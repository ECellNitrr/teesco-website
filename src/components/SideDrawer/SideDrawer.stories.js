import React from "react";
import ecell from "./logo.png";

import PersistentDrawerLeft from "./SideDrawer";
import { withKnobs, object } from "@storybook/addon-knobs/react";

// attaches component to the story book
export default {
  component: PersistentDrawerLeft,
  title: "Side Drawer",
  decorators: [withKnobs], // use to display state in storybook
  excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

const data = {
  orgs: [
    { name: "E-Cell NITRR", logo: ecell },
    { name: "Avartan", logo: ecell },
    { name: "Robotix", logo: ecell },
    { name: "Innovation Cell", logo: ecell },
  ],
  menuItems: {
    top: ["Dashboard", "Org Profile", "Statistics", "Leaderboard", "Queries"],
    bottom: ["Certificates", "Settings", "Help"],
  },
  org1: {
    info: {
      name: "E-Cell NITRR",
      tagline: "Leaders Beyond Borders",
      about: "Non-Profit Organisation",
      role: "Head Coordinator",
    },
    groups: [
      {
        name: "Admins",
        active: "false",
      },
      {
        name: "Public Relations",
        active: "false",
      },
      {
        name: "Task Regulators",
        active: "false",
      },
      {
        name: "Executives",
        active: "false",
      },
      {
        name: "Managers",
        active: "true",
      },
      {
        name: "Volunteers",
        active: "false",
      },
    ],
  },
};
export const initialState = () => (
  <PersistentDrawerLeft defaultData={object("state", data)} />
);
