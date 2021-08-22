import React, {useState,useEffect} from 'react';
import "./Contact.css"

function Contact() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [location,setLocation]=useState("")
   const [phone,setPhone]=useState("")
  const [message,wet]=useState("")
  const [speciality,setSpeciality]=useState("")


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
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <textarea  style={{borderRadius:"15px"}} className="form-control" type="text" placeholder="message"/>
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
