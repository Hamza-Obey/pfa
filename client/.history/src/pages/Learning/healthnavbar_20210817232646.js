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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
         


          
          <i onClick={Logout} style={{marginLeft:"35cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  class="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
      
    </div>
  );
}
