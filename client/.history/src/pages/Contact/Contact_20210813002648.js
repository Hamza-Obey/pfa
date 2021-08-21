import React from 'react';
import "./Contact.css"

function Contact() {
  return (
    <>

<div class="contact2"  id="Contact-Us">
  <div class="container">
    <div class="row contact-container">
      <div class="col-lg-12">
        <div style={{height:"400px",backgroundColor:"#eeeeee"}} class="card card-shadow border-0 mb-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-box p-4">
                <h4 class="title">Contact Us</h4>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input s class="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mt-3">
                        <input class="form-control" type="text" placeholder="message"/>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <button type="submit" class="btn1 "><span> SUBMIT NOW <i class="ti-arrow-right"></i></span></button>
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
