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
           <Typography variant="h6"> Creating a new Article </Typography>
            
            <TextField name ="title" variant="outlined" label="Title" fullWidth value={title}   />
            <TextField  name ="description" variant="outlined" label="Message" fullWidth  value ={desc} onChange={(e)=>setDesc(e.target.value)}  />
            <Typography style variant="h8"> Creating a new Article </Typography>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} />
            </div>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  fullWidth   > SUBMIT </Button>
            <Button  variant="contained" color="secondary" size="small" fullWidth > CLEAR </Button>
       </div>

   </Paper>
  )
}

export default Form ;