import React,{useEffect,useState} from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new
import axios from "axios"



function Index2() {
  const [doctor12,setDoctor12]=useState("")
  const [data1,setData1]=useState([])

  useEffect(  () =>  { 
    const fetchData1=async() => {
    const response = await axios.get("http://localhost:3002/Personal/Patients",{
      headers: {
       
        "Authorization": "Bearer " + localStorage.getItem("jwt")
    }
    })
    .then(res =>
      { console.log(data1)
       setData1(res.data) 
      setDoctor12(res.data.doctor12.)
      })
    
  }
  fetchData1() ; 
} , [] )
  const columns = React.useMemo(() => [
    {
      Header: "NAME",
      accessor: 'first_name',
      Cell: AvatarCell,
      last_nameAccessor:'last_name'
      
      
      
    },
    {
      Header: "CIN",
      accessor: 'cin',
    },
    
    {
      Header: "birthday",
      accessor: 'birthday',
    },
    {
      Header: "Phone Number",
      accessor: 'phone',
    },
    {
      Header: "State",
      accessor: 'state',
      Cell: StatusPill,
    },
    {
      Header: "Added By",
      accessor: 'doctor12' ,       
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
      
    },
  ], [])

  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" style={{marginTop:"40px",marginLeft:"100px"}}>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div style={{marginTop:"40px"}} className="">
         
        </div>
        <div className="mt-6">
          <Table columns={columns}  data={data1}  />
        </div>
      </main>
    </div>
  );
}

export default Index2;