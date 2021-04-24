import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home_body/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider/StateProvider';

function App() {

  const [{}, dispath] = useStateValue();

  useEffect(() => {
    // runs only once when the app component loads...
    // also runs if the dependency in depency changes

    auth.onAuthStateChanged( authUser => {
      console.log('USER ',authUser);
      if(authUser) {
        // user is logged in
        dispath({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // no user is logged in
        dispath({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route exact path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;