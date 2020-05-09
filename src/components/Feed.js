import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { isAuthd } from '../helpers/isAuthd'

function Feed({setLoggedIn}) {

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function getStatus() {
      const status = await isAuthd()
      console.log(status)
      setLoggedIn(status)
    }
    getStatus()
    axios
      .get("https://sample-backend-c-r.herokuapp.com/api/users")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);



  console.log(userList)
  return (
    <div className="Feed">
      {userList.map((e) => {
       return <Card className="user-card" user={e} />
      })}
    
    </div>
  );
}

export default Feed;
