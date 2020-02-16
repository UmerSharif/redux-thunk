import { INCR, ADD } from "./rootAction";

export const addIncrement = () => dispatch => {
  dispatch({ type: INCR });
};

export const onADD = data => dispatch => {
  dispatch({ type: ADD, payload: data });
};
