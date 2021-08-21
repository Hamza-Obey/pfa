import React,{useEffect,useState} from 'react';
import './Userprofile.css'

import axios from 'axios';
import {useParams} from "react-router-dom"
import Index3 from './tableau/Index';

function Userprofile() {
   
 
  return (
    <>

<div className="container">
    <div className="row profile">
		<div className="col-md-3">
			<div className="profile-sidebar">
				
				<div className="profile-userpic">
					<img src="../.././images/doctoravatar.png" className="img-responsive" alt=""/>
				</div>
				
				<div className="profile-usertitle">
					<div style={{fontSize:""}} className="profile-usertitle-name">
                        Ahmed Bahri
					</div>
					<div style={{fontSize:"15px"}} className="profile-usertitle-job">
						Doctor 
					</div>
				</div>
				
			
				
				<div className="profile-usermenu">
					<ol className="nav">
						<li >
							Speciality :
						</li>
						<li>
							Birthday :
						</li>
						<li>
							Phone Number : 
						</li>
						<li>
							E-mail : 
						</li>
					</ol>
				</div>
				
			   
           <div className="portlet light bordered">
                                                
                                                <div className="row list-separated profile-stat">
                                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                                        <div className="uppercase profile-stat-title"> 37 </div>
                                                        <div className="uppercase profile-stat-text"> Projects </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                                        <div className="uppercase profile-stat-title"> 51 </div>
                                                        <div className="uppercase profile-stat-text"> Tasks </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                                        <div className="uppercase profile-stat-title"> 61 </div>
                                                        <div className="uppercase profile-stat-text"> Uploads </div>
                                                    </div>
                                                </div>
                                              
                                                 <div>
                                                    <h4 className="profile-desc-title">About Jason Davis</h4>
                                                    <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                                    <div className="margin-top-20 profile-desc-link">
                                                        <i className="fa fa-globe"></i>
                                                        <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                                                    </div>
                                                    <div className="margin-top-20 profile-desc-link">
                                                        <i className="fa fa-twitter"></i>
                                                        <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div className="margin-top-20 profile-desc-link">
                                                        <i className="fa fa-facebook"></i>
                                                        <a href="https://www.facebook.com/">JasonDavisFL</a>
 </div></div></div>                   
                                           
        
        
			</div>
		</div>
		<div style={{marginTop:"-40px"}} className="col-md-9">
           
			 
            <Index3/>
		</div>
	</div>
</div>

    </>
  );
}

export default Userprofile;
