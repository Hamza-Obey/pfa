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

          u


          
          <i onClick={Logout} style={{marginLeft:"35cm",fontWeight:"-moz-initial",cursor:"pointer",float:"right",fontSize:"20px"}}  class="fa fa-sign-out" aria-hidden="true"> Sign out </i>
        </Toolbar>
      
    </div>
  );
}
