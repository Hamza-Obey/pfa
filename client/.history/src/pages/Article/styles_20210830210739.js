import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
      
    },
    height:"100vh"
  },
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(8, 6),
    display: 'flex',
    flexDirection: 'column',
    height:"500px",
    width:"600px",
    marginTop:"200px",
    marginLeft:"500px",
    borderRadius:"20px !important"
    border
    
    
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width:"400px",
    marginLeft:"60px",
    height:"100vh"
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop:"20px",
    marginBottom: 10,
  },
}));