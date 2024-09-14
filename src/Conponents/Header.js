import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='w-full h-full bg-black text-white  flex  justify-center  '>
    <Link to={"/"}> <img src='https://img.freepik.com/premium-vector/studio-film-production-logo-design_527727-108.jpg' className='w-[240px] h-[200px] bg-cover p-[20px]'/></Link>
    </header>
  )
}

export default Header

// 