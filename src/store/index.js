import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { INCR, ADD } from "../actions/rootAction";

const initialState = {
  count: 0,
  formData: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      return {
        ...state,
        count: state.count + 1
      };
    case ADD: {
      return {
        ...state,
        formData: action.payload
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
