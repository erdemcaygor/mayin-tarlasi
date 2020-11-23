import { actionTypes } from "../constants";

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
  };
};

export const updateUserPoint = (index, point) => {
  return {
    type: actionTypes.UPDATE_USER_POINT,
    payload: { point, index },
  };
};

export const gameFinished = (index, point) => {
  return {
    type: actionTypes.GAME_FINISHED,
    payload: { point, index },
  };
};

export const playAgain = () => {
  return {
    type: actionTypes.PLAY_AGAIN,
  };
};
