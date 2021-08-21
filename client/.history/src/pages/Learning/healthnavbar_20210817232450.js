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
          <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
         


          
          <i onClick={Logout} style={{marginLeft:"35cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  class="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
      
    </div>
  );
}
