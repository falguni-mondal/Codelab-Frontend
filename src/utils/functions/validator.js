import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "./keys";
import { passwordRegex, unameRegex } from "./regex";

let timer = null;
const passwordChecker = (value, setPassErr) => {
  if (value.length === 0) {
    setPassErr(null);
    return clearTimeout(timer);
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    setPassErr(
      passwordRegex.test(value) ? "Valid Password!" : "Invalid Password!"
    );
  }, 1500);
};

const usernameChecker = (value, setUnameErr) => {

  if (value.length === 0) {
    setUnameErr(null);
    return clearTimeout(timer);
  }

  clearTimeout(timer);

  timer = setTimeout(async () => {
    if (!unameRegex.test(value)) {
      setUnameErr("Invalid Username!");
      return;
    } else {
      try {
        const res = await axios.post(`${baseUrl}/api/user/check/username`, {
          username: value,
        });
        setUnameErr(res.data.available ? "Available!" : "Unavailable!");
      } catch (err) {
        toast.error("Network Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return;
      }
    }
  }, 1000);
};

export { passwordChecker, usernameChecker };
