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
  

 
  const onClickAjouterSeance=async ()=>{
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



      const data = {first_name:first_name,last_name: last_name, email:email, cin:cin , occupation:occupation,
                    gender:gender , phone:phone , birthday:birthday,state:state  }
      axios.post("http://localhost:3001/auth/SignupPatient",dataform,{
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
              <div className="modal-body p-0 row align-self-center">
                <Card className="shadow border-0">
                  <CardHeader className="bg-transparent pb-1">
                    <h3 style={{marginLeft:"180px", color:"#718a8a"}}>Ajouter un client</h3>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    
                    <Form role="form">
                            <FormGroup>
                                <Label> first_name</Label>
                                    <Input 
                                    type = "text"
                                    placeholder = "Nom*"
                                    value={first_name}
                                    onChange={(e)=>setFirst_name(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Nom</Label>
                                    <Input 
                                    type = "text"
                                    placeholder = "Nom*"
                                    value={last_name}
                                    onChange={(e)=>setLast_name(e.target.value)} />
                                
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input 
                                type = "text"
                                placeholder = "Email*"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Cin</Label>
                                <Input 
                                type = "text"
                                placeholder = "Cin*"
                                value={cin}
                                onChange={(e)=>setCin(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Age</Label>
                                <Input 
                                type = "text"
                                placeholder = "Age*"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Télephone</Label>
                                <Input 
                                type = "text"
                                placeholder = "Tel*"
                                value={tel}
                                onChange={(e)=>setTel(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Image</Label>
                                <Input 
                                className="form-control" 
                                type="file" 
                                id="formFileMultiple"
                                onChange={(e)=>{setImage(e.target.files[0]) ; setImagename(e.target.value.replace('C:\\fakepath\\',''))}} />
                                
                            </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          style={{backgroundColor:"#369579"}}
                          onClick={(e)=>onClickAjouterSeance()}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>

        </Modal>)

}

export default  SignUp;
