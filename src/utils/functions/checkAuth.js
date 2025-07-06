import axios from "axios";
import { baseUrl } from "./keys";

const checkAuth = async () => {

  try {
    const res = await axios.get(`${baseUrl}/api/user/auth`, { withCredentials: true });
    return res.data;
  } catch (err) {
    throw new Error(err?.response?.data);
  }

};

export default checkAuth;
