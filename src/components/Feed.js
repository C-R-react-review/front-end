import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";


function Feed() {


  const [userList, setUserList] = useState([]);
  useEffect(() => {
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
       return <Card className="user-card" user={e} />
      })}
    
    </div>
  );
}

export default Feed;
