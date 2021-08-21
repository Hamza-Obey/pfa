import React,{useEffect,useState} from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'
import axios from 'axios'  // new



function Index() {
const [data1,setData1]=useState([])
  useEffect(  () =>  { 
    const fetchData1 =async() => {
    const response = await axios.get("http://localhost:3001/user")
    .then(res =>
      { console.log(data1)
       setData1(res.data1) })
    
  }
  fetchData1() ; 
} , [] )

  const columns = React.useMemo(() => [
    {
      Header: "name",
      accessor: 'first_name',
      Cell: AvatarCell,
      last_nameAcessor: "last_name",
      emailAccessor: "email",
    },
    {
      Header: "email",
      accessor: 'email',
    },
    {
      Header: "occupation",
      accessor: 'occupation',
      Cell: StatusPill,
    },
    {
      Header: "birthday",
      accessor: 'birthday',
    },
    {
      Header: "Speciality",
      accessor: 'Speciality',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div style={{marginTop:"40px"}} className="">
         
        </div>
        <div className="mt-6">
          <Table columns={columns}  data={data1} />
        </div>
      </main>
    </div>
  );
}

export default Index;