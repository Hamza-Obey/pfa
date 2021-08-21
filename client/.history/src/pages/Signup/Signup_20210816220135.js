import React from 'react';
import { useState } from 'react';
import "./Signup.css"
import axios from 'axios';
import { useHistory} from 'react-router-dom'



function Signup() {

        const History = useHistory()

        const [first_name,setFirst_name]=useState("")
        const [last_name,setLast_name]=useState("")
        const [birthday,setBirthday]=useState("")
        const [gender,setGender]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [phone,setPhone]=useState("")
        const [occupation,setOccupation]=useState("")
        const [speciality,setSpeciality]=useState("")

    

 function submit(e) {
     e.preventDefault() ;
     let dataform = new FormData()
     dataform.append('first_name', first_name)
     dataform.append('last_name', last_name)
     dataform.append('birthday', birthday)
     dataform.append('gender', gender)
     dataform.append('email', email)
     dataform.append('password', password)
     dataform.append('phone', phone)
     dataform.append("occupation",occupation)
     dataform.append('speciality', speciality)
     



     axios.post(" http://localhost:3002/auth/Signup" ,dataform,{

        headers: {
            "Content-Type": "application/json"
           }
        
     }).then(result=>{
        if (result.data.error) {
        }
        else {
            History.push("/")
        }
      }).catch(err => {
        console.log(err)
      })
     
    // window.alert("you are successfully signed up")
    // window.location.reload()
    
    
 }

 

 



  return (
    <>
         <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title" > Sign Up </h2>
                    <form  onSubmit={(e)=>submit(e)}>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">first name</label>
                                    <input class="input--style-4" type="text" name="first_name" value={first_name}
                                    onChange={(e)=>setFirst_name(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">last name</label>
                                    <input class="input--style-4" type="text" name="last_name"  value={last_name}
                                    onChange={(e)=>setLast_name(e.target.value)} required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Birthday</label>
                                    <div class="input-group-icon">
                                        <input style={{color:"black",backgroundColor:"#e0dbdb"}} class="input--style-4 js-datepicker" value={birthday} type="date" name="birthday"
                                        onChange={(e)=>setBirthday(e.target.value)} required
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Gender</label>
                                    <div class="p-t-10">
                                        <label class="radio-container m-r-45">Male
                                            <input type="radio" value={gender} checked="checked" name="gender"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="radio-container">Female
                                            <input type="radio" name="gender"
                                            onChange={(e)=>setGender(e.target.value)} required
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Email</label>
                                    <input value={email} class="input--style-4" type="email" name="email"
                                    onChange={(e)=>setEmail(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label"> Password </label>
                                    <input class="input--style-4" type="password" name="password" value={password}
                                    onChange={(e)=>setPassword(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label" required >Phone Number </label>
                                    <input value={phone} class="input--style-4" type="text" name="phone"
                                    onChange={(e)=>setPhone(e.target.value)} required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="input-group">
                            <label class="label"  > Occupation : </label>
                            <div style={{marginLeft:"20px",marginTop:"1.8px"}} class="rs-select2 js-select-simple select--no-search">
                                <select style={{backgroundColor:"e0dbdb"}} name="occupation" value={occupation}
                                onChange={(e)=>setOccupation(e.target.value)} required
                                >
                                    <option  disabled="disabled" selected="selected">Choose</option>
                                    <option> Nurse </option>
                                    <option>Internal Doctor</option>
                                    <option>Intern</option>
                                    <option>Doctor </option>
                                    
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                            
                               { (occupation==="Doctor" || occupation==="Internal Doctor") ?
                                   
                                        
                                <div class="col-2" style={{marginLeft:"40px"}}>
                                <div class="input-group">
                                    <label class="label"> Speciality </label>
                                    <input value={speciality} class="input--style-4" type="text" name="speciality"
                                    onChange={(e)=>setSpeciality(e.target.value|| "-") } required
                                    />
                                    
                                </div>
                                </div> :"" }
                            
                        </div>
                        <div class="p-t-15">
                            <button style={{backgroundColor:"rgba(136, 172, 226, 0.8)"}} class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    </>
  );
}

export default Signup;
