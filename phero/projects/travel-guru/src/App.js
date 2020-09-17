import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Hotels from './components/Hotels/Hotels';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();
function App() {
  const [loggedIn,setLoggedIn]=useState({});
  return (   
    <UserContext.Provider value={[loggedIn,setLoggedIn]}>
  <div className="app">
      <Router>
      <Header></Header>
     <Switch>
       <Route path='/home'>
         <Home></Home>
       </Route>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path='/signup'>
      <SignUp></SignUp>
         
       </Route>
       <Route path='/booking/:id'>
         <Booking></Booking>
         </Route>
       <Route path='/login'>
         <Login></Login>
         
       </Route>
       <PrivateRoute  path="/hotels">
            <Hotels></Hotels>
        </PrivateRoute>
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
     </Switch>
    
   </Router> 
  </div>  
  </UserContext.Provider>
  );
}

export default App;
