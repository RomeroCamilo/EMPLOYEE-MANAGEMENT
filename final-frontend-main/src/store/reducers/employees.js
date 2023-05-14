import * as at from "../actions/actionTypes";

//CAN USE SAME FORMAT AS ALL COURSES. implement actions in the redux store.

// REDUCER;
const allEmployees = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
};

export default allEmployees;