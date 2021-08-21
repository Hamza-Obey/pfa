import React,{useEffect,useState} from 'react';
import './Userprofile.css'

import axios from 'axios';
import Index3 from './tableau/Index';
import { Phone } from '@material-ui/icons';

function Userprofile() {
	const [count,setCount]=useState(0)
   
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
		 setData1(res.data) 
		
		
			})
	  
	}
	fetchData1() ; 
	const fetchData2=async() => {
		const response = await axios.get("http://localhost:3002/Personal/Count",{
		  headers: {
		   
			"Authorization": "Bearer " + localStorage.getItem("jwt")
		}
		})
		.then(res =>
		  { 
		   
			setCount(res.data)
		  
			  })
		
	  }
	  fetchData2() ; 
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
							Phone Number : {data1.phone}
						</li>
						<li>
							E-mail : {data1.email}
						</li>
					</ol>
				</div>
				
			   
           <div className="portlet light bordered">
                                                
                                                <div className="row list-separated profile-stat">
                                                    
                                                    <div style={{margin}} className="col-md-4 col-sm-4 col-xs-6">
                                                        <div style={{fontSize:"25px"}}   className="uppercase profile-stat-title"> {count} </div>
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
