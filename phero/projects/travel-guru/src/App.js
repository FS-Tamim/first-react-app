import React from 'react';
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


function App() {
  return (   
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
       <Route path='*'>
         <NotFound></NotFound>
       </Route>
     </Switch>
    
   </Router> 
  </div>  
  );
}

export default App;
