import axios from "axios";
import { SERVER_BASE_URL } from "../utils/Variables";

export const CHANGE_USER_INFOS = "CHANGE_USER_INFOS";
const ChangeUserInfos = ({ firstName, lastName }) => {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: SERVER_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return async (dispatch) => {
    try {
      const result = await axiosInstance.put(`/user/profile`, {
        firstName,
        lastName,
      });
      dispatch({ type: CHANGE_USER_INFOS, payload: result.data.body });
      return result;
    } catch (error) {
      console.log("ChangeUserInfos => ", error);
    }
  };
};

export default ChangeUserInfos;
