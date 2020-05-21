import React, { useState, useEffect} from "react";
import Profile_pic from "../images/profile_pic_.png";
import ProfileForm from './ProfileForm';
import { List } from "semantic-ui-react";
import axios from "axios";

function Profile({id}) {

  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`https://sample-backend-c-r.herokuapp.com/api/users/21`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  console.log(user)
  
  return (
    <div className="Profile">
      <div className="flex-container">
        <div className="profile_pic_div">
          <img src={Profile_pic} alt="profile_pic" className="profile_pic" />

        </div>
        <div className="user_info">
          <List className="user_info_list">
            <List.Item>
              <List.Icon name="users" />
              <List.Content>John Doe</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com">JohnDoe@gmail.com</a>
              </List.Content>
            </List.Item>
          </List>
          <div className="profileform">
            <ProfileForm />
          </div>
        </div>
      </div>

      <div className="flex-container2">
        <div className="friends">
          <h2>Friends</h2>
        </div>
        <div className="posts">
          <h2>Posts</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
