import axios from "axios";
import { SERVER_BASE_URL } from "../utils/Variables";

export const GET_USER = "GET_USER";
const GetUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${SERVER_BASE_URL}/user/login`, {
        email,
        password,
      });
      dispatch({ type: GET_USER, payload: result.data });
      return result;
    } catch (error) {
      console.log("GetUser => ", error);
    }
  };
};

export default GetUser;
