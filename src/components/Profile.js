import React, { useState, useEffect} from "react";
import Profile_pic from "../images/profile_pic_.png";
import ProfileForm from './ProfileForm';
import { List } from "semantic-ui-react";
import axios from "axios";

function Profile({ match }) {

  const [user, setUser] = useState()
  const [isFinished, setIsFinished] = useState(false)
  const id = match.params.id
  console.log(id)

  useEffect(() => {
    axios
      .get(`https://sample-backend-c-r.herokuapp.com/api/users/${id}`)
      .then((res) => {
        console.log(id)
        console.log(res)
        setUser(res.data);
        setIsFinished(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  console.log(user)
  if (isFinished == false) {
    return (<div></div>)
  }
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
              <List.Content>{`${user.first_name} ${user.last_name}`}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com">{`${user.email}`}</a>
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
  )


}

export default Profile;
