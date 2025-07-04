import axios from "axios";
import { baseUrl } from "./keys";

const checkAuth = async () => {

  try {

    const res = await axios.get(`${baseUrl}/api/user/auth`);
    console.log(res.data);
    return true;

  } catch (err) {

    console.log(err.response.data);
    return false;

  }

};

export default checkAuth;
