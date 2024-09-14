

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './Conponents/Loading';




function Leiaute() {
  const [loading, setLeading] = useState(true)
  setTimeout(() => {
    setLeading(false);
  }, 4000);
  return (
    <div>
      {loading ? <Loading/>:null}
      <Outlet />
    </div>
  )
}

export default Leiaute