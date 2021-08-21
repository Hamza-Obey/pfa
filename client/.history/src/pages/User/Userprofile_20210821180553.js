import React,{useEffect,useState} from 'react';
import './Userprofile.css'

import axios from 'axios';
import Index3 from './tableau/Index';

function Userprofile() {
   
	const [data1,setData1]=useState([])
	useEffect(  () =>  { 
	  const fetchData1=async() => {
	  const response = await axios.get("http://localhost:3002/Personal/Userdata",{
		headers: {
		 
		  "Authorization": "Bearer " + localStorage.getItem("jwt")
	  }
	  })
	  .then(res =>
		{ console.log(data1)
		 setData1(res.data) })
	  
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
							Speciality : {data}
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
           
			 
            <Index3/>
		</div>
	</div>
</div>

    </>
  );
}

export default Userprofile;
