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
import Learning from './pages/Learning/Learning';
import Healthnavbar from './pages/Learning/healthnavbar';
import VaccinesAvailable from './pages/Learning/Content/Types-of-Vaccines-Available';

 



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
                <Route exact path ="/">  <Notifications/> <Sidebar/> </Route> 
                <Route exact path ="/Notifications"> <Sidebar/> <Notifications/>  </Route>
                <Route exact path ="/Personal"> <Sidebar/> <Index/>  </Route>
                <Route exact path ="/Healthcare"> <Healthnavbar/>  <Learning/>  </Route>
                <Route exact path="Types-of-Vaccines-Available"> <h </Route>

                
                 </> 

                : "" }
           
          </Switch>
        </Router>


    </>
  );
}

 
