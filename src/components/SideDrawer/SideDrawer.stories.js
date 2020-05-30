import React from "react";
import SideDrawer from "./SideDrawer";
import { withKnobs, object } from "@storybook/addon-knobs/react";

export default {
  component: SideDrawer,
  title: "SideDrawer",
  decorators: [withKnobs], // use to display state in storybook
  excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

export const Drawer = () => <SideDrawer />;
