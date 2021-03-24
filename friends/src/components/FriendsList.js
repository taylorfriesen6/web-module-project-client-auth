import {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth().get('/friends').then(res => {
      setFriends([...res.data]);
    }).catch(err => {
      console.log(err);
    });
  }, [])
  return (
    <div>
      {/* <pre>{JSON.stringify(friends, null, '\t')}</pre> */}
      {friends.map(friend => <div>{friend.name}, age {friend.age}, can be emailed at {friend.email}</div>)}
    </div>)
}

export default FriendsList;