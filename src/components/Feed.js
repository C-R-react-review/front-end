import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { isAuthd } from '../helpers/isAuthd'

function Feed({loggedIn, setLoggedIn}) {

  const [userList, setUserList] = useState([]);
  useEffect(() => {
  //   isAuthd()
  //   .then(res =>
  //     console.log(setLoggedIn())
  //   )
    axios
      .get("https://sample-backend-c-r.herokuapp.com/api/users")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="Feed">
      {userList.map((e) => {
       return <Card className="user-card" key={e.email} user={e} />
      })}
    
    </div>
  );
}

export default Feed;
