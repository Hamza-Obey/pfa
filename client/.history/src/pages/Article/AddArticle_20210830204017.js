import React , {useState} from 'react'

import {TextField ,Button , Typography, Paper} from "@material-ui/core"



import FileBase from "react-file-base64"



import useStyles from "./styles"

function Form() {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator : "" , title :"" , desc : "" , img :"" , selectedFile :""
    })

    

    

  return (
   <Paper className ={classes.paper}>
       <div autoComplete="off" noValidy className={classes.form}>
           <Typography variant="h6"> Creating a new Article </Typography>
            
            <TextField name ="title" variant="outlined" label="Title" fullWidth value={postData.title}   />
            <TextField name ="message" variant="outlined" label="Message" fullWidth value={postData.message}   />
            <TextField name ="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} />
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/></div>
            

            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  fullWidth   > SUBMIT </Button>
            <Button  variant="contained" color="secondary" size="small" fullWidth > CLEAR </Button>
       </div>

   </Paper>
  )
}

export default Form ;