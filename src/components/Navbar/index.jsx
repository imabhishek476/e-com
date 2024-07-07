import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function index() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Navbar/>
    </div>
  )
}

export default index