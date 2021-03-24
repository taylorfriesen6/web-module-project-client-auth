import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    setMessage('Loading friends list...')
    axiosWithAuth().get('/friends').then(res => {
      setFriends([...res.data]);
      setMessage('');
    }).catch(err => {
      setMessage('Failed to load friends :(')
    });
  }, [])
  return (
    <div>
      <div>{message}</div>
      {friends.map(friend => <div>{friend.name}, age {friend.age}, can be emailed at {friend.email}</div>)}
      <div><Link to='/add'>Add a new friend</Link></div>
    </div>)
}

export default FriendsList;