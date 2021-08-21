import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HomeIcon } from '@heroicons/react/solid';
import "./healthnavbar.css"
import { useHistory } from 'react-router-dom';



export default function Healthnavbar() {
    const History=useHistory()

    const Logout=() => {
        localStorage.clear()
        History.push("/")
        window.location.reload();
    
      }
  

  return (
    <div >
      
        <Toolbar position="static" className="navbar1">
          <Button href="/Home"    aria-label="menu">
          <HomeIcon fontSize="large" /> 
          </Button>
          <nav class="navbar nav1 navbar-expand-lg navbar-light ">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                
                <li class="nav-item">
                    <a class="nav-link" href="">ABOUT COVID-19 </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CLINICAL CARE
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}}class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#Clinical CareGuidance">Clinical Care Guidance</a> <hr/>
                    <a  class="dropdown-item" href="#">EPREVENT AND CONTROL COVID-19</a> <hr/>
                    <a class="dropdown-item" href="#">FACILITY OPERATIONS</a> <hr/>
                    <a class="dropdown-item" href="#">Managing COVID-19 Patients</a>
                    
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    VACCINES
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}} class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Types of Vaccines Available</a>
                    <a class="dropdown-item" href="#"> Possible Side Effects</a>
                   
                    </div>
                </li>
                </ul>
            </div>
        </nav>
         


          
          <i onClick={Logout} style={{marginLeft:"13cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  class="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
      
    </div>
  );
}
