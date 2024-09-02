import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

function Futer() {
  return (
    <Link to={'/'} className='w-full h-[30px] text-black flex  justify-center '>ГидОнлайн-  Твой гид в мире кино! © gidonline.one ♦ </Link>
  )
}

export default Futer

