
import React from 'react';
import "./styles.css"
import {Link} from "react-router-dom"
 
  function Header() {
    return (
      
         <section className="back" id="/#">
              <div
        className='p-5 text-center bg-image'
      >
        <div>
          <div style={{marginTop:"150px"}} className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <div className="try1">WELCOME</div> 
                    <div className ="try2"> 
                        <span className="try3"> INTO 'COVID-END'</span>
                    </div>

                    <br/>
                    
              div<Link   className='btn btn-outline-light sign' to="/Signup" role='button'>
                Sign Up 
              </Link>
            </div>
          </div>
        </div>
      </div>
        </section>   
 
        
    );
  }
   
  export default Header;