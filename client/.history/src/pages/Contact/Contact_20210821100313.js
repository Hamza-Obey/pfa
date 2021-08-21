import React from 'react';
import "./Contact.css"

function Contact() {
  return (
    <>

<div cla="contact2"  id="Contact-Us">
  <div cla="container" >
    <div cla="row contact-container">
      <div cla="col-lg-12">
        <div style={{height:"400px",backgroundColor:"#eeeeee"}}  cla="card card-shadow border-0 mb-4">
          <div style={{marginLeft:"200px"}}cla="row">
            <div cla="col-lg-8">
              <div cla="contact-box p-4">
                <h4 cla="title">Contact Us</h4>
                <form>
                  <div cla="row">
                    <div cla="col-lg-6">
                      <div cla="form-group mt-3">
                        <input style={{borderRadius:"15px"}} cla="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div cla="col-lg-6">
                      <div cla="form-group mt-3">
                        <input style={{borderRadius:"15px"}} cla="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div cla="col-lg-6">
                      <div cla="form-group mt-3">
                        <input style={{borderRadius:"15px"}} cla="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div cla="col-lg-6">
                      <div cla="form-group mt-3">
                        <input style={{borderRadius:"15px"}} cla="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div cla="col-lg-12">
                      <div cla="form-group mt-3">
                        <textarea  style={{borderRadius:"15px"}} cla="form-control" type="text" placeholder="message"/>
                      </div>
                    </div>
                    <div cla="col-lg-12">
                      <button type="submit" cla="btn1 "><span> SUBMIT NOW <i cla="ti-arrow-right"></i></span></button>
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
