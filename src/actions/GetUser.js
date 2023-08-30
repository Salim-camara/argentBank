import axios from "axios";

const testData = {
  email: "tony@stark.com",
  password: "password123",
};

const GetUser = () => {
  return async (dispatch) => {
    // try {

    //   return result;
    // } catch (error) {
    //   console.log("GetUser => ", error);
    // }
    axios
      .get("https://localhost:3001/")
      .then((res) => {
        console.log("l12 ", res);
      })
      .catch((err) => {
        console.log("l19 ", err);
      });
  };
};

export default GetUser;

export const GET_USER = GetUser;
