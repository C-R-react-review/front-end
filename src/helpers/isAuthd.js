import axios from "axios";

async function isAuthd() {
    const token = window.localStorage.getItem("token");
    axios.post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      .then((res) => {
        console.log('Its working')
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

export { isAuthd }