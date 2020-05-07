import React from 'react';
import { Route } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Profile from '../components/Profile'
import '../App.css';

const UserCard = ({ user, ...rest }) => {

  function toProfile(event) {
    return <Route {...rest} render={(props) => <Profile {...props} user={user}/>} />
  }

  return (
    <Card className='card'
      onClick={toProfile}
      header={user.username}
      meta={user.email}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
  )
}
  
  export default UserCard