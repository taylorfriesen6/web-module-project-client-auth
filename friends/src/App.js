import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </Router>
  );
}

export default App;
