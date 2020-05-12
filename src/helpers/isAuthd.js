import axios from "axios";

async function isAuthd() {
    const token = window.localStorage.getItem("token");
    let val = 'texas'
    axios.post("https://sample-backend-c-r.herokuapp.com/api/auth/authenticate", { token })
      .then((res) => {
        console.log('Its working')
        val = true
        return true
      })
      .catch((err) => {
        // console.log('Its NOT working')
        val = false
        return false
      })
      console.log(val)
      return true
  }

export { isAuthd }