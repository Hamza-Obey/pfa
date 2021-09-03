import React , {useState} from 'react'

import {TextField ,Button , Typography, Paper} from "@material-ui/core"



import FileBase from "react-file-base64"



import useStyles from "./styles"

function Form() {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [content,setContent]=useState("")
    

    

  return (
   <Paper className ={classes.paper}>
       <div autoComplete="off"  className={classes.form}>
           <Typography style={{marginBottom:"30px",fontFamily:"revert",fontSize:"40px"}} variant="h6"> Creating a new Article </Typography>
            
            <TextField name ="title" variant="outlined" label="Title" fullWidth value={title}   />
            <TextField  name ="description" variant="outlined" label="Message" fullWidth  value ={desc} onChange={(e)=>setDesc(e.target.value)}  />
            <Typography style={{marginLeft:"-100px",marginTop:"19px"}} variant="h7"> Add a Cover Picture : </Typography>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} />
            </div>
            <Typography style={{marginLeft:"-90px",marginTop:"19px"}} variant="h7"> Add an article as a pdf file : </Typography>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  fullWidth   > SUBMIT </Button>
            
       </div>

   </Paper>
  )
}

export default Form ;