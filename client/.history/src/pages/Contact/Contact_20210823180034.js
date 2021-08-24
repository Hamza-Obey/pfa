import React, {useState,useEffect} from 'react';
import "./Contact.css"
import  axios from "axios"

function Contact() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [location,setLocation]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")
  
  function Submit(e) {
    e.preventDefault() 
    axios.post(" http://localhost:3002/Contact/Contact" ,{
        name : name,
        email : email,
       location : location,
        phone : phone,
        message :message,
        


     },{

        headers: {
            "Content-Type": "application/json"
           }
        
     }).then(result=>{
        if (result.data.error) {

        }
        else {
           console.log("message envoyé")
           window.location.reload("")
           
        }
       
      }).catch(err => {
        console.log(err)
      })
     
    
    
    
 }

  

  return (
    <>

<div className="contact2"  id="Contact-Us">
  <div className="container" >
    <div className="row contact-container">
      <div className="col-lg-12">
        <div style={{height:"400px",backgroundColor:"#eeeeee"}}  className="card card-shadow border-0 mb-4">
          <div style={{marginLeft:"200px"}}className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">Contact Us</h4>
                <form onSubmit={Submit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="name"
                          onChange={(e)=>setName(e.target.value)} required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="email"
                        onChange={(e)=>setEmail(e.target.value)} required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="phone"
                        onChange={(e)=>setPhone(e.target.value)} required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="location"
                        onChange={(e)=>setLocation(e.target.value)} required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <textarea  style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="message"
                        onChange={(e)=>setMessage(e.target.value)} required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button  type="submit" className="btn5 "><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Contact;
