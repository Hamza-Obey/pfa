import React , {useState} from 'react'

import {TextField ,Button , Typography, Paper} from "@material-ui/core"

import axios from 'axios'

import "./AddArticle.css"



import useStyles from "./styles"

function Form() {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [content,setContent]=useState("")


    function Create(e) {
        e.preventDefault() 

        const fd = new FormData()
        fd.append('title', title);
        fd.append('desc', desc);
        fd.append('image', img);
        fd.append('file', content);
        
       axios.post(" http://localhost:3002/Article" ,fd,{
   
           headers: {
               "Content-Type": "application/json"
              }
           
        }).then(result=>{
           if (result.data.error) {
           }
           else {
               
               console.log("success")
           }
         }).catch(err => {
           console.log(err)
         })
        
       
       
       
    }
    

    

  return (
    <div className="coverpic">
   <Paper style={{backgroundColor:"rgba()"}}  className ={classes.paper}>
       <div autoComplete="off"  className={classes.form}>
           <Typography style={{marginBottom:"30px",fontFamily:"revert",fontSize:"40px"}} variant="h6"> Creating a new Article </Typography>
            
            <TextField style={{marginBottom:"10px"}} name ="title" variant="outlined" label="Title" fullWidth value={title} onChange={(e)=>setTitle(e.target.value)}    />
            <TextField  name ="description" variant="outlined" label="Message" fullWidth  value ={desc} onChange={(e)=>setDesc(e.target.value)}  />
            <Typography style={{marginLeft:"-100px",marginTop:"19px"}} variant="h7"> Add a Cover Picture : </Typography>
            <div className={classes.fileInput}>
                <input onChange={(e)=>setImg(e.target.files[0])} type="file" multiple={false}  />
            </div>
            <Typography style={{marginLeft:"-90px",marginTop:"19px"}} variant="h7"> Add an article as a pdf file : </Typography>
            <div className={classes.fileInput}>
                <input onChange={(e)=>setContent(e.target.files[0])} type="file" multiple={false}  />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  fullWidth onClick={Create}   > CREATE </Button>
            
       </div>

   </Paper>
   </div>
  )
}

export default Form ;