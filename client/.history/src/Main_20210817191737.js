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
import Notifications from './pages/Notifications/Notifications.js';

 



export default function Main() {
const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
        <Router>
          
          <Switch>
           { (!user) ? 
           <> 
           <Route  exact path="/"> <Navbar/> <Home/> </Route> 
            <Route exact  path="/Login"> <Navbar/> <Login/>  </Route>
             <Route exact path ="/Signup"> <Navbar/> <Signup/></Route>  
             </>
              : (user) ? <> <Route exact path ="/home">  <Notifications/>  <Sidebar/> </Route>
                <Route exact path ="/">  <Index/> <Sidebar/> </Route> 
                <Route exact path ="/Notifications"> <Sidebar/> <Notifications/>  </Route>

                
                 </> 

                : "" }
           
          </Switch>
        </Router>


    </>
  );
}

 
