import axios from "axios";

async function isAuthd() {
    const token = window.localStorage.getItem("token");
    axios.post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      .then((res) => {
        console.log('its working')
        return true;
      })
      .catch((err) => {
        console.log('its NOT working')
        return false;
      });
  }

export { isAuthd }