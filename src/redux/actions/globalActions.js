import { actionTypes } from "../constants";

export const changeTheme = (theme) => {
  return {
    type: actionTypes.CHANGE_THEME,
    payload: { theme },
  };
};
