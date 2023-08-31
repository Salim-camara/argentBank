import { GET_USER } from "../actions/GetUser";

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      localStorage.setItem("token", action.payload.body.token);
      return "the token has been correctly stored";
    }
    default:
      return state;
  }
};

export default UserReducer;
