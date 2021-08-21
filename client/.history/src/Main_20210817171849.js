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
import Sidebar from './components/sidebar/sidebar';

 



export default function Main() {
const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
        <Router>
          
        <Navbar/>
          
         
           
          <Switch>
           { (!user) ? 
           <> 
           <Route  exact path="/"> <Home/> </Route> 
            <Route exact  path="/Login"> <Login/>  </Route>
             <Route exact path ="/Signup"> <Signup/></Route>  
             </>
              : (user) ? <Route exact path ="/h">  <Index/> <Sidebar/> </Route> : ""}
           
          </Switch>
        </Router>


    </>
  );
}

 
