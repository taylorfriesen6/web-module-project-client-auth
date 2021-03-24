import {useEffect, useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth().get('/friends').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }, [])
  return (
    <div>test</div>
  )
}

export default FriendsList;