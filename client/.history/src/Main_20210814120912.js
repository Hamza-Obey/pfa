import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from "./components/Navbar/Navbar"
import Index from './pages/admin/tableau/Index';
import Signup from './pages/Signup/Signup';



export default function Main() {
  const user=true
  return (
    <>
        <Router>
          {(user===true) ?
        <Navbar/>
          :""}
           
          <Switch>
            <Route exact path="/"> <Home/>  </Route>
            <Route exact  path="/Login"> <Login/>  </Route>
            <Route exact path ="/admin"> <Index/> </Route> 
            <Route exact path ="/Signup"> <Signup/></Route>
           
            


            
          </Switch>
        </Router>


    </>
  );
}

 
