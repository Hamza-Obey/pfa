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
     e.preventDefault() 
     
    console.log(first_name)
    

     axios.post(" http://localhost:3002/auth/Signup" ,{
        first_name : first_name,
        last_name: last_name,
        birthday: birthday,
        gender: gender,
        email : email,
        password : password,
        phone : phone,
        occupation :occupation,
        speciality : speciality


     },{

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
     
    // window.alert("you are successfully signed up")
    // window.location.reload()
    
    
 }

 

 



  return (
    <>  
    <div>
         <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 classNameName="title" > Sign Up </h2>
                    <form  onSubmit={(e)=>submit(e)}>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">first name</label>
                                    <input className="input--style-4" type="text" name="first_name" value={first_name}
                                    onChange={(e)=>setFirst_name(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">last name</label>
                                    <input className="input--style-4" type="text" name="last_name"  value={last_name}
                                    onChange={(e)=>setLast_name(e.target.value)} required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Birthday</label>
                                    <div className="input-group-icon">
                                        <input style={{color:"black",backgroundColor:"#e0dbdb"}} className="input--style-4 js-datepicker" value={birthday} type="date" name="birthday"
                                        onChange={(e)=>setBirthday(e.target.value)} required
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Gender</label>
                                    <div className="p-t-10">
                                        <label value="male" className="radio-container m-r-45"> Male
                                            <input  value='male' required type="radio" onChange={(e)=>setGender(e.target.value)}   checked="checked" name="gender"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label value ="female" className="radio-container">Female
                                            <input value="female" type="radio" name="gender"  onChange={(e)=>setGender(e.target.value)} 
                                             
                                           
                                            />
                                            <span  className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input value={email} className="input--style-4" type="email" name="email"
                                    onChange={(e)=>setEmail(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label"> Password </label>
                                    <input className="input--style-4" type="password" name="password" value={password}
                                    onChange={(e)=>setPassword(e.target.value)} required
                                    />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label" required >Phone Number </label>
                                    <input value={phone} className="input--style-4" type="text" name="phone"
                                    onChange={(e)=>setPhone(e.target.value)} required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="label"  > Occupation : </label>
                            <div style={{marginLeft:"20px",marginTop:"1.8px"}} className="rs-select2 js-select-simple select--no-search">
                                <select style={{backgroundColor:"e0dbdb"}} name="occupation" onChange={(e)=>setOccupation(e.target.value)} required
                                
                                >
                                    <option value="-" disabled="disabled" selected="selected">Choose</option>
                                    <option value="Nurse"> Nurse </option>
                                    <option value="Internal Doctor">Internal Doctor</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Doctor">Doctor </option>
                                    
                                </select>
                                
                            </div>
                            
                               { (occupation==="Doctor" || occupation==="Internal Doctor") ?
                                   
                                        
                                <div className="col-2" style={{marginLeft:"40px"}}>
                                <div className="input-group">
                                    <label className="label"> Speciality </label>
                                    <input style={{width:"230px"}} value={speciality} className="input--style-4" type="text" name="speciality"
                                    onChange={(e)=>setSpeciality(e.target.value) } required
                                    />
                                    
                                </div>
                                </div> :"" }
                            
                        </div>
                        <div className="p-t-15">
                            <button style={{backgroundColor:"rgba(136, 172, 226, 0.8)"}} className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
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
