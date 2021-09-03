import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { BrowserRouter, Route, Link } from "react-router-dom";




 
 
function Navbar() {
  

  return (
    <section className="navbar-dark bg-dark header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav style={{backgroundColor:"#0005"}} className="navbar navbar-expand-lg fixed-top ">
              <a style={{marginLeft:"50px"}} className="navbar-brand text-white nom" href="/#" > COVID-END </a>
              
 
              <div className="topnav" id="myTopnav">
                <ul className="navbar-nav  mr-auto">
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/#News"> NEWS </a>
                  </li>
                  <li className="nav-item ">
                  <a className="nav-link" href="/#Statistics">STATISTICS </a>
                  </li>
                  <li className="nav-item ">
                  <a className="nav-link" href="/#Blog"> BLOG  </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="/#Contact-Us"> CONTACT US </a>
                  </li>
                  <li className="nav-item  Register">
                  < Link className="nav-link text-white" to="/Login"  >   Sign In </Link>
                  
                  </li>
                  

                 </ul>
                        
                 

                 
                 
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}
export default Navbar;