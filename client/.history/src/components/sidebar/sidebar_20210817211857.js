import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"
import "./sidebar.css"
import { Button } from 'reactstrap';
import "./sidebar.css"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor:"#3d3e42"
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor:"#3d3e42"
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#3d3e42"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const History=useHistory()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Logout=() => {
    localStorage.clear()
    History.push("/")
    window.location.reload();

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor:"#3d3e42"}}
        position="fixed"
        
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            
          >
            <MenuIcon />
          </IconButton>

          
                <ul class="navbar22  mr-auto">
                  
                  <li class="nav2">
                    <Link class="nav2-link" to=""> SYMPTOMS </Link>
                  </li>
                  <li class="nav2">
                  <Link class="nav2-link" to=""> PREVENTION && CONTROL </Link>
                  </li>
                  <li  class="nav2">
                  <Link class="nav2-link" to=""> DIFFERENT CASES  </Link>
                  </li>
                  <li class="nav3 ">
                    <Link class="nav2-link " to=""> VACCINES </Link>
                  </li>
                 
                  

                 </ul>
                        
                 

                 
                 
              

          <Button onClick={Logout} style={{height:"50px",width:"4",marginLeft:"",}}>
            <i style={{marginRight:"50px"}}  class="fa fa-sign-out" aria-hidden="true"></i>
            
            </Button>
           
           
        
          
        </Toolbar>

      
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{marginTop:"50px"}}>
         
            <Link className="link" to="Personal" > <ListItem button  style={{color:"white",marginBottom:"20px"}}>
              <ListItemIcon style={{color:"white"}}> <PeopleAltIcon /> </ListItemIcon>
              <ListItemText primary="PERSONAL" /> 
            </ListItem>
            </Link>
            <Link className="link" to="Patients"> <ListItem button  style={{color:"white",marginBottom:"20px"}}>
              <ListItemIcon style={{color:"white"}}> <SupervisedUserCircleIcon /> </ListItemIcon>
              <ListItemText primary="PATIENTS" /> 
            </ListItem>
            </Link>
            <Link className="link"  to="Article"> <ListItem button  style={{color:"white",marginBottom:"20px"}}>
              <ListItemIcon style={{color:"white"}}> <DescriptionIcon /> </ListItemIcon>
              <ListItemText primary="ARTICLE" /> 
            </ListItem>
            </Link>
            <Link className="link" to="Message"> <ListItem button  style={{color:"white",marginBottom:"20px"}}>
              <ListItemIcon style={{color:"white"}}> <ContactMailIcon /> </ListItemIcon>
              <ListItemText primary="MESSAGE" /> 
            </ListItem>
            </Link>
            <Link className="link" to="Notifications"> <ListItem button  style={{color:"white",marginBottom:"20px"}}>
              <ListItemIcon style={{color:"white"}}> <NotificationImportantIcon /> </ListItemIcon>
              <ListItemText primary="NOTIFICATIONS" /> 
            </ListItem>
            </Link>
          
        </List>
        
      </Drawer>
     
    </div>
  );
}
