
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from 'react-bootstrap/Alert'

import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img from "./Login.jpg"
import "./Login.css"
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link style={{color:"black "}} color="inherit" to="/#">
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
  const [email,setEmail]=useState("")
  const [password,setPassword] =useState("")

  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(false)

  const classes = useStyles();
  const History =useHistory()
  function onClick(){
    fetch("http://localhost:3002/auth/Signin",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email ,
          password 
      })
  }).then(res=>res.json())
  .then(data=>{
      console.log(data)
      if(data.error)
      {
        setError(true)
        setTimeout(() => setError(false), 2500)
      }
      else
      {  
       
        setSuccess(true)
        setTimeout(() => setSuccess(false), 2500)

          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          //localSttorage.setItem tbadalek il contenu mta il prémier champs bil contenu il mawjoud fil 2eme champ
          //il ostra il zouz hekom tzedou bich yhafdhou al token 
         
          setTimeout(() => History.push('/home'), 500)
         
         
      }
      setTimeout(() =>window.location.reload(), 500)
  }).catch(err=>{
      console.log(err)
  })
}


  


  return (
    <>
   
           
    <Grid container component="main"  className={classes.root}>
    <Alert show={error} variant={'danger'} style={{width:"700px",marginBottom:"150"}}>
                    { "One of the information is wrong , please verify your e-mail or your password"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"700px",marginb:""}}>
                    { "You are successfully logged in "}
            </Alert>
      
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={8} sm={8} md={5} className={classes.right} component={Paper} elevation={3} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon  />
          </Avatar>
          <Typography  component="h1" variant="h5">
            Sign in
          </Typography>
          < div className={classes.form} noValidate>
            <TextField
              
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
               onChange={(e)=>setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
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
              onClick={onClick}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link  to="/Signup"  variant="body2">
                   Don't have an account ? Sign Up
                </Link>
              </Grid>
            </Grid>
            
          </div>
        </div>
      </Grid>
    </Grid>
    <Box mt={5}>
          <Copyright />
    </Box>
    </>
  );
}
