import {useState} from 'react';
import {Link} from 'react-router-dom';

import {axiosWithAuth} from '../utils/axiosWithAuth';

const NewFriend = (props) => {
  const [form, setForm] = useState({name: '', age: '', email: ''});

  const handleChange = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/friends', form).then(res => {
      console.log(res);
      props.history.push('/list');
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label> Age:
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </label>
        <label> Email:
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        </label>
        <button>Add Friend</button>
      </form>
      <div><Link to='/list'>Back to friends list</Link></div>
    </div>
  );
}

export default NewFriend;