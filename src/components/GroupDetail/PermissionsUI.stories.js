import React from "react";
import PermissionsUI from "./PermissionsUI";
import { withKnobs, object } from "@storybook/addon-knobs/react";

export default {
  component: PermissionsUI,
  title: "PermissionsUI",
  decorators: [withKnobs], // use to display state in storybook
  excludeStories: /.*Data$/, // export ending with Data wont be treated as a story
};

const initialState = {
  roles: [, , , , , , ,],
  checkbox_name: {
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: false,
    checkedF: true,
    checkedG: false,
    checkedH: false,
  },
  loading: false,
  isAdmin: false,
};

const loadingState = {
  loading: true,
};

const adminPermissions = {
  checkbox_name: {
    checkedA: true,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: false,
    checkedF: true,
    checkedG: false,
    checkedH: false,
  },
  loading: false,
  isAdmin: true,
  permissionSet: true,
  userTypes: [],
};

export const UserPermissions = () => (
  <PermissionsUI defaultData={object("state", initialState)} />
);
export const LoadingPermissions = () => (
  <PermissionsUI defaultData={object("state", loadingState)} />
);
export const AdminPermissions = () => (
  <PermissionsUI defaultData={object("state", adminPermissions)} />
);
// export const SetPermissions = () => (
//   <PermissionsUI defaultData={object("state", adminPermissions)} />
// );
