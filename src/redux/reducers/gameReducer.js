import { actionTypes } from "../constants";
import { generateCellValues } from "../../utils/helpers";

const initialState = {
  cellValues: {},
  point: 0,
  gameFinished: false,
};

const gameReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        cellValues: generateCellValues(),
      };
    case actionTypes.UPDATE_USER_POINT:
      return {
        ...state,
        point: state.point + payload.point,
        cellValues: {
          ...state.cellValues,
          [payload.index]: { ...state.cellValues[payload.index], show: true },
        },
      };
    case actionTypes.GAME_FINISHED:
      return {
        ...state,
        gameFinished: true,
        cellValues: {
          ...state.cellValues,
          [payload.index]: { ...state.cellValues[payload.index], show: true },
        },
      };
    case actionTypes.PLAY_AGAIN:
      return {
        ...state,
        gameFinished: false,
        cellValues: generateCellValues(),
        point: 0,
      };
    default:
      return state;
  }
};

export default gameReducer;
