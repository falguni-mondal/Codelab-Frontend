import axios from "axios";
import { baseUrl } from "./keys";

const checkAuth = async () => {

  try {
    const res = await axios.get(`${baseUrl}/api/user/auth`);
    return res.data;
  } catch (err) {
    throw new Error(err?.response?.data);
  }

};

export default checkAuth;
