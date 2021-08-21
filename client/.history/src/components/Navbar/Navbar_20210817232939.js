import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { BrowserRouter, Route, Link } from "react-router-dom";




 
 
function Navbar() {
  const bambo = false ;

  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav style={{backgroundColor:"#0005"}} class="navbar navbar-expand-lg fixed-top ">
              <a style={{marginLeft:"50px"}} class="navbar-brand text-white nom" href="/#" > COVID-END </a>
              
 
              <div class="topnav" id="myTopnav">
                <ul class="navbar-nav  mr-auto">
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/#News"> NEWS </a>
                  </li>
                  <li class="nav-item ">
                  <a class="nav-link" href="/#Statistics">STATISTICS </a>
                  </li>
                  <li class="nav-item ">
                  <a class="nav-link" href="/#Blog"> BLOG  </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link " href="/#Contact-Us"> CONTACT US </a>
                  </li>
                  <li class="nav-item dropdown Register">
                  < Link class="nav-link text-white" to="/Login"  >   Sign In </Link>
                  
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