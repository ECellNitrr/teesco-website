import React from "react";

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
  orgs: ["E-Cell", "Avartan", "Robotix", "Innovation Cell"],
  name: "hello",
};
export const initialState = () => (
  <PersistentDrawerLeft defaultData={object("state", data)} />
);
