import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const UserList = ({user}) => {
  return (
    <div className='users'>
      <Card className='card' style={{ width: '18rem' }}>
     
      <Card.Body style={{backgroundColor:"#66023c",color:'#fff'}}>
        <Card.Title>{user.name}</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.username}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        
      </ListGroup>
      <Card.Text>
          {user.address.street}
          {user.address.suite}
          {user.address.city}
          {user.address.zipcode}
          <ListGroup.Item>{user.address.geo.lat}</ListGroup.Item>
          <ListGroup.Item>{user.address.geo.lng}</ListGroup.Item>
        </Card.Text>
        <Button >Select </Button>
    </Card>
    </div>
  )
}

export default UserList
