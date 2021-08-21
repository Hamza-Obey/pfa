import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HomeIcon } from '@heroicons/react/solid';



export default function Healthnavbar() {
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button href="/Home" edge="start" className= color="inherit" aria-label="menu">
          <HomeIcon fontSize="large" /> 
          </Button>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
