import React from 'react'
import { useLocation } from 'react-router-dom'

import Leftsidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList';

const Users = () => {
  const location = useLocation();
  // console.log(location);   // Object -->  hash: "" , key : "nb3w7kau" ,pathname: "/Users" ,search : "" ,state : null


  return (
    <div className='home-container-1'>
        <Leftsidebar />
            <div className="home-container-2" style={{marginTop:'30px'}}>
            <h1 style={{fontWeight:"400"}}>Users </h1>
              <UsersList />
        </div>
    </div>
  )
}

export default Users
