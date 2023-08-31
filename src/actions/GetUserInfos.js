import axios from "axios";
import { SERVER_BASE_URL } from "../utils/Variables";

export const GET_USER_INFOS = "GET_USER_INFOS";
const GetUserInfos = () => {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: SERVER_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return async (dispatch) => {
    try {
      const result = await axiosInstance.post(`/user/profile`);
      dispatch({ type: GET_USER_INFOS, payload: result.data.body });
      return result;
    } catch (error) {
      console.log("GetUserInfos => ", error);
    }
  };
};

export default GetUserInfos;
