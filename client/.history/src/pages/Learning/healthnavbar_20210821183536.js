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
       <AppBar
        style={{backgroundColor:"#eeeeeee"}}> 
        <Toolbar position="static" fixed classNameName="navbar1">
          <Button href="/Home"    aria-label="menu">
          <HomeIcon fontSize="large" /> 
          </Button>
          <nav className="navbar nav1 navbar-expand-lg navbar-light ">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                
                <li className="nav-item">
                    <Link className="nav-link" to="/ABOUT-COVID-19"> ABOUT COVID-19 </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CLINICAL CARE
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}}className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#Clinical-Care-Guidance">Clinical Care Guidance</a> <hr/>
                    <a  className="dropdown-item" href="#">EPREVENT AND CONTROL COVID-19</a> <hr/>
                    <a className="dropdown-item" href="#">FACILITY OPERATIONS</a> <hr/>
                    <a className="dropdown-item" href="#">Managing COVID-19 Patients</a>
                    
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    VACCINES
                    </a>
                    <div style ={{backgroundColor:"#dddddd"}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/Types-of-Vaccines-Available">Types of Vaccines for Covid-19</Link>
                    <a className="dropdown-item" href="#"> Possible Side Effects</a>
                   
                    </div>
                </li>
                </ul>
            </div>
        </nav>
         


          
          <i onClick={Logout} style={{marginLeft:"12.5cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  className="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
     </AppBar> 
    </div>
  );
}
