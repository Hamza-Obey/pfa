import React,{useEffect,useState} from 'react';
import './Profile.css'

import axios from 'axios';
import {useParams} from "react-router-dom"
import Index2 from "../../Patients/"

function Userprofile() {
   
	const {id}=useParams()
	const [data1,setData1]=useState([])
	useEffect(  () =>  { 
	  const fetchData1=async() => {
	  const response = await axios.get(`http://localhost:3002/Personal/Personalprofile/${id}`,{
	  headers: {
		
		"Authorization": "Bearer " + localStorage.getItem("jwt") 
		}
	}
	  )
	  .then(res =>
		{ console.log(data1)
		 setData1(res.data)
		console.log(res.data)})
	  
	}
	fetchData1() ; 
  } , [] )
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
                       {data1.first_name} {data1.last_name}
					</div>
					<div style={{fontSize:"15px"}} className="profile-usertitle-job">
						{data1.occupation}
					</div>
				</div>
				
			
				
				<div className="profile-usermenu">
					<ol className="nav">
						<li >
							Speciality : {data1.speciality}
						</li>
						<li>
							Birthday : {data1.birthday}
						</li>
						<li>
							Phone Number :{data1.phone} 
						</li>
						<li>
							E-mail : {data1.email}
						</li>
					</ol>
				</div>
				
			   
           <div className="portlet light bordered">
                                                
                                                <div className="row list-separated profile-stat">
                                                    
                                                    <div  className="col-md-4 col-sm-4 col-xs-6">
                                                        <div style={{fontSize:"25px"}}   className="uppercase profile-stat-title">  </div>
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