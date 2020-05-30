import React from "react";
import SideDrawer from "./SideDrawer";
import { withKnobs, object } from "@storybook/addon-knobs/react";

export default {
  component: SideDrawer,
  title: "SideDrawer",
  decorators: [withKnobs], // use to display state in storybook
  excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

const initialState = {
  actions: false,
  orgs: false,
};

// let orgTypes = {
//   organisations: [
//     (org1 = {
//       orgName: "Org-1",
//       g1: {
//         groupName: "Group-1",
//       },
//     }),
//     (org2 = {
//       orgName: "Org-2",
//       g2: {
//         groupName: "Group-2",
//       },
//     }),
//     (org3 = {
//       orgName: "Org-3",
//       g3: {
//         groupName: "Group-3",
//       },
//     }),
//   ],
// };
const finalState = {
  actions: true,
  orgs: true,
  organisations: {
    org1: {
      name: "Robotix Club",
      group1: {
        name: "Group-1",
      },
    },
    org2: {
      name: "ECELL",
      group1: {
        name: "Group-1",
      },
    },
    org3: {
      name: "Innovation Cell",
      group1: {
        name: "Group-1",
      },
    },
  },
};

export const DefaultDrawer = () => (
  <SideDrawer defaultData={object("state", initialState)} />
);
export const UserActionDrawer = () => (
  <SideDrawer defaultData={object("state", finalState)} />
);
