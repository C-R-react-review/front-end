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

// const texas = {
//   population: 23123,
//   capital: 'Austen',
// }
// console.log(texas.capital)
  console.log(userList);

  return (
    <div className="Feed">
      {userList.map((e) => {
       return <Card username={e.username} email={e.email} />
      })}
    
    </div>
  );
}

export default Feed;
