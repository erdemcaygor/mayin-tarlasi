import { actionTypes, themeTypes } from "../constants";

const initialState = {
  theme: "light",
};

const globalReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme:
          payload?.theme ||
          (state.theme === themeTypes.light
            ? themeTypes.dark
            : themeTypes.light),
      };
    default:
      return state;
  }
};

export default globalReducer;
