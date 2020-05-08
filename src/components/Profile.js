import React from "react";
import Profile_pic from "../images/profile_pic_.png";
import { List } from "semantic-ui-react";

function Profile() {
  return (
    <div className="Profile">
      <div className="flex-container">
        <div>
          <img src={Profile_pic} alt="profile_pic" className="profile_pic" />
        </div>
        <div className="user_info">
          <List>
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
            {/* <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
      </List.Content>
    </List.Item> */}
          </List>
        </div>
      </div>

      <div className="flex-container2">
        <div>
          <h2>Friends</h2>
        </div>
        <div>
          <h2>Posts</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
