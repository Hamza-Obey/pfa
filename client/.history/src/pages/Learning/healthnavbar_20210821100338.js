import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import { HomeIcon } from '@heroicons/react/solid';
import "./healthnavbar.css"
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Healthnavbar() {
    const History=useHistory()

    const Logout=() => {
        localStorage.clear()
        History.push("/")
        window.location.reload();
    
      }
  

  return (
    <div >
       <AppBar> 
        <Toolbar position="static" fixed claName="navbar1">
          <Button href="/Home"    aria-label="menu">
          <HomeIcon fontSize="large" /> 
          </Button>
          <nav cla="navbar nav1 navbar-expand-lg navbar-light ">
            <div cla="collapse navbar-collapse" id="navbarNavDropdown">
                <ul cla="navbar-nav">
                
                <li cla="nav-item">
                    <Link cla="nav-link" to="/ABOUT-COVID-19"> ABOUT COVID-19 </Link>
                </li>
                <li cla="nav-item dropdown">
                    <a cla="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CLINICAL CARE
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}}cla="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a cla="dropdown-item" href="#Clinical-Care-Guidance">Clinical Care Guidance</a> <hr/>
                    <a  cla="dropdown-item" href="#">EPREVENT AND CONTROL COVID-19</a> <hr/>
                    <a cla="dropdown-item" href="#">FACILITY OPERATIONS</a> <hr/>
                    <a cla="dropdown-item" href="#">Managing COVID-19 Patients</a>
                    
                    </div>
                </li>
                <li cla="nav-item dropdown">
                    <a cla="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    VACCINES
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}} cla="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link cla="dropdown-item" to="/Types-of-Vaccines-Available">Types of Vaccines for Covid-19</Link>
                    <a cla="dropdown-item" href="#"> Possible Side Effects</a>
                   
                    </div>
                </li>
                </ul>
            </div>
        </nav>
         


          
          <i onClick={Logout} style={{marginLeft:"12.5cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  cla="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
     </AppBar> 
    </div>
  );
}
