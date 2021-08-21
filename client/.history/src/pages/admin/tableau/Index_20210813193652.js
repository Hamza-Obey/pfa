import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new

const getData = () => {
  const data = [
    {
      first_name: "wahida",
      last_name: "manaa",
      birthday: "2021-08-14",
      gender: "male",
      email: "Hamza.obey@ensi-uma.tn",
      password: "Hamza1234",
      phone: "24226076",
      occupation: "Doctor",
      Speciality: "Cariology",
      id: 15,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    
  ]
  return [...data]
}

function Index() {
  

  const columns = React.useMemo(() => [
    {
      Header: "name",
      accessor: 'first_name',"last_name"
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

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" >
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div style={{marginTop:"40px"}} className="">
         
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Index;