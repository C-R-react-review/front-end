import React from 'react';
import { Card } from 'semantic-ui-react'
import '../App.css';

const UserCard = (props) => (
    <Card
      header={props.username}
      meta={props.email}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    />
  )
  
  export default UserCard