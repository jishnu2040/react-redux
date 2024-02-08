import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  numOfItem: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItem: state.numOfItem + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItem: state.numOfItem - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
