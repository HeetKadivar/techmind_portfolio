import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
// import Demo from '../Pages/demo'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/demos' element={<Demo/>}></Route> */}
        </Routes>
    </div>
  )
}

export default MainRoutes