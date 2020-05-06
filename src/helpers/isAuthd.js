import axios from "axios";

export async function isAuthd() {
    const token = window.localStorage.getItem("token");
    axios.post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      .then((res) => {
        console.log(res.data.message)
        return res.data.message;
      })
      .catch((err) => {
        console.log(false)
        return false;
      });
  }

