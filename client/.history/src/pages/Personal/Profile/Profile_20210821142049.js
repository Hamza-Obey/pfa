import React,{useEffect,useState} from 'react';
import './Userprofile.css'

import axios from 'axios';
import {useParams} from "react-router-dom"
import Index2 from '../../Patients/tableau/Index';

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
					<div style={{fontSize:"20px"}} className="profile-usertitle-name">
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
                                                    
                                                    <div  className="col-md-4 col-sm-4 col-xs-6">
                                                        <div style={{fontSize:"25px"}}   className="uppercase profile-stat-title"> 51 </div>
                                                        <div style={{fontSize:"15px"}}className="uppercase profile-stat-text"> Number of Patients in charge </div>
                                                    </div>
                                                    
                                                </div>
                                              
                                                 </div>                   
                                           
        
        
			</div>
		</div>
		<div style={{marginTop:"-40px"}} className="col-md-9">
           
			 
            <Index2/>
		</div>
	</div>
</div>

    </>
  );
}

export default Userprofile;