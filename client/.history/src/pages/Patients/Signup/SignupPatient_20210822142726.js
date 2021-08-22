import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Label
} from "reactstrap";
import axios from "axios"




const SignUp = (props) => {
  const [phone,setPhone]= useState("")
  const [first_name,setFirst_name]=useState("")
  const [last_name,setLast_name]=useState("")
  const [gender,setGender]= useState("")
  const [occupation,setOccupation]=useState("")
  const [email,setEmail]=useState("")
  const [cin,setCin]=useState("")
  const [birthday,setBirthday]=useState("")
  const [state,setState]=useState("")
  

 
  const onClickAjouterPatient=async ()=>{
    // console.log(first_name,email,last_name,cin,state,gender,occupation,birthday)
    
    if( first_name && email && cin && last_name && gender && occupation && birthday && state && phone   )
    {
      
      
      let dataform = new FormData()
      dataform.append('first_name', first_name)
      dataform.append('email', email)
      dataform.append('cin', cin)
      dataform.append('last_name',last_name)
      dataform.append("phone",phone)
      dataform.append("birthday",birthday)
      dataform.append("occupation",occupation)
      dataform.append("gender",gender)
      dataform.append("state",state)
      console.log(dataform)


      const data = {first_name:first_name,last_name: last_name, email:email, cin:cin , occupation:occupation,
                    gender:gender , phone:phone , birthday:birthday,state:state  }
      axios.post("http://localhost:3001/auth/SignupPatient",{

        first_name:first_name,
        last_name:last_name,
        email: email,
        cin: cin,
        phone:phone,
        birthday:birthday,
        occupation:occupation


      },{
              headers:{
                  "Content-Type":"application/json" ,
                  "Authorization": "Bearer " + localStorage.getItem("jwt")
              }
          })
          .then(result=>{
              
              if(result.data.error)
              {
              }
              else
              {
                
                props.setData1(prevData => ([...prevData, data]))
                props.setModal(false)

                setFirst_name('')
                setLast_name('')
                setBirthday('')
                setEmail('')
                setCin('')
                setGender('')
                setOccupation('')
                setPhone('')
                setState('')
     

              }
          }).catch(err=>{
              console.log(err)
        })
        
      }

    



  }



        return(
        <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={props.isOpen}
        
        toggle={() => {props.setModal(!props.isOpen)}}
        >
              <div style={{width:"750px"}} className="modal-body p-0 row align-self-center">
                <Card className="shadow border-0">
                  <CardHeader className="bg-transparent pb-1">
                    <h3 style={{marginLeft:"250px", color:"black"}}>Add a new Patient </h3>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    
                    <Form  role="form">
                            <FormGroup style={{marginTop:"-35px "}}>
                                <Label > first name</Label>
                                    <Input 
                                    type = "text"
                                    placeholder = "first name*"
                                    value={first_name}
                                    onChange={(e)=>setFirst_name(e.target.value)} required />
                                    
                                
                            </FormGroup>
                            <FormGroup>
                                <Label> last name</Label>
                                    <Input 
                                    type = "text"
                                    placeholder = "last name*"
                                    value={last_name}
                                    onChange={(e)=>setLast_name(e.target.value)} required />
                                
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input 
                                type = "text"
                                placeholder = "Email*"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}  required />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Cin</Label>
                                <Input 
                                type = "text"
                                placeholder = "Cin*"
                                value={cin}
                                onChange={(e)=>setCin(e.target.value)} required />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label> birthday</Label>
                                <Input 
                                style={{backgroundColor:"white"}}
                                type = "date"
                                placeholder = "Birthday*"
                                value={birthday}
                                onChange={(e)=>setBirthday(e.target.value)} required />
                                
                            </FormGroup>

                            <FormGroup>
                                <Label> Gender</Label>
                                <Input 
                                style={{backgroundColor:"white"}}
                                type = "text"
                                placeholder = "Gender*"
                                value={gender}
                                onChange={(e)=>setGender(e.target.value)} required />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone </Label>
                                <Input 
                                type = "text"
                                placeholder = "Phone*"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)} required />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label> State </Label>
                                <Input 
                                type = "text"
                                placeholder = "State*"
                                value={state}
                                onChange={(e)=>setState(e.target.value)} required />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Occupation </Label>
                                <Input 
                                type = "text"
                                placeholder = "Occupation*"
                                value={occupation}
                                onChange={(e)=>setOccupation(e.target.value)} required />
                                
                            </FormGroup>
                            
                            
                      <div style={{marginTop:"-30px"}}  className="text-center">
                        <Button
                          
                          className="my-4"
                          color="primary"
                          type="button"
                          style={{backgroundColor:"rgba(49, 91, 146, 0.4)",height:"auto",borderRadius:"15px !important"}}
                          onClick={onClickAjouterPatient}
                        >
                         Add 
                        </Button>
                      </div>
                     
                      

                    </Form>
                  </CardBody>
                </Card>
              </div>

        </Modal>)

}

export default  SignUp;
