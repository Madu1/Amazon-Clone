import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51MgtekIdqsBfoQNUaht09wPtb16ssu6giq9KhVhnZbhTiorOXTsKmiGpgb13ndngy491shbzi4HHcrPmkHE42E1100D6maa0bs');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only runs when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        //the user just logged in/ the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  
  return (
  
    <Router>
      <div className="app">  
        <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout  />
            </Route>
            <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>     
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;