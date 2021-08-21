import React,{useEffect,useState} from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new
import axios from "axios"



function Index() {
  const [data1,setData1]=useState([])
  useEffect(  () =>  { 
    const fetchData1=async() => {
    const response = await axios.get("http://localhost:3001/user")
    .then(res =>
      { console.log(data1)
       setData1(res.data) })
    
  }
  fetchData1() ; 
} , [] )
  

  const columns = React.useMemo(() => [
    {
      Header: "name",
      accessor: 'first_name',
      Cell: AvatarCell,
      
      last_nameAccessor: "last_name",
      imgAccessor: https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      Header: "email",
      accessor: 'email',
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
      Header: "occupation",
      accessor: 'occupation',
      Cell: StatusPill,
    },
    {
      Header: "Speciality",
      accessor: 'speciality' ,       
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

export default Index;