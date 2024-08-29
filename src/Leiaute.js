import React from 'react'
import Futer from './Conponents/Futer'
import Header from './Conponents/Header'
import { Outlet } from 'react-router-dom'

function Leiaute() {
  return (
    <div>
        <Header/>
        <min>
            <Outlet/>
        </min>
        <Futer/>
    </div>
  )
}

export default Leiaute