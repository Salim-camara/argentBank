import { CHANGE_USER_INFOS } from "../actions/ChangeUserInfos";
import { GET_USER } from "../actions/GetUser";
import { GET_USER_INFOS } from "../actions/GetUserInfos";

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      localStorage.setItem("token", action.payload.body.token);
      return {
        ...state,
        infoToken: "the token has been correctly stored in localStorage",
      };
    }
    case GET_USER_INFOS: {
      return { ...state, infosUser: action.payload };
    }
    case CHANGE_USER_INFOS: {
      return { ...state, infosUser: action.payload };
    }
    default:
      return state;
  }
};

export default UserReducer;
