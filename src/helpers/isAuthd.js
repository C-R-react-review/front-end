import axios from "axios";

async function isAuthd() {
    const token = window.localStorage.getItem("token");
    try {
      await axios.post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      return true
    } catch(err) {
      return false
    }
}

export { isAuthd }