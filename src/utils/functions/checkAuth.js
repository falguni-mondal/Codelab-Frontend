import axios from "axios";
import { baseUrl } from "./keys";

const checkAuth = async () => {

  try {
    const res = await axios.get(`${baseUrl}/api/user/auth`);
    return true;
  } catch (err) {
    return false;
  }

};

export default checkAuth;
