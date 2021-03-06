
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img from "./Login.jpg"
import "./Login.css"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/#">
        COVID-END
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width:"auto",
    margin:" 100px 250px "
    
    
  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '1400px',
    
    backgroundPosition: 'left',
    
    
  },
  paper: {
    margin: theme.spacing(8, 6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:"rgba(49, 91, 146, 0.8)"
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:"rgba(49, 91, 146, 0.7)"
  },
  
    
  
}));

export default function Login() {
  const classes = useStyles();


  return (
    <>
    <Grid container component="main"  className={classes.root}>
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={8} sm={8} md={5} className={classes.right} component={Paper} elevation={3} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon  />
          </Avatar>
          <Typography  component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password ? 
                </Link>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link style={{}} to="/Signup"  variant="body2">
                   Don't have an account ? Sign Up
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
    <Box mt={5}>
          <Copyright />
    </Box>
    </>
  );
}
