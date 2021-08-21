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
import Index1 from './pages/User/tableau/Index';
import Signup from './pages/Signup/Signup';
import Sidebar from './components/sidebar/sidebar';
import Notifications from './pages/Notifications/Notifications.js';

import Healthnavbar from './pages/Learning/healthnavbar';
import VaccinesAvailable from './pages/Learning/Content/Types-of-Vaccines-Available';
import Aboutcovid19 from './pages/Learning/Content/Aboutcovid19';
import Index2 from "./pages/Patients/tableau/Index"
import Userprofile from './pages/User/Userprofile';
import Index from "./pages/Personal/tableau/Index"
 



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
                <Route exact path ="/Healthcare"> <Healthnavbar/>  <Aboutcovid19/>  </Route>
                <Route exact path="/Types-of-Vaccines-Available"> <Healthnavbar/> <VaccinesAvailable/> </Route>
                <Route exact path ="/About-Covid-19"> <Healthnavbar/>  <Aboutcovid19/>  </Route>
                <Route exact path ="/Patients"> <Healthnavbar/>  <Index2/>  </Route>
                <Route exact path ="/Profile"> <Userprofile/>   </Route>
                <Route exact path ="/Profile"> <Userprofile/>   </Route>
                
                

                
                 </> 

                : "" }
           
          </Switch>
        </Router>


    </>
  );
}

 
