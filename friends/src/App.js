import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/list" component={FriendsList} />
        </Switch>
    </Router>
  );
}

export default App;
