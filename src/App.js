import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="app container">
      <Header />
      <div className="mainContent">
        <Switch>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
