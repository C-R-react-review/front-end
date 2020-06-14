import React from 'react';
import { useHistory } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Profile from '../components/Profile'
import '../App.css';

const UserCard = ({ user, ...rest }) => {
  const history = useHistory()
  function toProfile(id) {
    // console.log(id)
    history.push(`/profile/${id}`)
  }

  return (
    <Card className='card'
      onClick={() => toProfile(user.id)}
      header={user.username}
      meta={user.email}
      description={user.about}
    />
  )
}
  
  export default UserCard