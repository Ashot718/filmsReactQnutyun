import React from 'react'
import { Link } from 'react-router-dom'

function Erorr() {
  return (
    <div className='w-full flex flex-col items-center   '>
      <h1 className='bg-black  text-white' >Призашла ошибка!!!<Link to={"/"} className='py-[5px] px-[10px] border-[1px] bg-black text-white m-5'>вернуться на главную страницу???</Link></h1>
    </div>
  )
}

export default Erorr