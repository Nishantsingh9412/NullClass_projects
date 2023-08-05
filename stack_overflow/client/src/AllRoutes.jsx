import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';


const AllRoutes = () => {
  return (
                    // we Can write routes as children 
    <Routes>            
        <Route exact path='/' Component={Home}> </Route>
        <Route exact path='/Auth' Component={Auth }> </Route>

    </Routes>
  )
}

export default AllRoutes
