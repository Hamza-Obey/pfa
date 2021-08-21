import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HomeIcon } from '@heroicons/react/solid';
import "./healthnavbar.css"



export default function Healthnavbar() {
  

  return (
    <div >
      
        <Toolbar position="static" className="navbar1">
          <Button href="/Home" edge="start"  color="inherit" aria-label="menu">
          <HomeIcon fontSize="small" /> 
          </Button>
          
          
        </Toolbar>
      
    </div>
  );
}
