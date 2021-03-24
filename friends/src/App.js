import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/list" component={FriendsList} />
        </Switch>
    </Router>
  );
}

export default App;
