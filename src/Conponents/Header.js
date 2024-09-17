import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='w-full h-[150px] bg-black text-white  flex  justify-between p-[40px] items-center '>
    <Link to={"/"}> <img src='https://img.freepik.com/premium-vector/studio-film-production-logo-design_527727-108.jpg' className='w-[240px] h-[150px] bg-cover p-[20px]'/></Link>
    <Link to={"/"} className='py-[20px] px-[30px] border-[1px] bg-black text-white m-5'>Home</Link>
    </header>
  )
}

export default Header

// 